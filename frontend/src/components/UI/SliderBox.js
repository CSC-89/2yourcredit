import React from "react";
import { Slider } from "@mui/material";
import formatter from "../../functions/currency-format";
import sliderImg from "../../assets/imgs/sliderImg/undraw_innovative_re_rr5i.svg";

const SliderBox = (props) => {
    const priceSliderData = props.price;
    const yearSliderData = props.year;

    const priceChangeHandler = (event) => {
        props.onPriceChange(event.target.value);
    };

    const yearChangeHandler = (event) => {
        props.onYearChange(event.target.value);
    };

    // document.addEventListener("scroll", (e) => {
    //   try {
    //     const slidersBox = document.getElementById("slider-container");
    //     const top = slidersBox.getBoundingClientRect().top;
    //     let fixBool = false
    //     console.log(top);
    //     if (top <= 100) {
    //       return fixBool = true;
    //     } else {

    //     }
    //     console.log(fixBool)
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });

    // try {
    //   if(document.getElementById("sliders-box").offsetTop === 0) {
    //     console.log("Yes")
    //   } else {
    //   throw new Error("NONONO")
    // }
    // }
    // catch(e) {
    //   console.log(e)
    // }

    return (
        <>
            <div className="container mx-auto mt-10 bg-white grid sm:grid-rows-0 sm:grid-cols-2">
                <div className="flex justify-center">
                    <img className="p-5" src={sliderImg} alt="stock"></img>
                </div>
                <div
                    className="flex flex-col items-center justify-between px-5 lg:my-10"
                >
                    <div className="mt-5 bg-slate-200 overflow-hidden rounded-lg flex my-4 justify-center">
                        <h3 className="px-5">Lånebeløp</h3>
                        <h3 className="px-5 bg-blue-200">
                            {formatter
                                .format(priceSliderData)
                                .replace(",00", "")}
                        </h3>
                    </div>
                    <Slider
                        aria-label="Price"
                        defaultValue={40000}
                        step={5000}
                        min={5000}
                        max={600000}
                        onChange={priceChangeHandler}
                    />

                    <div className="bg-slate-200 rounded-lg overflow-hidden flex justify-center my-4">
                        <h3 className="px-5">Nedbetaling: </h3>
                        <h3 className="px-10  bg-blue-200">
                            {yearSliderData} År
                        </h3>
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
        </>
    );
};

export default SliderBox;
