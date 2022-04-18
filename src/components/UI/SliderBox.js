import React from "react";
import { Slider } from "@mui/material";
import formatter from '../../functions/currency-format'

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
    <div id="slider-box" className="container mx-auto px-5 py-2 mt-10 shadow-lg border-b border-gray-200 sm:rounded-lg bg-white">
      <h3 className="slider-title">
        Lånebeløp: {formatter.format(priceSliderData).replace(",00", "")}
      </h3>
      <Slider
        aria-label="Price"
        defaultValue={40000}
        step={5000}
        min={5000}
        max={600000}
        onChange={priceChangeHandler}
      />

      <h3 className="slider-title">Nedbetaling: {yearSliderData} år</h3>
      <Slider
        aria-label="Year"
        defaultValue={3}
        step={1}
        min={1}
        max={5}
        onChange={yearChangeHandler}
      />
    </div>
  );
};

export default SliderBox
