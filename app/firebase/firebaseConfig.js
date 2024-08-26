// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBWp-N3_Y9SaU-gWIldcoOIMTe9hUR4Jk",
  authDomain: "labinvest-c39b6.firebaseapp.com",
  projectId: "labinvest-c39b6",
  storageBucket: "labinvest-c39b6.appspot.com",
  messagingSenderId: "253224717519",
  appId: "1:253224717519:web:b6640d268afde842db3bba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
