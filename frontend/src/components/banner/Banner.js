import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return(
    <div id="bannerImg" className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 text-center">
    <div className="sm:flex sm:flex-col sm:align-center mt-20">
{      <h1 id="bannerText" className="text-6xl tracking-wide font-extrabold text-orange-300 border-solid border-black">
        Beregn ditt lån
      </h1>}
      
    </div>
  </div>
  )
}

export default Banner