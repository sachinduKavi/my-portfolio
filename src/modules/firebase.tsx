// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMyk-nWKastwtiERhwZsu2hbnHl7tZvy0",
  authDomain: "myportfolio-ee5f2.firebaseapp.com",
  databaseURL: "https://myportfolio-ee5f2-default-rtdb.firebaseio.com",
  projectId: "myportfolio-ee5f2",
  storageBucket: "myportfolio-ee5f2.appspot.com",
  messagingSenderId: "623615814008",
  appId: "1:623615814008:web:f9cd6f5723e33ee197008d",
  measurementId: "G-G0FMP1SDZ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)

export default database