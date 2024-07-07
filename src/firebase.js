import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDEDihwB1A7CBCBsyW44u2bc6n18vEJ0p4",
    authDomain: "vinyl-verse.firebaseapp.com",
    projectId: "vinyl-verse",
    storageBucket: "vinyl-verse.appspot.com",
    messagingSenderId: "1050628710417",
    appId: "1:1050628710417:web:742ae5ce8bf076fd6511b0"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);