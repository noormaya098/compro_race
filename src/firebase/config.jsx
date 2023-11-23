import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmtsnNTQZzAl0RXh6SubNbToImkthwF9M",
    authDomain: "raja-cepat.firebaseapp.com",
    databaseURL: "https://raja-cepat-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "raja-cepat",
    storageBucket: "raja-cepat.appspot.com",
    messagingSenderId: "246440045274",
    appId: "1:246440045274:web:4b1e3e7cb23b32222993e3",
    measurementId: "G-8T1FDDM55G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbdatabase = getFirestore(app);
const analytics = getAnalytics(app);

export {
    app,
    dbdatabase
}