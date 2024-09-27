// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtMUxezlXZjuXGVUZ9PEVukw-4OZzCgSA",
  authDomain: "expensetracker-c038e.firebaseapp.com",
  projectId: "expensetracker-c038e",
  storageBucket: "expensetracker-c038e.appspot.com",
  messagingSenderId: "926929667689",
  appId: "1:926929667689:web:c331e9f60939170cc544f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
