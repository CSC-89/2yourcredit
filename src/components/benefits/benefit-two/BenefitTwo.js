import React from "react";

const BenefitTwo = () => {
    return (
    <>
    {/* This example requires Tailwind CSS v2.0+ */}
<div className="bg-gray-50 pt-12 sm:pt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Få et billig forbrukslån
      </h2>
      <p className="mt-3 text-xl text-gray-500 sm:mt-4">
        Har du behov for penger, og gjerne vil ta opp forbrukslån, da bør du lese deg opp på våre tips.
      </p>
    </div>
  </div>
  <div className="mt-10 bg-blue-400">
    <div className="relative">
      <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal italic text-gray-400">
                Bruk slider
              </dt>
              <dd className="order-1 text-3xl font-extrabold text-black">
                Bestem beløp
              </dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal italic text-gray-400">
                Send inn skjema
              </dt>
              <dd className="order-1 text-3xl font-extrabold text-black">
                Søk
              </dd>
            </div>
            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg leading-6 font-normal italic text-gray-400">
                Få raskt svar
              </dt>
              <dd className="order-1 text-3xl font-extrabold text-black">
                Godta og vent
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
        )
};

export default BenefitTwo;