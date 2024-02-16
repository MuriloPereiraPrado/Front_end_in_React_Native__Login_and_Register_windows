import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBMZ1rK6oS6-TaKaqaU5z_bMwqklUlFvT0",
    authDomain: "projeto1-a2c66.firebaseapp.com",
    projectId: "projeto1-a2c66",
    storageBucket: "projeto1-a2c66.appspot.com",
    messagingSenderId: "548475765790",
    appId: "1:548475765790:web:eede24ebc38652aa975a0f",
    measurementId: "G-YMCNJ0XK5X"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
