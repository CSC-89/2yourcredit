import React from 'react'

const ExtraInfo = () => {
  
    return (   
        <div className="py-2 mb-12 align-middle inline-block min-w-full sm:px-6 lg:px-8 text-center">
            {/* <!-- Pricing with four tiers and toggle --> */}
        <div className="bg-transparant">
          <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
              <h1 className="uppercase shadow-lg text-3xl lg:text-4xl font-extrabold text-white sm:text-center bg-customOrange mx-auto p-3 rounded-2xl">
                Få et billig forbrukslån
              </h1>
              <p className="mt-5 text-xl text-gray-700 sm:text-center">
                Har du behov for penger, og gjerne vil ta opp forbrukslån,
                da bør du lese deg opp på våre tips.
              </p>
            </div>
            <div className="mt-12 space-y-4 sm:mt-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white py-2">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-bold text-gray-700">
                    Effektiv rente
                  </h2>
                  <p className="mt-4 text-sm text-gray-700">
                    Effektiv rente er den faktiske renten du må betale på
                    ditt lån.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white py-2">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-bold text-gray-700">
                    Bankens rentetilbud
                  </h2>
                  <p className="mt-4 text-sm text-gray-700">
                    Banken kan gi deg sitt beste rentetilbud.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white py-2">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-bold text-gray-700">
                    Rask nedbetaling
                  </h2>
                  <p className="mt-4 text-sm text-gray-700">
                    Her er det beste tipset å spare penger.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white py-2">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-bold text-gray-700">
                    Avdragsfrihet
                  </h2>
                  <p className="mt-4 text-sm text-gray-700">
                    Avslå hvis banken tilbyr deg avdragsfrihet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ExtraInfo;