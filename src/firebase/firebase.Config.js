import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpbEUgYP8g0Piw6VLH3zVYy40G-Ga5i-4",
  authDomain: "nextgen-ecommarce.firebaseapp.com",
  projectId: "nextgen-ecommarce",
  storageBucket: "nextgen-ecommarce.firebasestorage.app",
  messagingSenderId: "300707921846",
  appId: "1:300707921846:web:0f797d59c4fb5ebe814b17",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
