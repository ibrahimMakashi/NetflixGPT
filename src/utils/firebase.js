// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmMIwwnZRBAba5gMSDpGh9IanBVdEVJN0",
  authDomain: "netflixgpt2-985d1.firebaseapp.com",
  projectId: "netflixgpt2-985d1",
  storageBucket: "netflixgpt2-985d1.firebasestorage.app",
  messagingSenderId: "660425862317",
  appId: "1:660425862317:web:c1b400250788028a532a24",
  measurementId: "G-1D93KT6L29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();