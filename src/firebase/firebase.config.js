// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4S0HgXD2_j-K109dC4Esby0UBJf8enOg",
  authDomain: "auth-moha-milon-44541.firebaseapp.com",
  projectId: "auth-moha-milon-44541",
  storageBucket: "auth-moha-milon-44541.firebasestorage.app",
  messagingSenderId: "999810688328",
  appId: "1:999810688328:web:46297405b32d4e3c53ff7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
