// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8QQNiQjyqo5wLbgiSnDwsK5EdJnErDi0",
  authDomain: "flashcards-saas-5b0a5.firebaseapp.com",
  projectId: "flashcards-saas-5b0a5",
  storageBucket: "flashcards-saas-5b0a5.appspot.com",
  messagingSenderId: "396152244994",
  appId: "1:396152244994:web:f4586895473f9aaf69501b",
  measurementId: "G-5XL8X5YD85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export { db };