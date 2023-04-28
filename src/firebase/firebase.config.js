
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4uHnYck0-Uz0Eyu1kPgCmGp_1CaEKmIw",
    authDomain: "ema-john-simple-auth-b15af.firebaseapp.com",
    projectId: "ema-john-simple-auth-b15af",
    storageBucket: "ema-john-simple-auth-b15af.appspot.com",
    messagingSenderId: "1052333247505",
    appId: "1:1052333247505:web:c1c64f6f0bcf15b9c0b5b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;