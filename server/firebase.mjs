// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//REACT_APP_ works
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, 
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,

  // apiKey: "AIzaSyBq2fKCDJc0Th-LcIZc7bGQ3R7ukotZSZ4",
  // authDomain: "finance-affiliate-app.firebaseapp.com",
  // databaseURL:
  //   "https://finance-affiliate-app-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "finance-affiliate-app",
  // storageBucket: "finance-affiliate-app.appspot.com",
  // messagingSenderId: "541799130114",
  // appId: "1:541799130114:web:e88dfd11c117adf3f3f31b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const dbRef = collection(db, "seeds");

const addDb = async () => {
  
}

addDb();