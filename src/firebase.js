// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyrLzoTnmnDKfvEBeL1GPBCoaFQCiaG7k",
  authDomain: "realtor-clone-react-70606.firebaseapp.com",
  projectId: "realtor-clone-react-70606",
  storageBucket: "realtor-clone-react-70606.appspot.com",
  messagingSenderId: "371750789963",
  appId: "1:371750789963:web:a81548d3a10f3c33db3ece",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
