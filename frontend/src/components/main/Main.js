// import { React, useState, useEffect } from "react";

// import ProductList from "../products/ProductList";
// import ExtraInfo from "../extra-info/ExtraInfo";
// // import BenefitOne from "../benefits/benefit-one/BenefitOne";
// import BenefitTwo from "../benefits/benefit-two/BenefitTwo";
// import Footer from "../partials/footer/Footer";
// import Navbar from "../partials/navbar/Navbar";
// import DevMessage from "../dev-message/DevMessage";
// import SliderBox from "../UI/SliderBox";
// import { useCookies } from 'react-cookie'

// import "./Main.css";

// const Main = () => {
//     const [priceSliderData, setPriceSliderData] = useState(40000);
//     const [yearSliderData, setYearSliderData] = useState(3);
//     const [devMessageStatus, setDevMessageStatus] = useState(true);

//     const [cookies, setCookie] = useCookies("cookies");

//     useEffect(() => {
//         if(cookies.returnUser === false) {
//             setCookie("returnUser", true, {
//                 path: "/",
//                 // domain: "2yourcredit.com",
//                 secure: false,
//                 httpOnly: false,
//             })
//         } else {
//             setCookie("returnUser", false, {
//                 path: "/",
//                 // domain: "2yourcredit.com",
//                 secure: false,
//                 httpOnly: false,
//             })
//         }
//         ;
//     },[setCookie])


//     const onPriceChange = (price) => {
//         setPriceSliderData(price);
//     };

//     const onYearChange = (year) => {
//         setYearSliderData(year);
//     };

//     const onDevMessageStatus = (status) => {
//         setDevMessageStatus(status);
//     };

//     return (
//         <>
//             <div className="mainBody lg:px-64">
//                 <Navbar devToggleStatus={devMessageStatus} />
//                 <div className="fixed inset-x-0">
//                     {devMessageStatus && (
//                         <DevMessage toggle={onDevMessageStatus} />
//                     )}
//                 </div>

//                 {!devMessageStatus && (
//                     <>
//                         {/* <BenefitTwo messageStatus={cookies.returnUser}/> */}
//                         <SliderBox
//                             onPriceChange={onPriceChange}
//                             onYearChange={onYearChange}
//                             price={priceSliderData}
//                             year={yearSliderData}
//                         />

//                         <ProductList
//                             className="mx-auto"
//                             price={priceSliderData}
//                             year={yearSliderData}
//                         />

//                         {/*
//                         <BenefitOne />
//                         <BenefitThree />
//                         */}

//                         <ExtraInfo />
//                     </>
//                 )}
//             </div>
//             {!devMessageStatus && <Footer />}
//         </>
//     );
// };

// export default Main;

import { React, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
// import Head from 'next/head'
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Selection } from "../Selection";

const Main = () => {
    const [priceSliderData, setPriceSliderData] = useState(40000);
    const [yearSliderData, setYearSliderData] = useState(3);
    const [cookies, setCookie] = useCookies("cookies");

    // useEffect(() => {
    //     setCookie("TestCookie", "Hello", {
    //         path: "/",
    //         // domain: "2yourcredit.com",
    //         secure: false,
    //         httpOnly: false,
    //     });
    // }, [setCookie]);

        const onPriceChange = (price) => {
        setPriceSliderData(price);
    };

    const onYearChange = (year) => {
        setYearSliderData(year);
    };

    return (
        <>
            <header>
                <title>2YourCredit</title>
                <meta
                    name="description"
                    content="En samling av forbrukslån fra de største bankene i Norge. This way to your credit."
                />
            </header>
            <Header />
            <main>
                <Hero onPriceChange={onPriceChange}
                    onYearChange={onYearChange}
                    price={priceSliderData}
                    year={yearSliderData}/>
                {/* <PrimaryFeatures /> */}
                {/* <SecondaryFeatures /> */}
                {/* <CallToAction /> */}
                <Selection
                    className="mx-auto"
                    price={priceSliderData}
                    year={yearSliderData}
                />
                {/* <Pricing /> */}
                {/* <Faqs /> */}
            </main>
            <Footer />
        </>
    );
};

export default Main;
