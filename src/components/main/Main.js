import {React, useState } from "react";

import Banner from "../banner/Banner";
import ProductList from "../products/ProductList";
// import ExtraInfo from "../extra-info/ExtraInfo";
// import BenefitOne from "../benefits/benefit-one/BenefitOne";
// import BenefitTwo from "../benefits/benefit-two/BenefitTwo";
import BenefitThree from "../benefits/benefit-three/BenefitThree";
import Footer from "../partials/footer/Footer";
import Navbar from "../partials/navbar/Navbar";
import DevMessage from "../dev-message/DevMessage";
import SliderBox from "../UI/SliderBox";

import './Main.css'



const Main = () => {

  const [priceSliderData, setPriceSliderData] = useState(40000);
  const [yearSliderData, setYearSliderData] = useState(3);
  const [devMessageStatus, setDevMessageStatus] = useState(true)


const onPriceChange = (price) => {
  setPriceSliderData(price)
};

const onYearChange = (year) => {
  setYearSliderData(year);
};

const onDevMessageStatus = (status) => {
  setDevMessageStatus(status)
}

  return(
    <div className="mainBody">
      <Navbar devToggleStatus={devMessageStatus}/>
    <div className="fixed inset-x-0">
    {devMessageStatus && <DevMessage toggle={onDevMessageStatus}/>}
    </div>
      
      <Banner />


      {!devMessageStatus && <SliderBox onPriceChange={onPriceChange} onYearChange={onYearChange} price={priceSliderData} year={yearSliderData}/>}

      <ProductList className="mx-auto" price={priceSliderData} year={yearSliderData}/>
      
      {/*}
      <BenefitOne />
      <BenefitTwo />
      */}
      <BenefitThree />
      {/*
      <ExtraInfo />
  */}

      <Footer />
    </div>
  );
};

export default Main;
