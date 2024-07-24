import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwTWAKaVkl87IsUBrusoklMXZXLvil0rs",
  authDomain: "echosparksolutions-ce4a1.firebaseapp.com",
  projectId: "echosparksolutions-ce4a1",
  storageBucket: "echosparksolutions-ce4a1.appspot.com",
  messagingSenderId: "294641513568",
  appId: "1:294641513568:web:9c5f07808a91f3eee0ff05"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
