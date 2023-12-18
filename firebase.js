import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJTif3AKBGQVKqaaFhg5ieXKXvOH9U-uA",
  authDomain: "niddle-6491f.firebaseapp.com",
  projectId: "niddle-6491f",
  storageBucket: "niddle-6491f.appspot.com",
  messagingSenderId: "211903947659",
  appId: "1:211903947659:web:dab8be2da3b2f326af458e",
  measurementId: "G-XJMQJLFGM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);