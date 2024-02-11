// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoKyTqnKU1aHQuikm-gML1Y4LOjGn_xF8",
  authDomain: "demobia-dev.firebaseapp.com",
  projectId: "demobia-dev",
  storageBucket: "demobia-dev.appspot.com",
  messagingSenderId: "693565746739",
  appId: "1:693565746739:web:1a9cd34474d7495d553d46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
