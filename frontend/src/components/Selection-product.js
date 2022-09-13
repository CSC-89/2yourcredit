import React from "react";
import useCalc from "../hooks/use-calc";
import formatter from "../functions/currency-format";
import {Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const SelectionProduct = (props) => {
    const bank = props.productInfo;
    const premium = props.loanAmount;
    const year = props.year;
    const meanInterest = (bank.minInterestRate * bank.maxInterestRate) / 2;

    const r = meanInterest / 100 / 12;
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
        <ul className="flex flex-col gap-y-6 sm:gap-y-8">
            <a href={bank.trackingUrl} target="_blank">
                <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 hover:shadow-blue-300">
                        <blockquote className="relative">
                            <div id="star-rating" className="float-right">
                                <Rating
                                    name="text-feedback"
                                    value={(bank.rating / 10) / 2}
                                    readOnly
                                    precision="0.25"
                                    emptyIcon={
                                        <StarIcon
                                            style={{ opacity: 0.55 }}
                                            fontSize="inherit"
                                        />
                                    }
                                />
                            </div>
                            <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>Pr Måned:</strong>{" "}
                                {formatter
                                    .format(monthlyPayment)
                                    .replace(",00", "")}
                            </p>
                            <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>Nom. Rente:</strong>{" "}
                                {bank.minInterestRate} - {bank.maxInterestRate}%
                            </p>
                            <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>Aldersgrense:</strong> {bank.minAge} år
                            </p>
                            <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>Admin.gebyr:</strong>{" "}
                                {formatter
                                    .format(bank.monthlyAdministrationFee)
                                    .replace(",00", "")}
                            </p>
                            {/* <p className="text-md tracking-tight text-slate-900">
                                {" "}
                                <strong>Utbetaling:</strong> 0 - {bank.payout}{" "}
                                {bank.payout === 1 ? "dag" : "dager"}
                            </p> */}
                        </blockquote>
                        <p className="mt-5 text-xs tracking-tight text-slate-400 italic overflow-scroll h-9 border shadow-inner rounder-lg border-gray-200">
                            {bank.loanExample}
                        </p>
                        <figcaption className="relative mt-3 flex items-center justify-between border-t border-slate-100 pt-6">
                            <div>
                                <div className="font-display text-base text-slate-900">
                                    {bank.name}
                                </div>
                                <div className="mt-1 text-sm text-slate-500">
                                    Eff. Rente: {bank.minEffectiveRate} {bank.minEffectiveRate ? "- " : "N/A"}
                                    {bank.maxEffectiveRate} {bank.maxEffectiveRate && "%"}
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-lg bg-slate-50">
                                <img
                                    className="p-2 w-32 h-20 object-cover"
                                    src={bank.imageUrl}
                                    alt=""
                                    width={56}
                                    height={56}
                                />
                            </div>
                        </figcaption>
                    </figure>
                </li>
            </a>
        </ul>
    );
};

export default SelectionProduct;
