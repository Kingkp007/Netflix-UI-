import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdoEQJy1uwoPxHMp2MOw9uO2_TXpRbCP4",
  authDomain: "react-netflix-clone-51081.firebaseapp.com",
  projectId: "react-netflix-clone-51081",
  storageBucket: "react-netflix-clone-51081.appspot.com",
  messagingSenderId: "332964370109",
  appId: "1:332964370109:web:79410b8013ca72b46a09d4",
  measurementId: "G-111JY2VMM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);