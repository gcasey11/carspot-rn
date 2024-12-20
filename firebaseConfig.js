// Config details for Firebase-related functionality (as provided by Google Firebase)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that we want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Mobile / Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCkHMqVjzRQbi0-Z9dzfIoXjCLSLWJtLCc",
    authDomain: "carspotter-rn.firebaseapp.com",
    projectId: "carspotter-rn",
    storageBucket: "carspotter-rn.firebasestorage.app",
    messagingSenderId: "456521707256",
    appId: "1:456521707256:web:f14f6b5d2d4b0851a2d50d",
    measurementId: "G-J055BXY4M4"
};
// Use this globally available config to initialize stuff like Authentication agent


// Initialize Firebase
// TODO: Need to declare this in a 'central' function
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);