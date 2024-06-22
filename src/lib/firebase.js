// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT5q3zqctUsWvfkrXEwRT5_ENVncqzihg",
  authDomain: "buy-sell-hackathon.firebaseapp.com",
  projectId: "buy-sell-hackathon",
  storageBucket: "buy-sell-hackathon.appspot.com",
  messagingSenderId: "87817853023",
  appId: "1:87817853023:web:dbf5c31621403a1f2de3ea",
  measurementId: "G-F9PGJYGPGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

