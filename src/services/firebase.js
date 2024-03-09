// Import the functions you need from the SDKs you need
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvoH0MO-4kdvgQxR5_VydnhbhQo6FYwSc",
  authDomain: "hirer-50ee8.firebaseapp.com",
  projectId: "hirer-50ee8",
  storageBucket: "hirer-50ee8.appspot.com",
  messagingSenderId: "413829345495",
  appId: "1:413829345495:web:415106725f12913b584092"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const FieldValue = firebase.firestore.FieldValue;