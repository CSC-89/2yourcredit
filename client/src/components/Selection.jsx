// import Image from 'next/future/image'
import { React, useEffect, useState } from "react";
import { Container } from "./Container";
import SliderBox from "./UI/SliderBox";
import NoBanks from "./NoBanks";
import LoadingPage from "./LoadingComponent";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import SelectionProduct from "./Selection-product";
import contentData from "../data/content";
import paginatedResults from "../functions/paginate-results";


export function Selection(props) {
    const [banksArray, setBanksArray] = useState([]);
    const [loadStatus, setLoadStatus] = useState(false);
    const [priceSliderData, setPriceSliderData] = useState(40000);
    const [yearSliderData, setYearSliderData] = useState(3);

    const countryId = props.country.countryId;
    const dbRef = collection(db, `banks_${countryId}`); //Change out for "banks" when real data comes in
    const content = contentData[`${countryId}`]

    const getData = async () => {
        //Get the data from Firebase database
        const data = await getDocs(dbRef).catch((e) => console.log(e));

        //Place data into local state
        await setBanksArray(
            data.docs.map((elem) => ({
                ...elem.data(),
                id: elem.id,
            }))
        );

        await setTimeout(() => {
            //Avoid async load issues by setting a timeout for the load status change.
            setLoadStatus(true);
        }, 1000);

        clearTimeout();
    };

    useEffect(() => {
        getData();
    }, []);

    const onPriceChange = (price) => {
        setPriceSliderData(price);
    };

    const onYearChange = (year) => {
        setYearSliderData(year);
    };

    const filteredBanks = banksArray.filter((bank) => {
        return (
            priceSliderData >= bank.minLoanAmount &&
            priceSliderData <= bank.maxLoanAmount
        );
    }).sort((a, b) => {
        if ( a.rating < b.rating){
            return 1;
          }
          if ( a.rating > b.rating){
            return -1;
          }
          return 0;
    });


    return (
        <section
            id="selection"
            aria-label="Our Selection"
            className=" py-10 mx-auto"
        >

            <Container className=" min-h-screen py-20 bg-opacity-60">
                <div className="mx-auto max-w-2xl md:text-center bg-opacity-60">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        {content.selection_text1}
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        {content.selection_text2}
                    </p>
                </div>
                <SliderBox
                    onPriceChange={onPriceChange}
                    onYearChange={onYearChange}
                    price={priceSliderData}
                />
                {!loadStatus && <LoadingPage />}

                {loadStatus && (
                    <div>
                        <p className="mt-16 lg:mt-20 text-sm italic">
                            Showing{" "}
                            <span className="font-bold">
                                {!filteredBanks.length ? 0 : 1} - {filteredBanks.length}
                            </span>{" "}
                            of{" "}
                            <span className="font-bold">
                                {filteredBanks.length}
                            </span>{" "}
                            items
                        </p>
                        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3 mt-5">
                            {/* If no banks are found */}
                            {filteredBanks.length === 0 && <li className="col-start-2 text-center"><NoBanks/></li>}

                            {filteredBanks.length > 0 &&
                                filteredBanks.map((bank, columnIndex) => (
                                    
                                    <li key={columnIndex}>
                                        <SelectionProduct
                                            productInfo={bank}
                                            year={yearSliderData}
                                            loanAmount={priceSliderData}
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </Container>
        </section>
    );
}
