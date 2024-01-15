// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoNrk_Gfnkws4DsrE1CIfnTk7Tme9LkBc",
  authDomain: "jp-weekend.firebaseapp.com",
  projectId: "jp-weekend",
  storageBucket: "jp-weekend.appspot.com",
  messagingSenderId: "859402999539",
  appId: "1:859402999539:web:5c9c1b4b32ad0769054986",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth();

export { db, auth };
