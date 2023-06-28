// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyTnUr0OiEzO0Ko7M_i_jGDPTjvsNYxtY",
  authDomain: "flash-card-cae53.firebaseapp.com",
  projectId: "flash-card-cae53",
  storageBucket: "flash-card-cae53.appspot.com",
  messagingSenderId: "122450071944",
  appId: "1:122450071944:web:aedffbfe1993a0c2b62a3d",
  measurementId: "G-DE5H95DSLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
