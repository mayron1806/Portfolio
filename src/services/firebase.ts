import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgiwaGAM9y_p9fEX4tAPSNHzqD3GoljPU",
  authDomain: "mayron-portfolio.firebaseapp.com",
  projectId: "mayron-portfolio",
  storageBucket: "mayron-portfolio.appspot.com",
  messagingSenderId: "841187067254",
  appId: "1:841187067254:web:7b74e3e044c950afd3e657"
};
/*
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

*/
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);