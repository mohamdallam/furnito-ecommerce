import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXKiBxVAYy0Zgt89LFjothAWLnyzJCn-A",
  authDomain: "react-iti-team-4.firebaseapp.com",
  projectId: "react-iti-team-4",
  storageBucket: "react-iti-team-4.appspot.com",
  messagingSenderId: "590556435601",
  appId: "1:590556435601:web:8e6892a5ed64b68d241b30",
};
// Problem With -4-66

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
