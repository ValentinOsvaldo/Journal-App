// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD8uCi1vTINOOPHOrRJb_zN7clpcRS9714',
  authDomain: 'react-curso-af9f9.firebaseapp.com',
  projectId: 'react-curso-af9f9',
  storageBucket: 'react-curso-af9f9.appspot.com',
  messagingSenderId: '868660371266',
  appId: '1:868660371266:web:d7c3b53ec0ab4490b472db',
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);
