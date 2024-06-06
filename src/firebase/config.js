// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getEnvironments } from '../helpers';
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
const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID
} = getEnvironments();

//*TESTING*******
const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
