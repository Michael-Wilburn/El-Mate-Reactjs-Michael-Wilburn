import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAapyv6humuOHDZ2I1AtchG1_MjnQiTILM",
  authDomain: "elmate31865.firebaseapp.com",
  projectId: "elmate31865",
  storageBucket: "elmate31865.appspot.com",
  messagingSenderId: "841713659504",
  appId: "1:841713659504:web:aa6f375a358175f95c4eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);