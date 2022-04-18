import React from "react";

import Products from "./Products";

import "./ProductList.css";
import "./Products.css";

import { seedData } from "../../seeds/seedData";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBq2fKCDJc0Th-LcIZc7bGQ3R7ukotZSZ4",
//   authDomain: "finance-affiliate-app.firebaseapp.com",
//   databaseURL: "https://finance-affiliate-app-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "finance-affiliate-app",
//   storageBucket: "finance-affiliate-app.appspot.com",
//   messagingSenderId: "541799130114",
//   appId: "1:541799130114:web:e88dfd11c117adf3f3f31b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //Reference for the database
// const db = getDatabase(app)
// const bankDataRef = ref(db, 'banks')



const ProductList = (props) => {

const priceSliderData = props.price
const yearSliderData = props.year

//   const seedData = getList('https://finance-affiliate-app-default-rtdb.europe-west1.firebasedatabase.app')

// onValue(bankDataRef, (snapshot) => {
//   const data = snapshot.val()
//   console.log("data = ", data)
//   setDbData(data)
// })


  /*Bank array filter
    Logic is not currently correct. Eventually will be filtering between min.loan amount AND max.loan amount
    */
  const banks = seedData.filter((bank) => priceSliderData >= bank.belop);

  return (
    <>
      <div className="bg-gradient-to-tl container flex mx-auto">



                <div className="container mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 my-10">
                
                  {/** BANK MAPPING */}
                  {banks.length === 0 && <h1>Found no banks matching your search..</h1>}

                  {banks.length > 0 &&
                    
                    banks.map((product, index) => (
                      <div key={index} className="mx-2">
                      <Products
                        productInfo={product}
                        year={yearSliderData}
                        loanAmount={priceSliderData}
                      />
                      </div>
                    ))}
                    </div>
                {/* </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ProductList;
