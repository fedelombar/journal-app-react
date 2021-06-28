import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcdlStbYRgSkDlEWcTzShZscNsMQSQTOU",
  authDomain: "react-app-curso-522e9.firebaseapp.com",
  projectId: "react-app-curso-522e9",
  storageBucket: "react-app-curso-522e9.appspot.com",
  messagingSenderId: "833451142124",
  appId: "1:833451142124:web:df885e0cdb5aaaedb3eec9",
  measurementId: "G-ZTFCC74K7D",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
