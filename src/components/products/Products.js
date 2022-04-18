import React from "react";
import useCalc from "../../hooks/use-calc";

import formatter from "../../functions/currency-format";

const Products = (props) => {

  const product = props.productInfo;
  const premium = props.loanAmount;
  const year = props.year;

  const r = product.renteNom / 100 / 12;
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

  console.log("Per month: ", monthlyPayment + "kr");
  console.log("Total: ", total + "kr");
  console.log("Costs: ", costs + "kr");

  return (
    <>


<div id="card" class="max-w-sm m-5 rounded overflow-hidden shadow-lg mx-auto">
  <div id="card-container">
  <img id="card-img" class="w-full" src={product.bankImg} alt={product.bank} />
  </div>
  <div class="px-6 pt-4">
    <div class="font-bold text-xl mb-2">{product.bank}</div>
    <p class="text-gray-700 text-base"> <strong>Pr Måned:</strong> {formatter.format(monthlyPayment).replace(",00", "")}</p>
      <p class="text-gray-700 text-base"> <strong>Nom. Rente:</strong> {product.renteNom}%</p>
      <p class="text-gray-700 text-base"> <strong>Eff. Rente:</strong> {product.renteEff} - 20.5 %</p>
      <p class="text-gray-700 text-base"> <strong>Aldersgrense:</strong> {product.aldersgrense} år</p>
      <p class="text-gray-700 text-base"> <strong>Utbetaling:</strong>  0 - {product.utbetaling} {product.utbetaling === 1 ? "dag" : "dager"}</p>
  </div>
  <div class="px-6 pb-5">
  <a
            className="product-item-large "
            href={product.url}
            target="_blank"
            rel="noreferrer"
          >
            <button id="linkToSite" className="font-semibold">Til Nettsiden</button>
          </a>
  </div>
  <div class="flex items-center card-footer">
      <div class="text-xs">
        <p class="text-gray-900 leading-none text-center">Eksempel: kr 160 000,00 o/5 år, nom. rente 10,90 % / eff. rente 12,40 %, etabl.gebyr kr 950, kostnad 53.986kr, totalt 213.986kr</p>
      </div>
    </div>
</div>
    </>
  );
};

export default Products;
