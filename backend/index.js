const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const https = require("https");
const { writeFile, appendFile } = require("fs");
const { count } = require("console");

const app = express();

app.use(cors({ origin: true }));

//ROUTES
app.get("/getAdservice", async (req, res) => {
    const path = "./database/data";

    const getData = async (pubId, catId, countryId) => {
        const data = await axios
            //Update Adservice
            .get(
                `https://api.adservice.com/v2/public/publisher/comparisonfeed/data?pid=${pubId}&category_id=${catId}/`
            )
            .then(async (response) => {
                await console.log(`Adservice "${countryId}" Reached!`);
                return response.data.data;
            })
            .then(async (data) => {
                res.status(200).json(data);
                await writeFile(
                    `${path}/adService_${countryId}.js`,
                    `module.exports = \n [`,
                    (err) => {
                        console.log(err);
                    }
                );
                await data.forEach((elm, i) => {
                    appendFile(
                        `${path}/adService_${countryId}.js`,
                        `\n${JSON.stringify(elm)},`,
                        (err) => console.log(err)
                    );
                });
                await setTimeout(() => {
                    appendFile(
                        `${path}/adService_${countryId}.js`,
                        `\n ];`,
                        (err) => {
                            console.log(err);
                        }
                    );
                }, 500);
            })
            .catch((err) => console.log("Error:", err));

        await console.log(`Successfully updated "${countryId}"`);
    };

    const getAllData = async () => {
        await getData(43644, 147, "NO");
        await getData(43645, 147, "DK");
        await getData(43646, 147, "SE");
    };

    getAllData();
});

exports.run_update = functions
    .runWith({
        memory: "2GB",
    })
    .region("europe-west1")
    .https.onRequest(app);

// AWin: https://productdata.awin.com/datafeed/list/apikey/ffcd5b87a643effd7dfc06421b6be4ba
