// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlOr-MgAZLXuoHxY82yUg9xSYuIsJ-7g8",
  authDomain: "nuevavue.firebaseapp.com",
  projectId: "nuevavue",
  storageBucket: "nuevavue.appspot.com",
  messagingSenderId: "652905924435",
  appId: "1:652905924435:web:1b39380d673e6ab19683a6"
};

// Initialize Firebase
// const app 
initializeApp(firebaseConfig);
const auth = getAuth()
export {
  auth
}