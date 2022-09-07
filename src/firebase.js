// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm1eG3Aqk6JpuBdhaM5Cqaf270yXGoE-M",
  authDomain: "proyect-r-fb.firebaseapp.com",
  projectId: "proyect-r-fb",
  storageBucket: "proyect-r-fb.appspot.com",
  messagingSenderId: "843783362862",
  appId: "1:843783362862:web:2becde7bef7949fb59c2bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
