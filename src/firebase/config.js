// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5x3GqB98MidQNxsa-b_100PPVdp47z-g",
  authDomain: "react-couderhouse.firebaseapp.com",
  projectId: "react-couderhouse",
  storageBucket: "react-couderhouse.firebasestorage.app",
  messagingSenderId: "122991663010",
  appId: "1:122991663010:web:bf9079a6bbf97196a1c4fb",
  measurementId: "G-NQMCLZKW86"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);