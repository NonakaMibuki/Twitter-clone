//firebaseの初期化
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkTG5aLYBHPzrow3AKEUNpjobGiRuN8b4",
    authDomain: "twitter-clone-106de.firebaseapp.com",
    projectId: "twitter-clone-106de",
    storageBucket: "twitter-clone-106de.appspot.com",
    messagingSenderId: "357057144743",
    appId: "1:357057144743:web:e08a4d7f02782f4627f882"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);

  export { db, auth, provider };