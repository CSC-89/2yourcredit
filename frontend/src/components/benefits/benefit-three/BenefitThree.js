import React from "react";
import { seedData } from "../../../seeds/seedData";

import "./BenefitThree.css";

const BenefitThree = () => {
    const banks = seedData;

    // const [bankExamples, setBankExamples] = useState([])
    // const [banks, setBanks] = useState([...seedData])

    // const randomisedNum = () => {
    //   return Math.floor(Math.random() * (banks.length - 1));
    // };

    return (
        <>
            {/* <!-- Logo cloud on brand --> */}
            <div>
                <div className="max-w-7xl mx-auto px-4 sm:py-14 py-2 sm:px-6 lg:px-8 text-center">
                    <div className="">
                        <h2 className="sm:text-xl md:text-2xl lg:text-3xl text-orange-300 font-extrabold mb-2 mt-10 lg:mt-5">
                            EKSEMPLER PÅ BANKER
                        </h2>
                        <div className="flex">
                            {/* <div  *ngFor="let product of productList">
                <img className="h-10" [src]="product.image" alt="">
                </div> */}

                            {/* CURRENTLY IMPORTED FROM SEEDS FILE. NOT DATABASE */}
                            {banks.map((bank, index) => (
                                <div
                                    key={index}
                                    className="container flex examples justify-center items-center md:p-3 mx-auto"
                                >
                                    <img
                                        className="bankImage"
                                        src={bank.bankImg}
                                        alt={bank.bank}
                                    />
                                </div>
                            ))}

                            {/** BANK EXAMPLE MAPPING */}
                            {/* <div className="container mx-auto grid xs:grid-cols-3 lg:grid-cols-3 mx-auto my-10">

                <img className="w-40" src={banks[1].bankImg} alt={banks[1].bank}/>
                  
                  
              </div> */}
                            {/**/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BenefitThree;
