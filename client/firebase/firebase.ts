import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "blonify.firebaseapp.com",
  projectId: "blonify",
  storageBucket: "blonify.firebasestorage.app",
  messagingSenderId: "1069503342942",
  appId: "1:1069503342942:web:12543e62c2637e578f47cf"
};


export const app = initializeApp(firebaseConfig);