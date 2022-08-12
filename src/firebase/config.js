
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpYID0LbrgOqI6BhC-FALoLL68uM1Vpx0",
    authDomain: "act16-4ec7c.firebaseapp.com",
    projectId: "act16-4ec7c",
    storageBucket: "act16-4ec7c.appspot.com",
    messagingSenderId: "221371058652",
    appId: "1:221371058652:web:6ed575ee924f1f3273a719",
    measurementId: "G-L3V7LHK1Y0"
  };
  
  

const db = initializeApp(firebaseConfig);

export default getDatabase(db);