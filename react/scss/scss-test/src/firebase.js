
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJf7UNUVgF6uL7cMpcnIpfKBYPRPf2NKE",
  authDomain: "chat-9a020.firebaseapp.com",
  projectId: "chat-9a020",
  storageBucket: "chat-9a020.appspot.com",
  messagingSenderId: "1078770993164",
  appId: "1:1078770993164:web:db650344c32beff0450629",
  measurementId: "G-ET8WHGJQXS"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);