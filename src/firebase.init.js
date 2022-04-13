// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4pfnrg-Ix_Wrpmneglys65NJTjgJHyEY",
    authDomain: "ema-john-simple-9de1c.firebaseapp.com",
    projectId: "ema-john-simple-9de1c",
    storageBucket: "ema-john-simple-9de1c.appspot.com",
    messagingSenderId: "168216346186",
    appId: "1:168216346186:web:5e35612fa8eace9f34b0b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default auth