import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Tu nueva configuración para el proyecto "data-f3d9b"
const firebaseConfig = {
  apiKey: "AIzaSyA-5GGGLgnk__jqdsvTWi8FTer9KEPwvA0",
  authDomain: "data-f3d9b.firebaseapp.com",
  projectId: "data-f3d9b",
  storageBucket: "data-f3d9b.firebasestorage.app",
  messagingSenderId: "884583562610",
  appId: "1:884583562610:web:3cca925644f429b6be71eb"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar y exportar Auth para usarlo en App.js
export const auth = getAuth(app);