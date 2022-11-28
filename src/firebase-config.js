import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCCsp9YaIK5GGtkzBiX4oJ_RRkL0DA-PLc",
    authDomain: "email-authorization-304a2.firebaseapp.com",
    projectId: "email-authorization-304a2",
    storageBucket: "email-authorization-304a2.appspot.com",
    messagingSenderId: "101821304127",
    appId: "1:101821304127:web:aaf962224b6460a0c8178a"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);