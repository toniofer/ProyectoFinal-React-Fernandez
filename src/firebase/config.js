import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyCR4_EfDfYQvT8MozIrxakleMs7XyMfwJA",  
    authDomain: "af-systems-coderhouse.firebaseapp.com",  
    projectId: "af-systems-coderhouse",  
    storageBucket: "af-systems-coderhouse.firebasestorage.app",  
    messagingSenderId: "995911653316",  
    appId: "1:995911653316:web:4664d8037b6ec13741f691"  
  };
  
  
  // Initialize Firebase  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
//export const provider = new GoogleAuthProvider();
