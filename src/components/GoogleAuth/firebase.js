import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTjkJQKReQE_tA5kPhkzUwOAir02LfsjQ",
  authDomain: "praktikumiibestbrew.firebaseapp.com",
  projectId: "praktikumiibestbrew",
  storageBucket: "praktikumiibestbrew.appspot.com",
  messagingSenderId: "436622968036",
  appId: "1:436622968036:web:387b7e3e3e4908cbf3d8f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle2 = () => signInWithPopup(auth, provider);

let login = Boolean(false);

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((results) => {
        console.log("Prvi podatki firebase.js: " + results);
        const ime = results.user.displayName;
        const email = results.user.email;
        const img = results.user.photoURL;
        login = Boolean(true);

        localStorage.setItem("ime", ime);
        localStorage.setItem("email", email);
        localStorage.setItem("img", img);
        localStorage.setItem("login", login);
    }).catch((err) => {
        console.log(err);
    });
};

export const signOutWithGoogle = () => {
    signOut(auth).then(() => {
        alert("Odjava Uspešna!")
        login = Boolean(false);
        localStorage.clear();
    }).catch((err) => {
        console.log(err);
    });
};
