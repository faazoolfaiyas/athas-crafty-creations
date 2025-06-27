// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Replace with your actual config values
const firebaseConfig = {
  apiKey: "AIzaSyD9IWGTYM-tZfb9tFOSLsYMRZrBX4iG7W4",
  authDomain: "beads-shop-cb.firebaseapp.com",
  databaseURL: "https://beads-shop-cb-default-rtdb.firebaseio.com",
  projectId: "beads-shop-cb",
  storageBucket: "beads-shop-cb.appspot.com",  // Fixed .app to .app**spot**.com!
  messagingSenderId: "505389135142",
  appId: "1:505389135142:web:2a26f07aaef8e44a0abde7",
  measurementId: "G-GW0ZW4EEV6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
