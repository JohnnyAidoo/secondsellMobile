// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoce2JTeMBSQdTx1g4f1wq2bPhzOQEXQc",
  authDomain: "secondsell-86eb9.firebaseapp.com",
  projectId: "secondsell-86eb9",
  storageBucket: "secondsell-86eb9.appspot.com",
  messagingSenderId: "904061889410",
  appId: "1:904061889410:web:c6398f6720e1c291023d9b",
  measurementId: "G-QZX74R5ZN4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
