import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  /** replace this config file by your config file. */
  apiKey: "AIzaSyDrle_PMuQ0dnq00eHy2GsMqot7FbsD5as",
  authDomain: "webdevelopment-2fa09.firebaseapp.com",
  projectId: "webdevelopment-2fa09",
  storageBucket: "webdevelopment-2fa09.appspot.com",
  messagingSenderId: "218510888487",
  appId: "1:218510888487:web:94c665d86b76842e82c802",
  measurementId: "G-13YG1KQ57S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
