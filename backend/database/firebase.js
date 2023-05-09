//Import each function from the correct module.
const { firestore } = require("firebase-admin");
const {
    initializeApp,
    applicationDefault,
    cert,
} = require("firebase-admin/app");
const {
    getFirestore,
    Timestamp,
    FieldValue,
} = require("firebase-admin/firestore");
const data = require("./data/adService_NO");
const serviceAccount = require("../../service-account-file.json");
const axios = require("axios");
const adService_NO = require("./data/adService_NO");
const adService_SE = require("./data/adService_SE");
const adService_DK = require("./data/adService_DK");

const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL:
        "https://finance-affiliate-app-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = getFirestore(app);

//Functions
async function deleteCollection(db, collectionPath, batchSize) {
    const collectionRef = db.collection(collectionPath);
    const query = collectionRef.orderBy("__name__").limit(batchSize);

    return new Promise((resolve, reject) => {
        deleteQueryBatch(db, query, resolve).catch(reject);
    });
}

async function deleteQueryBatch(db, query, resolve) {
    const snapshot = await query.get();

    const batchSize = snapshot.size;
    if (batchSize === 0) {
        // When there are no documents left, we are done
        resolve();
        return;
    }

    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });
    await batch.commit();

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
        deleteQueryBatch(db, query, resolve);
    });
}

const addDocs = (array, collectionPath) => {
    const dbRef = db.collection(collectionPath);
    array.forEach((elm) => {
        dbRef.add({
            name: elm.name,
            cleanUrl: elm.cleanUrl || null,
            epc: elm.epc || null,
            imageUrl: elm.imageUrl || null,
            loanExample: elm.loanExample || null,
            maxInterestRate: elm.maxInterestRate || null,
            maxEffectiveRate: elm.maxEffectiveRate || null,
            maxLoanAmount: elm.maxLoanAmount || null,
            maxStartupFee: elm.maxStartupFee || null,
            minAge: elm.minAge || null,
            minInterestRate: elm.minInterestRate || null,
            minIncomeRequired: elm.minIncomeRequired || null,
            minEffectiveRate: elm.minEffectiveRate || null,
            minLoanAmount: elm.minLoanAmount || null,
            rating: elm.rating || null,
            trackingUrl: elm.trackingUrl || null,
        });
    });
};

const updateDb_NO = () => {
    deleteCollection(db, "banks_NO", 0).then(() => {
        addDocs(adService_NO, "banks_NO");
        console.log("[[ ADSERVICE - NORWAY ]] UPDATE SUCCESSFUL");
    });
};

const updateDb_SE = () => {
    deleteCollection(db, "banks_SE", 0).then(() => {
        addDocs(adService_SE, "banks_SE");
        console.log("[[ ADSERVICE - SWEDEN ]] UPDATE SUCCESSFUL");
    });
};

const updateDb_DK = () => {
    deleteCollection(db, "banks_DK", 0).then(() => {
        addDocs(adService_DK, "banks_DK");
        console.log("[[ ADSERVICE - DENMARK ]] UPDATE SUCCESSFUL");
    });
};

const updateData = async () => {
    await axios
        .get(
            "http://localhost:5000/finance-affiliate-app/europe-west1/run_update/getAdService"
        )
        .then(async () => {
            console.log("List updated")
            try {
                //Update the database
                await updateDb_NO();
                await updateDb_SE();
                await updateDb_DK();
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        });
};

updateData();
// "node firebase.js" to run
// or "node backend/database/firebase.js" from root
