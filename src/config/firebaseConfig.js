
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4tAo9MZtmsuN6ZaLj0vv7F9sZLYifA4g",
  authDomain: "ecommerce-7ac4d.firebaseapp.com",
  projectId: "ecommerce-7ac4d",
  storageBucket: "ecommerce-7ac4d.appspot.com",
  messagingSenderId: "1063147497169",
  appId: "1:1063147497169:web:2527234e49ecb15e9987f0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);