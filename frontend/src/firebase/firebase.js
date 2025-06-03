import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApq4WRwCDZe7tzlJfuzgqb_q0fkqkR9IA",
  authDomain: "hemoweb-6b1f3.firebaseapp.com",
  projectId: "hemoweb-6b1f3",
  appId: "1:700474240644:web:76bf4ff84bcf6f1669dcd1"
};

//Secret

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };