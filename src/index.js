import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtmLS5hjNf4Cmy0wYNQQW6Jp-FdFs6g_c",
  authDomain: "cart-d09d3.firebaseapp.com",
  projectId: "cart-d09d3",
  storageBucket: "cart-d09d3.appspot.com",
  messagingSenderId: "837456955135",
  appId: "1:837456955135:web:5da944f51766d46c996eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //create instance of firebase access and export it 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
