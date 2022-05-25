import { initializeApp } from "firebase/app";

import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import { Card, Container, Button } from 'react-bootstrap';

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { LoginZaProps } from "./logInOut";

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
const defaultImg = "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
const defIme = "Prijavite se: ";




export function LogIn2() {

    /*
    const [user, setUser] = useState(() => {
        console.log("Login Active");
        return null;
    });
    */

    const [user, setUser] = useState({ ime: defIme, img: defaultImg, button: true });
    const ime = user.ime;
    const imgUrl = user.img;
    const button = user.button



    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((results) => {
            const ime = results.user.displayName;
            const email = results.user.email;
            const img = results.user.photoURL;
            localStorage.setItem("email", email)
            setUser(prevUser => {
                return ({ ime: prevUser.ime = ime, img: prevUser.img = img, button: prevUser.button = false });
            });


        }).catch((err) => {
            console.log(err);
        });
    };

    const signOutWithGoogle = () => {
        signOut(auth).then(() => {
            alert("Odjava Uspešna!")
            localStorage.setItem("email", null)
            setUser(prevUser => {
                return ({ ime: prevUser.ime = null, img: prevUser.img = defaultImg, button: prevUser.button = true })
            });



        }).catch((err) => {
            console.log(err);
        });
        return (
            <>
                <p>Hello</p>
            </>
        );
    };


    return (
        <div>
            <Container className="me-auto">

                <Image src={imgUrl} rounded width={"30px"} height={"30px"} fluid></Image>

                <span>{ime}</span>

                {user.button ? <Button height={"10%"} onClick={signInWithGoogle}>LogIn</Button> :
                    <Button onClick={signOutWithGoogle}>LogOut</Button>}

            </Container>
        </div>
    );
};

/*
export  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((results) => {
        const ime = results.user.displayName;
        const email = results.user.email;
        const img = results.user.photoURL;
        return(
            <LoginZaProps ime={ime} img={img} />
        );


    }).catch((err) => {
        console.log(err);
    });
};

export  const signOutWithGoogle = () => {
    signOut(auth).then(() => {
        alert("Odjava Uspešna!")
        



    }).catch((err) => {
        console.log(err);
    });
    return (
        <>
            <p>Hello</p>
        </>
    );
};

export function Prijava() {

    return (
        <>

        </>
    );
};
*/

/*    const signInWithGoogle = () => {
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

    const signOutWithGoogle = () => {
        signOut(auth).then(() => {
            alert("Odjava Uspešna!")
            login = Boolean(false);
            localStorage.clear();
        }).catch((err) => {
            console.log(err);
        });
    };*/