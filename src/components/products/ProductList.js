import React, { useEffect, useState } from "react";

import Products from "./Products";
import { db } from "../../firebase";
import { getDocs, collection } from 'firebase/firestore'

import "./ProductList.css";
import "./Products.css";



const ProductList = (props) => {
  const [banksArray, setBanksArray] = useState([]);
  const dbRef = collection(db, "seeds"); //Change out for "banks" when real data comes in

  const priceSliderData = props.price;
  const yearSliderData = props.year;

  useEffect(() => {
    const getData = async () => {

      const data = await getDocs(dbRef)

      await setBanksArray(data.docs.map(elem => (
        {
          ...elem.data(),
          id: elem.id}
      )))

    }

    getData().then().catch(e => {
      console.log(e)
    })
     
  }, []);

  /*Bank array filter
    Logic is not currently correct. Eventually will be filtering between min.loan amount AND max.loan amount
    */

    /* Filter is BROKEN - Need to find solution */
  const banks = banksArray.filter(

    // async bank => bank.amount <= await priceSliderData

    async bank => {
      return await priceSliderData <= bank.amount} // Test failed
  )

  // console.log("banksArray: ", banksArray)
  console.log("banks: ", banks)


  return (
    <>
      <div className="">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 my-10 mx-auto">
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
