import React, { useEffect, useState } from "react";

import Products from "./Products";
import { db } from "../../util/firebase";
import { ref, get } from "firebase/database";
import "./ProductList.css";
import "./Products.css";



const ProductList = (props) => {
  const [bankArr, setBankArr] = useState([]);

  const priceSliderData = props.price;
  const yearSliderData = props.year;

  useEffect(() => {
    const dbRef = ref(db, "seeds"); //Change out for "banks" when real data comes in

    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("Db name: " + dbRef._path.pieces_[0], snapshot.val());
          setBankArr(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  /*Bank array filter
    Logic is not currently correct. Eventually will be filtering between min.loan amount AND max.loan amount
    */
  const banks = bankArr.filter(
    async (bank) => (await priceSliderData) >= bank.belop
  );

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
