// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCekZ1pOvNsvvgfwIUa3QX9GX5kPMWQ_Zw",
  authDomain: "th456-web.firebaseapp.com",
  projectId: "th456-web",
  storageBucket: "th456-web.firebasestorage.app",
  messagingSenderId: "686546335904",
  appId: "1:686546335904:web:70e07d642687cf6c0a31c5",
  measurementId: "G-TSE55L0CXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);