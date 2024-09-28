

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBi_gMO1scmOVcm2nnKHNzJ2etL0a469-c",
  authDomain: "linktree-a4098.firebaseapp.com",
  projectId: "linktree-a4098",
  storageBucket: "linktree-a4098.appspot.com",
  messagingSenderId: "1075798921409",
  appId: "1:1075798921409:web:d402b7718f1a5827374440"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db= getFirestore(app)

export {auth, db}