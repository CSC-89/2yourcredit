// import Image from 'next/future/image'
import { React, useEffect, useState } from "react";
import { Container } from "./Container";

import NoBanks from "./NoBanks";
import LoadingPage from "./LoadingComponent";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import SelectionProduct from "./Selection-product";

export function Selection(props) {
    const [banksArray, setBanksArray] = useState([]);
    const [loadStatus, setLoadStatus] = useState(false);
    const dbRef = collection(db, "banks"); //Change out for "banks" when real data comes in

    const priceSliderData = props.price;
    const yearSliderData = props.year;

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

    const filteredBanks = banksArray.filter(
        (bank) => {
            return priceSliderData >= bank.minLoanAmount && priceSliderData <= bank.maxLoanAmount;
        }
    );
    
    return (
        <section
            id="selection"
            aria-label="What our customers are saying"
            className="bg-slate-50 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        Du er nesten der!
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        Velg en av de velgene under og få deg et rimelig lån som
                        passer perfekt for deg.
                    </p>
                </div>
                {!loadStatus && <LoadingPage />}

                {loadStatus && (
                    <div>
                    <p className="mt-16 lg:mt-20 text-sm italic">Showing <span className="font-bold">1 - {filteredBanks.length}</span>  of <span className="font-bold">{filteredBanks.length}</span> items</p>
                    <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 mt-2 lg:max-w-none lg:grid-cols-3">
                        {/* If no banks are found */}
                        {filteredBanks.length === 0 && <NoBanks />}

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
