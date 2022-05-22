import React from "react";
import useCalc from "../../hooks/use-calc";

import formatter from "../../functions/currency-format";

const Products = (props) => {

  const product = props.productInfo;
  const premium = props.loanAmount;
  const year = props.year;

  const r = product.nomInterest / 100 / 12;
  const n = 12 * year;

  const math = useCalc(r, n);

  const calculations = (premium, math) => {
    const monthlyPayment = Math.round(premium * math);
    const total = parseInt((monthlyPayment * n).toFixed(2));
    const costs = total - premium;

    return {
      monthlyPayment,
      total,
      costs,
    };
  };

  const { monthlyPayment, total, costs } = calculations(premium, math);


  return (
    <>


<div id="card" className="max-w-xs m-5 rounded overflow-hidden shadow-lg">
  <div id="card-container">
  <img id="card-img" className="w-full" src={product.bankImg} alt={product.bank} />
  </div>
  <div className="px-6 pt-4">
    <div className="font-bold text-xl mb-2">{product.bank}</div>
    <p className="text-gray-700 text-base"> <strong>Pr Måned:</strong> {formatter.format(monthlyPayment).replace(",00", "")}</p>
      <p className="text-gray-700 text-base"> <strong>Nom. Rente:</strong> {product.nomInterest}%</p>
      <p className="text-gray-700 text-base"> <strong>Eff. Rente:</strong> {product.effInterest} - 20.5 %</p>
      <p className="text-gray-700 text-base"> <strong>Aldersgrense:</strong> {product.age} år</p>
      <p className="text-gray-700 text-base"> <strong>Utbetaling:</strong>  0 - {product.payout} {product.payout === 1 ? "dag" : "dager"}</p>
  </div>
  <div className="px-6 pb-5">
  <a
            className="product-item-large "
            href={product.url}
            target="_blank"
            rel="noreferrer"
          >
            <button id="linkToSite" className="font-semibold">Til Nettsiden</button>
          </a>
  </div>
  <div className="flex items-center card-footer">
      <div className="text-xs">
        <p className="text-gray-900 leading-none text-center">Eksempel: kr 160 000,00 o/5 år, nom. rente 10,90 % / eff. rente 12,40 %, etabl.gebyr kr 950, kostnad 53.986kr, totalt 213.986kr</p>
      </div>
    </div>
</div>
    </>
  );
};

export default Products;
