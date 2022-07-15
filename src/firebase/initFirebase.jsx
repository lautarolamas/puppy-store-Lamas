import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl2gi3f2XVMOi9w0cpi3bX6YIepRB4dG4",
  authDomain: "puppy-store-lamas.firebaseapp.com",
  projectId: "puppy-store-lamas",
  storageBucket: "puppy-store-lamas.appspot.com",
  messagingSenderId: "147022872685",
  appId: "1:147022872685:web:ca20593234b62c77bb7f64",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
