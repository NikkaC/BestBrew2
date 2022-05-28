import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from "react";

import { LogIn2 } from "./GoogleAuth/firebase";
import { LogIn, LoginZaProps, LogOut } from './GoogleAuth/logInOut';
import { ProfilePic } from './GoogleAuth/userData';
import { Button } from 'react-bootstrap';

function NavB({ image, ime, button, dataPull }) {

  const pull_data = (data) => {
    console.log(data);
  };


  return (
    <Navbar bg="light">
      <Container>
      
        <Nav >
          <Link to="/">
            Svet Piv
<<<<<<< HEAD
          </Navbar.Brand>
          <Nav.Link href="/iskanje">Iskanje piv</Nav.Link>
          <Nav.Link href="/mojepive">Moja piva</Nav.Link>
          <Nav.Link href="/onas">O nas</Nav.Link>
          <Nav.Link href="/map">Zemljevid</Nav.Link>
          <Nav.Link href="/barcode">Barcode</Nav.Link>
=======
          </Link>
          <Link to="/iskanje">Iskanje piv</Link>
          <Link to="/mojepive">Moja piva</Link>
          <Link to="/onas">O nas</Link>
          <Link to="/map">Zemljevid</Link>
>>>>>>> 935b08f04eee6e08816c03dbb7bb7d73ffce125d

        </Nav>

        <Nav>

          <LogIn2 imageDef={image} imeDef={ime} buttonDef={button} func={pull_data} />
        </Nav>
      </Container>
    </Navbar>

  )
}

export default NavB;


/*
  

<LoginZaProps />


{localStorage.getItem("login")
            ? <LogOut />
            : <LogIn />}
 */