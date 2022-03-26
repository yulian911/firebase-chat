import { initializeApp } from "firebase/app";
import {  initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTH,
  databaseURL: process.env.REACT_APP_API_DATABASE,
  projectId: process.env.REACT_APP_API_ID,
  storageBucket: process.env.REACT_APP_API_STORAGE,
  messagingSenderId: process.env.REACT_APP_API_MESSAG,
  appId: process.env.REACT_APP_API_APPID
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);

//init services
const db = initializeFirestore(app, {
  useFetchStreams:false,
});

const auth = getAuth(app);
//timestamp firebase

const storage = getStorage(app);

export { db, auth, storage };
