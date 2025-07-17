// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbEQUBU3G7Ua8pWCT1KVb56_FRFHAeoxw",
  authDomain: "netflixgpt-8c7c8.firebaseapp.com",
  projectId: "netflixgpt-8c7c8",
  storageBucket: "netflixgpt-8c7c8.firebasestorage.app",
  messagingSenderId: "616555805281",
  appId: "1:616555805281:web:2c3b843a71abae6c410820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();