// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBXr_SgLgiFedh9FXT1NSX93Z0Uo2morQ",
    authDomain: "journal-app-803f5.firebaseapp.com",
    projectId: "journal-app-803f5",
    storageBucket: "journal-app-803f5.appspot.com",
    messagingSenderId: "911444516290",
    appId: "1:911444516290:web:06872f0e7c24f5d5168a5b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
