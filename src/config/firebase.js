import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDGEWPD5MgqY0tQIDA8Nmz5ckuXKIZHpwM",
  authDomain: "tiktok-clone-5ff48.firebaseapp.com",
  projectId: "tiktok-clone-5ff48",
  storageBucket: "tiktok-clone-5ff48.appspot.com",
  messagingSenderId: "374470610531",
  appId: "1:374470610531:web:eee47892972bfd24ab7256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
