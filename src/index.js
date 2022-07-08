import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDl2gi3f2XVMOi9w0cpi3bX6YIepRB4dG4",
  authDomain: "puppy-store-lamas.firebaseapp.com",
  projectId: "puppy-store-lamas",
  storageBucket: "puppy-store-lamas.appspot.com",
  messagingSenderId: "147022872685",
  appId: "1:147022872685:web:ca20593234b62c77bb7f64",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
