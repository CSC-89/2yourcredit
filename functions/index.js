const functions = require("firebase-functions");
const express = require("express");

const app = express();

exports.run_update = functions
    .runWith({
      memory: "2GB",
    })
    .region("europe-west1")
    .https.onRequest(app);
