// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyDU1Xp4RexbcwMQnR65YpbF-M-B8Mq5oXw",
    authDomain: "independent-service-provider-1.firebaseapp.com",
    projectId: "independent-service-provider-1",
    storageBucket: "independent-service-provider-1.appspot.com",
    messagingSenderId: "204358866301",
    appId: "1:204358866301:web:8766b9a1dcd468ff3e6814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;