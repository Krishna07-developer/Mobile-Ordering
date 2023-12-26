// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mobile-ordering-c493b.firebaseapp.com",
  projectId: "mobile-ordering-c493b",
  storageBucket: "mobile-ordering-c493b.appspot.com",
  messagingSenderId: "778639092748",
  appId: "1:778639092748:web:1a013497e9f23f5f5c5229"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);