const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const https = require("https");
const { writeFile, appendFile } = require("fs");

const app = express();

app.use(cors({ origin: true }));

//ROUTES
app.get("/getAdservice", async (req, res) => {
    const path = "./database/data";

    const getData = async (pubId, catId, countryId) => {
        const data = await axios
            //Update Adservice_NO
            .get(
                `https://api.adservice.com/v2/public/publisher/comparisonfeed/data?pid=${pubId}&category_id=${catId}/`
            )
            .then((response) => {
                console.log("Reached!");
                return response.data.data;
            })
            .then((data) => {
                res.status(200).json(data)
                writeFile(
                    `${path}/adService_${countryId}.js`,
                    `module.exports = \n [`,
                    (err) => {
                        console.log(err);
                    }
                );

                data.forEach((elm, i) => {
                    appendFile(
                        `${path}/adService_${countryId}.js`,
                        `\n${JSON.stringify(elm)},`,
                        (err) => console.log(err)
                    );
                });
            })
            .then((data) => {
                setTimeout(() => {
                    appendFile(`${path}/adService_${countryId}.js`, `\n ]`, (err) => {
                        console.log(err);
                    });
                }, 1000);
            })
            .catch((err) => console.log("Error:", err));
        
    };

    // const get_NO = getData(43644, 147, "NO");
    const get_DK = getData(43645, 147, "DK");
    // const get_SE = getData(43646, 147, "SE");
});

exports.hello = functions
    .runWith({
        memory: "2GB",
    })
    .region("europe-west1")
    .https.onRequest(app);

// AWin: https://productdata.awin.com/datafeed/list/apikey/ffcd5b87a643effd7dfc06421b6be4ba
