import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATE8L2PuwTbQkSj6OBLbNEzBwIjte8qh0",
  authDomain: "slack-ca739.firebaseapp.com",
  projectId: "slack-ca739",
  storageBucket: "slack-ca739.appspot.com",
  messagingSenderId: "461548883831",
  appId: "1:461548883831:web:04183a44860c224ad69b72",
};

// link backend to frontend
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
