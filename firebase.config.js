import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHF0sr9NOaU8Q04SCAbYv4o8efWhf1pN0",
  authDomain: "hoardingspace-ecfb3.firebaseapp.com",
  projectId: "hoardingspace-ecfb3",
  storageBucket: "hoardingspace-ecfb3.appspot.com",
  messagingSenderId: "65356186112",
  appId: "1:65356186112:web:5367088786662cbf904ee5",
  measurementId: "G-N39SE0C4HE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app)