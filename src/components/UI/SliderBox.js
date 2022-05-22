import React from "react";
import { Slider } from "@mui/material";
import formatter from '../../functions/currency-format'
import sliderImg from '../../assets/imgs/sliderImg/stock-photo.jpeg'

import './SliderBox.css'

const SliderBox = (props) => {

  const priceSliderData = props.price
  const yearSliderData = props.year
  
  const priceChangeHandler = (event) => {
    props.onPriceChange(event.target.value)
  }

  const yearChangeHandler = (event) => {
    props.onYearChange(event.target.value)
  }

  return (
    <div id="slider-box" className="container mx-auto px-5 py-5 mt-10 shadow-lg border-b border-gray-200 sm:rounded-md bg-white grid xs:grid-rows-2 md:grid-rows-0 md:grid-cols-2 ">
      <div id="slider-img-box">
        <img id="slider-img" src={sliderImg} alt="stock"></img>
      </div>
      <div className="flex flex-col items-center justify-between">
      <div className="mt-5 slider-title flex justify-center">
        <h3 className="px-5">Lånebeløp</h3>
        <h3 className="px-5 slider-title-value">{formatter.format(priceSliderData).replace(",00", "")}</h3>
      </div>
      <Slider
        aria-label="Price"
        defaultValue={40000}
        step={5000}
        min={5000}
        max={600000}
        onChange={priceChangeHandler}
      />

      <div id="" className="slider-title flex justify-center sm:mt-5 lg:mt-0">
        <h3 className="px-5">Nedbetaling: </h3>
        <h3 className="px-5 slider-title-value">{yearSliderData} ÅR</h3>
      </div>
      <Slider
        aria-label="Year"
        defaultValue={3}
        step={1}
        min={1}
        max={5}
        onChange={yearChangeHandler}
      />
      </div>
    </div>
  );
};

export default SliderBox
