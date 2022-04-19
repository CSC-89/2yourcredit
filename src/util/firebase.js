// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq2fKCDJc0Th-LcIZc7bGQ3R7ukotZSZ4",
  authDomain: "finance-affiliate-app.firebaseapp.com",
  databaseURL:
    "https://finance-affiliate-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "finance-affiliate-app",
  storageBucket: "finance-affiliate-app.appspot.com",
  messagingSenderId: "541799130114",
  appId: "1:541799130114:web:e88dfd11c117adf3f3f31b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
