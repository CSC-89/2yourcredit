import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return(
    <div id="bannerImg" className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 text-center">
    <div className="sm:flex sm:flex-col sm:align-center mt-20">
{      <h1 id="bannerText" className="text-6xl tracking-wide font-extrabold text-white border-solid border-black">
        BEREGN DITT LÅN
      </h1>}
      
    </div>
  </div>
  )
}

export default Banner