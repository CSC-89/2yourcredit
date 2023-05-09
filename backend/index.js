const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const https = require("https");
const { writeFile, appendFile } = require("fs");
const { count } = require("console");
const { run_update } = require("../functions/index");
require("dotenv").config();

const app = express();

app.use(cors({ origin: true }));

const catID = process.env.ADSERVICE_CAT_ID;
const pubNO = process.env.ADSERVICE_NO_PUB_ID;
const pubDK = process.env.ADSERVICE_DK_PUB_ID;
const pubSE = process.env.ADSERVICE_SE_PUB_ID;

//ROUTES
//Fetching the Adservice data and writing to a file
app.get("/getAdservice", async (req, res) => {
    const path = "./database/data";

    const getData = async (pubId, catId, countryId) => {
        const data = await axios
            //Fetch new Adservice data
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
        //Update the data files, prepare in prep to load to database
        await getData(pubNO, catID, "NO");
        await getData(pubDK, catID, "DK");
        await getData(pubSE, catID, "SE");
    };

    getAllData();
});

// AWin: https://productdata.awin.com/datafeed/list/apikey/ffcd5b87a643effd7dfc06421b6be4ba
