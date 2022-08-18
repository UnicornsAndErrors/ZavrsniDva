// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDUH1J5Amz5S2jNR-SDLms_2J3pAI55pE",
  authDomain: "chatboxreact-60a20.firebaseapp.com",
  projectId: "chatboxreact-60a20",
  storageBucket: "chatboxreact-60a20.appspot.com",
  messagingSenderId: "755840355750",
  appId: "1:755840355750:web:eaa17ea5b2a11369499367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)