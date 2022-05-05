// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // plugin for FireStore database
import { getStorage } from "firebase/storage"; // plugin for the Firebase CloudStorage dynamic hosting
import { getAuth } from "firebase/auth"; // plugin for the Firebase Auth account system

//Properties
const firebaseConfig = {
  apiKey: "AIzaSyDhIGPe29ZATRd887yjmkNNSHj2s9aBolI",
  authDomain: "lms-project-af8f4.firebaseapp.com",
  projectId: "lms-project-af8f4",
  storageBucket: "lms-project-af8f4.appspot.com",
  messagingSenderId: "75510713053",
  appId: "1:75510713053:web:d54912e605c3fbabf4a934",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const cloudStorage = getStorage(firebaseApp);
export const authentification = getAuth(firebaseApp);
