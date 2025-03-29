// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDzJm2tx6uVevpatBSIHBeULtF4HFiXocs",
  authDomain: "prepmate-475ca.firebaseapp.com",
  projectId: "prepmate-475ca",
  storageBucket: "prepmate-475ca.firebasestorage.app",
  messagingSenderId: "658506378041",
  appId: "1:658506378041:web:7e5aacb4578365d59d56e8",
  measurementId: "G-L7F23016V2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);