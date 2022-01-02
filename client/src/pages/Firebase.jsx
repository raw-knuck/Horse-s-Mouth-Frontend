// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAso6XAOn7OqZ9l_KM9_HVyC_mkDx1LNzQ",
  authDomain: "horsemouth-46fe1.firebaseapp.com",
  projectId: "horsemouth-46fe1",
  storageBucket: "horsemouth-46fe1.appspot.com",
  messagingSenderId: "712250701084",
  appId: "1:712250701084:web:07cae6decc0808867f36d9",
  measurementId: "G-8DC53JEB02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);