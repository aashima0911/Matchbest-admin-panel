// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnoGAs8XB8gAAS3f2vGr3JFRPHfLY4Un4",
  authDomain: "matchbest-ai.firebaseapp.com",
  projectId: "matchbest-ai",
  storageBucket: "matchbest-ai.firebasestorage.app",
  messagingSenderId: "1089340756149",
  appId: "1:1089340756149:web:ad5a8976f47c5d57176efc",
  measurementId: "G-FPL2ZWH3MH"
};


// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); // Export database
export const storage = getStorage(app); // Export storage