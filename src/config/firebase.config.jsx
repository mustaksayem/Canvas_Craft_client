import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const ENV = import.meta.env
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAk9XLQ03mk5nAL-2oVA3NjXM_aKog_a9E",
    authDomain: "assignment-10-a0699.firebaseapp.com",
    projectId: "assignment-10-a0699",
    storageBucket: "assignment-10-a0699.appspot.com",
    messagingSenderId: "499406788586",
    appId: "1:499406788586:web:bc10ae8e7ad4af521dc493"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;