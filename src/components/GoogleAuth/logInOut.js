import { Button } from "bootstrap";
import Image from 'react-bootstrap/Image'
import React from "react";
import { signInWithGoogle, signOutWithGoogle } from "./firebase";

export function LogIn() {
    return (
        <>
            <button onClick={signInWithGoogle}>Login</button>
        </>
    );
};

export function LogOut() {
    return (
        <>
            <Image src={localStorage.getItem("img")}></Image>
            <></>
            <button onClick={signOutWithGoogle}>LogOut</button>
        </>
    );
};