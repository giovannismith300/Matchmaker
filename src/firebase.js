// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5mAQ732rOrHDvbzVJ4ZHEtCTRKW-BeG4",
  authDomain: "matchmaker-73034.firebaseapp.com",
  projectId: "matchmaker-73034",
  storageBucket: "matchmaker-73034.appspot.com",
  messagingSenderId: "637162971137",
  appId: "1:637162971137:web:c78028d965dbad13af2000",
  measurementId: "G-H387EVL67P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 