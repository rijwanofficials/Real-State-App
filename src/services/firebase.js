import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAi8Fxf3IbrT-naiXetvtfcp59SoDyHHus",
    authDomain: "real-state-webapp.firebaseapp.com",
    projectId: "real-state-webapp",
    storageBucket: "real-state-webapp.firebasestorage.app",
    messagingSenderId: "464802498185",
    appId: "1:464802498185:web:4548bec7e5bb415f5b2858",
    measurementId: "G-8B92PB7PHD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
