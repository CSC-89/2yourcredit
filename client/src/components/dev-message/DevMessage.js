import React from "react";

import "./DevMessage.css";

const DevMessage = (props) => {
    const onToggle = () => {
        props.toggle(false);
    };

    return (
        <div className="relative max-w-7xl mx-auto pt-20 px-4 lg:px-8 text-center z-0">
            <div
                id="devMessage"
                className="container mx-auto px-5 py-10 mt-10 border-b border-gray-200 sm:rounded-lg shadow-lg"
            >
                <h1 className="text-1xl">
                    <strong>NB!</strong> Denne siden er for tiden under
                    utvikling. Alle data, produkter og selskaper som er oppført
                    er brukt kun til presentasjonsformål og bør ikke anses som
                    gyldige.
                </h1>
                <br />
                <h1 className="text-lg">
                    <strong>Note!</strong> This site is currently in
                    development. All data, products and companies represented
                    are purely for presentation purposes and should not be
                    considered valid.
                </h1>
                <button
                    className="button mt-10 border-solid bg-white px-3 py-2 rounded-md"
                    onClick={onToggle}
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default DevMessage;
