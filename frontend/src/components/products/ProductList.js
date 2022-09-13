import React, { useEffect, useState } from "react";

import Products from "./Products";
import LoadingPage from "../LoadingComponent";
import NoBanks from "../NoBanks";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

import "./ProductList.css";
import "./Products.css";

const ProductList = (props) => {
    const [banksArray, setBanksArray] = useState([]);
    const [loadStatus, setLoadStatus] = useState(false);
    const dbRef = collection(db, "seeds"); //Change out for "banks" when real data comes in

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

    /*Bank array filter
    Logic is not currently correct. Eventually will be filtering between min.loan amount AND max.loan amount
    */

    /* Filter is BROKEN - Need to find solution */
    const filteredBanks = banksArray.filter(
        // async bank => bank.amount <= await priceSliderData

        (bank) => {
            return priceSliderData >= bank.amount;
        } // Test failed
    );

    const scrollHandler = (e) => {
        console.log(e);
    };

    return (
        <>
            {!loadStatus && <LoadingPage />}

            {loadStatus && (
                <div>
                    {/* If no banks are found */}
                    {filteredBanks.length === 0 && <NoBanks />}

                    {/** BANK MAPPING */}
                    {filteredBanks.length > 0 && (
                        <div
                            className="container grid sm:grid-cols-2 md:grid-cols-3  mt-10 mx-auto"
                            onScroll={scrollHandler}
                        >
                            {filteredBanks.map((product, index) => (
                                <div key={index} className="mx-auto">
                                    <Products
                                        productInfo={product}
                                        year={yearSliderData}
                                        loanAmount={priceSliderData}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {/* </tbody>
              </table>
            </div>
          </div>
        </div> */}
        </>
    );
};

export default ProductList;
