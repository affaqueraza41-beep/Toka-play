// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Gi1-uW3Xl8WiEGZ2l_kadlIQo-_nyt4",
  authDomain: "toka-play-659b9.firebaseapp.com",
  projectId: "toka-play-659b9",
  storageBucket: "toka-play-659b9.firebasestorage.app",
  messagingSenderId: "442852904451",
  appId: "1:442852904451:web:92fa466014fbf45e49c836",
  measurementId: "G-V3172KXCTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export these for use in your app.js
export const auth = getAuth(app);
export const db = getFirestore(app);