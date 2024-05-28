// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//! PRODUCTION  !!!
// const firebaseConfig = {
//     apiKey: "AIzaSyDBXr_SgLgiFedh9FXT1NSX93Z0Uo2morQ",
//     authDomain: "journal-app-803f5.firebaseapp.com",
//     projectId: "journal-app-803f5",
//     storageBucket: "journal-app-803f5.appspot.com",
//     messagingSenderId: "911444516290",
//     appId: "1:911444516290:web:06872f0e7c24f5d5168a5b"
// };

//*TESTING*******
const firebaseConfig = {
    apiKey: "AIzaSyCqTS3jSvR3GM3QHs3Skqr7G97C-BNW9xE",
    authDomain: "react-journal-testing-69598.firebaseapp.com",
    projectId: "react-journal-testing-69598",
    storageBucket: "react-journal-testing-69598.appspot.com",
    messagingSenderId: "702708740122",
    appId: "1:702708740122:web:a9cec56827e6852da421a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
