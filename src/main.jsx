import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from "./components/contexts/ItemsContext.jsx";
import { initializeApp } from "firebase/app";


/* const firebaseConfig = {

    apiKey: "AIzaSyCR4_EfDfYQvT8MozIrxakleMs7XyMfwJA",  
    authDomain: "af-systems-coderhouse.firebaseapp.com",  
    projectId: "af-systems-coderhouse",  
    storageBucket: "af-systems-coderhouse.firebasestorage.app",  
    messagingSenderId: "995911653316",  
    appId: "1:995911653316:web:4664d8037b6ec13741f691"  
  };
  
  
  // Initialize Firebase  
initializeApp(firebaseConfig); */

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
        <App />
    </Provider>
);
