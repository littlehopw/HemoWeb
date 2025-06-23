import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxkQcVCHRrdD2Py_Tz2cVRQeVmXUKFegE",
  authDomain: "hemoweb-97371.firebaseapp.com",
  projectId: "hemoweb-97371",
  storageBucket: "hemoweb-97371.appspot.com",
  messagingSenderId: "775477540280",
  appId: "1:775477540280:web", 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };