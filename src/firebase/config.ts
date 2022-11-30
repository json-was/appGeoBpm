// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwOzBeOQDLV7cUhUUya8fl-BxqTWZivFU",
  authDomain: "apptea-d9fd3.firebaseapp.com",
  databaseURL: "https://apptea-d9fd3-default-rtdb.firebaseio.com",
  projectId: "apptea-d9fd3",
  storageBucket: "apptea-d9fd3.appspot.com",
  messagingSenderId: "969970205882",
  appId: "1:969970205882:web:fa4dee0f9861583b036e83",
  measurementId: "G-Y4SWK24N6W"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
// const analytics = getAnalytics(FirebaseApp);