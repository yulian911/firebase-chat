import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDj6YTByyyEGXrhho7jvepCUu3gqAhxHA4",
  authDomain: "firabesa-chat.firebaseapp.com",
  projectId: "firabesa-chat",
  storageBucket: "firabesa-chat.appspot.com",
  messagingSenderId: "803905242964",
  appId: "1:803905242964:web:3fe4ea42b0ac82343d6ac1"
};

// Initialize Firebase
initializeApp(firebaseConfig)

  //init services
const db =getFirestore()

const auth =getAuth()
  //timestamp firebase
  // const timestamp = serverTimestamp()

  export {db,auth}