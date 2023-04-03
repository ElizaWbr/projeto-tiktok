import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdPAEN06vClvkR0Yeyb01W1ocozvtyMFU",
    authDomain: "tiktok---jornadadev-95aa8.firebaseapp.com",
    projectId: "tiktok---jornadadev-95aa8",
    storageBucket: "tiktok---jornadadev-95aa8.appspot.com",
    messagingSenderId: "499183158392",
    appId: "1:499183158392:web:4a70ae28ca71d0f3d1998d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;