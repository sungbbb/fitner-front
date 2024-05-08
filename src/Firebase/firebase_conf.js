// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCDXmrLMsxGYKBwQioj263AdoydxDYGAk",
  authDomain: "motionbit-fitner.firebaseapp.com",
  projectId: "motionbit-fitner",
  storageBucket: "motionbit-fitner.appspot.com",
  messagingSenderId: "328196565784",
  appId: "1:328196565784:web:fe127a9f93c86036728c6d",
  measurementId: "G-CN30RRMFXL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
