import React, { useEffect, useState } from "react";

import Products from "./Products";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

import "./ProductList.css";
import "./Products.css";

const ProductList = (props) => {
  const [banksArray, setBanksArray] = useState([]);
  const dbRef = collection(db, "seeds"); //Change out for "banks" when real data comes in

  const priceSliderData = props.price;
  const yearSliderData = props.year;

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(dbRef);

      await setBanksArray(
        data.docs.map((elem) => ({
          ...elem.data(),
          id: elem.id,
        }))
      );
    };

    getData()
      .then()
      .catch((e) => {
        console.log(e);
      });
  }, []);

  /*Bank array filter
    Logic is not currently correct. Eventually will be filtering between min.loan amount AND max.loan amount
    */

  /* Filter is BROKEN - Need to find solution */
  const filteredBanks = banksArray.filter(
    // async bank => bank.amount <= await priceSliderData

    (bank) => {
      return priceSliderData >= bank.amount;
    } // Test failed
  );

  const scrollHandler = (e) => {
    console.log(e)
  }

  return (
    <>
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 my-10" onScroll={scrollHandler}>
        {/** BANK MAPPING */}
        {filteredBanks.length === 0 && (
          <h1>Found no banks matching your search..</h1>
        )}

        {filteredBanks.length > 0 &&
          filteredBanks.map((product, index) => (
            <div key={index} className="mx-auto">
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
    </>
  );
};

export default ProductList;
