import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "portfolio-78325.firebaseapp.com",
  projectId: "portfolio-78325",
  storageBucket: "portfolio-78325.appspot.com",
  messagingSenderId: "507490278164",
  appId: "1:507490278164:web:312df016e8ea2632fd4001",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export { signInWithPopup, GoogleAuthProvider };
