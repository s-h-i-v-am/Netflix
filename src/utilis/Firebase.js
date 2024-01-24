// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJoRYVcgRGH38KdLMk-DjcR2uupXi0dEQ",
  authDomain: "netflix-gpt-d5730.firebaseapp.com",
  projectId: "netflix-gpt-d5730",
  storageBucket: "netflix-gpt-d5730.appspot.com",
  messagingSenderId: "126615279002",
  appId: "1:126615279002:web:dff5f78935866a7a025623",
  measurementId: "G-99SC3YVW3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();