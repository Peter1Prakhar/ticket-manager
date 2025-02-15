// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbGjPFjS0zHPNuji0sZWMdXVMFdRqWIVk",
    authDomain: "ticket-management-app-7d08d.firebaseapp.com",
    databaseURL: "https://ticket-management-app-7d08d-default-rtdb.firebaseio.com",
    projectId: "ticket-management-app-7d08d",
    storageBucket: "ticket-management-app-7d08d.firebasestorage.app",
    messagingSenderId: "660106459906",
    appId: "1:660106459906:web:4fc5285afe70b86df2e01b",
    measurementId: "G-BGMRE5WWRZ"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);