import { initializeApp } from "firebase/app";

import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import { Container, Button, Modal, Row, Col } from 'react-bootstrap';

import $ from 'jquery';

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
//import { LoginZaProps } from "./logInOut";
//import { propTypes } from "react-barcode";




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

//let login = Boolean(false);





export function LogIn2({ imageDef, imeDef, buttonDef, func }) {

    /*
    const [user, setUser] = useState(() => {
        console.log("Login Active");
        return null;
    });
    */


    /*
     const [user, setUser] = useState(() => {
         setUser( user.ime = defIme, user.img = defaultImg, user.button = true );    
     });
 */
    const [user, setUser] = useState({ ime: imeDef, img: imageDef, button: buttonDef });
    const ime = user.ime;
    const imgUrl = user.img;
    const id = user.id;
    //const button = user.button



    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((results) => {
            const ime = results.user.displayName;
            const email = results.user.email;
            const img = results.user.photoURL;
            localStorage.setItem("email", email)

            let razdelitev = ime.split(" ");

            let uporabnikJSON = { "ime": razdelitev[0], "priimek": razdelitev[1], "email": email };

            shraniUporabnika(uporabnikJSON).then(response => {

                console.log(JSON.parse(sessionStorage.getItem("prijavljenUporabnik")));

                func(ime)
                console.log(results.user);
                console.log(results.user.refreshToken);
                setUser(prevUser => {
                    return ({ ime: prevUser.ime = ime, img: prevUser.img = img, button: prevUser.button = false });
                });
            });
        }).catch((err) => {
            console.log(err);
        });
    };

    const shraniUporabnika = (podatki) => {
        return $.ajax({
            url: "http://localhost:5001/shraniUporabnika",
            type: 'POST',
            dataType: 'json',
            data: JSON.parse(JSON.stringify(podatki)),
            crossDomain: true,
            context: document.body,
            success: function (data, status) {
                console.log("Ajax poizvedba deluje!");
                sessionStorage.setItem("prijavljenUporabnik", JSON.stringify(data));
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })
    }

    const signOutWithGoogle = () => {
        signOut(auth).then(() => {
            localStorage.setItem("email", null)
            setUser(prevUser => {
                return ({
                    ime: prevUser.ime = imeDef, img: prevUser.img = imageDef, button: prevUser.button = true
                })
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

    const [modalShow, setModalShow] = React.useState({ showModal: false });




    const cliclkHandler = () => {
        signOutWithGoogle();
        setModalShow(prevModalShow => { return ({ showModal: true }) });
    };

    return (
        <>
            <Container fluid>
                <Row xs="auto" className="align-items-center">
                    <Col>
                        <Image src={imgUrl} rounded width={"30px"} height={"30px"} fluid></Image>
                    </Col>
                    <Col>
                        {ime}
                    </Col>
                    <Col>
                        {user.button ? <Button height={"10%"} onClick={signInWithGoogle} size="sm">LogIn</Button> :
                            <Button onClick={cliclkHandler} size="sm" variant="dark">LogOut</Button>}
                    </Col>
                </Row>
                <MyVerticallyCenteredModal show={modalShow.showModal} onHide={() => setModalShow(prevModalShow => { return ({ showModal: false }) })} />
            </Container>
        </>
    );
};

function MyVerticallyCenteredModal(props) {


    return (
        <Modal
            {...props
            }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Odjavljeni ste!
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

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