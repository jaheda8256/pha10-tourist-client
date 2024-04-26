// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJBhzJxvYznNUK8wjno50ZixcQk-yzd6A",
  authDomain: "tourist-website-e895b.firebaseapp.com",
  projectId: "tourist-website-e895b",
  storageBucket: "tourist-website-e895b.appspot.com",
  messagingSenderId: "15039487436",
  appId: "1:15039487436:web:bfab556f770ebea2915169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;