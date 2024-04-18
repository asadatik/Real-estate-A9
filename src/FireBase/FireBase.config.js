// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDZ_YDJ_A3H9aAY2Kzl57RUcgPpoUv0-yM",
  // authDomain: "real-estate-bussiness-88e8c.firebaseapp.com",
  // projectId: "real-estate-bussiness-88e8c",
  // storageBucket: "real-estate-bussiness-88e8c.appspot.com",
  // messagingSenderId: "623927081999",
  // appId: "1:623927081999:web:3cdc50debe0ca6a2e9f77a" 
  apiKey:import.meta.env.VITE_APIKEY ,
  authDomain:import.meta.env. VITE_AUTHDOMAIN ,

  projectId:import.meta.env.VITE_PROJECTID ,
  storageBucket:import.meta.env. VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env. VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;