import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBE00PbMMrbdQXL58yDhZGp48g5cjJ9rdI",
  authDomain: "testingapp-b2f4c.firebaseapp.com",
  projectId: "testingapp-b2f4c",
  storageBucket: "testingapp-b2f4c.appspot.com",
  messagingSenderId: "524752216072",
  appId: "1:524752216072:web:ceca06b1a86f0ddcbbb1bd"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export  {auth};