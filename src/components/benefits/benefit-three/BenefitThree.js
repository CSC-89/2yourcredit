import React, {useState, useEffect} from "react";
import { seedData } from "../../../seeds/seedData";

const BenefitThree = () => {

    const banks = seedData;
    
  // const [bankExamples, setBankExamples] = useState([])
  // const [banks, setBanks] = useState([...seedData])

  const randomisedNum = () => {
    return Math.floor(Math.random() * (banks.length - 1));
  }



  

  return (
    <>
      {/* <!-- Logo cloud on brand --> */}
      <div className="bg-blue-400">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center">
          <div className="lg:space-y-10">
            <h2 className="text-3xl font-extrabold text-white">
              Eksempler på banker
            </h2>
            <div className="flex justify-center">
              {/* <div  *ngFor="let product of productList">
                <img className="h-10" [src]="product.image" alt="">
                </div> */}
              {banks.map((bank, index) => (
                  
              

                 <div key={index} className="container flex justify-center mx-auto " >

                 <img className="w-40" src={bank.bankImg} alt={bank.bank}/>
                   
                   
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
