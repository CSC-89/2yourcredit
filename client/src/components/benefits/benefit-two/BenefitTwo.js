import React from "react";
import bannerImg from '../../../assets/imgs/banner/banner1.svg'


const BenefitTwo = (props) => {

    return (
    <>
    {/* This example requires Tailwind CSS v2.0+ */}
<div className="bg-gray-50 pt-12 sm:pt-16 mx-2 rounded-lg mt-14">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center md:pt-2">
      <h2 className="uppercase text-2xl font-extrabold text-gray-800 sm:text-4xl">
       Beregn ditt lån
      </h2>
      {/* <p className="mt-3 text-xl text-gray-800 sm:mt-4">
        Har du behov for penger, og gjerne vil ta opp forbrukslån, da bør du lese deg opp på våre tips.
      </p> */}
    </div>
  </div>
  <div className="mt-5 bg-blue-100 pb-5 rounded-lg">
    <div className="flex justify-center">
      <img src={bannerImg}  className="md:w-3/4  pt-5 px-4 md:px-0" alt="bestem - søk - godta og vent" />
    </div>
  </div>
</div>
    </>
        )
};

export default BenefitTwo;