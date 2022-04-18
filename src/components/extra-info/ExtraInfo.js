import React from 'react'

const ExtraInfo = () => {
  
    return (   
        <div className="py-2 mb-12 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            {/* <!-- Pricing with four tiers and toggle --> */}
        <div className="bg-transparant">
          <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
              <h1 className="text-5xl font-extrabold text-white sm:text-center">
                Få et billig forbrukslån
              </h1>
              <p className="mt-5 text-xl text-white sm:text-center">
                Har du behov for penger, og gjerne vil ta opp forbrukslån,
                da bør du lese deg opp på våre tips.
              </p>
            </div>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-700">
                    Effektiv rente
                  </h2>
                  <p className="mt-4 text-sm text-gray-700">
                    Effektiv rente er den faktiske renten du må betale på
                    ditt lån.
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-700">
                      12
                    </span>
                    <span className="text-base font-medium text-gray-700">
                      %
                    </span>
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-700">
                    Bankens rentetilbud
                  </h2>
                  <p className="mt-4 text-sm text-gray-700">
                    Banken kan gi deg sitt beste rentetilbud.
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-700">
                      DNB
                    </span>
                    <span className="text-base font-medium text-gray-700">
                      /kontakt
                    </span>
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-700">
                    Rask nedbetaling
                  </h2>
                  <p className="mt-4 text-sm text-gray-700">
                    AHer er det beste tipset å ikke spare penger.
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-700">
                      100
                    </span>
                    <span className="text-base font-medium text-gray-700">
                      kr
                    </span>
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
                <div className="p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-700">
                    Avdragsfrihet
                  </h2>
                  <p className="mt-4 text-sm text-gray-700">
                    Avslå hvis banken tilbyr deg avdragsfrihet.
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-700">
                      69
                    </span>
                    <span className="text-base font-medium text-gray-700">
                      %
                    </span>
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