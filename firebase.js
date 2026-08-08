import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAubS5tvkyZlDi1AgCnAiDf_cQo425Qzcc",
  authDomain: "my-startup-7063b.firebaseapp.com",
  projectId: "my-startup-7063b",
  storageBucket: "my-startup-7063b.firebasestorage.app",
  messagingSenderId: "26616497192",
  appId: "1:26616497192:web:4f7f468699c6bb53d4611d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
