import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCuHLhIvF1vaki7l3-q50STMhURNZCCfa4",
  authDomain: "proyecto-prueba-2cb3f.firebaseapp.com",
  projectId: "proyecto-prueba-2cb3f",
  storageBucket: "proyecto-prueba-2cb3f.appspot.com",
  messagingSenderId: "486555682909",
  appId: "1:486555682909:web:bc2862ec639c2163f065b4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);