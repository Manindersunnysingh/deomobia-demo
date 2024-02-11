// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const authDomain = import.meta.env.VITE_REACT_APP_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID;
const storageBucket = import.meta.env.VITE_REACT_APP_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_REACT_APP_MESSAGING_ID;
const appId = import.meta.env.VITE_REACT_APP_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
