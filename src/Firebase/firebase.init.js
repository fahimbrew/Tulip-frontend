// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABiqWHBLzD528s5x4i5JZVu4oBcUPQk3M",
  authDomain: "crowd-funding-1a70a.firebaseapp.com",
  projectId: "crowd-funding-1a70a",
  storageBucket: "crowd-funding-1a70a.firebasestorage.app",
  messagingSenderId: "333045220656",
  appId: "1:333045220656:web:0f02f71a064bb154a874f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);