// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlX3x2XXKAXR1H0PVulACcsl5zflDjIk0",
  authDomain: "kitchen-assistant-609f3.firebaseapp.com",
  databaseURL: "https://kitchen-assistant-609f3-default-rtdb.firebaseio.com",
  projectId: "kitchen-assistant-609f3",
  storageBucket: "kitchen-assistant-609f3.appspot.com",
  messagingSenderId: "962148613704",
  appId: "1:962148613704:web:96a0ce5bd0b9e5725a627d",
  measurementId: "G-M8GJXRTDCD"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
// const analytics = getAnalytics(app);
const auth = getAuth(app);


export { app, auth, db, firebaseConfig };