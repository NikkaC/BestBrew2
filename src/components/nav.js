import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from "react";

import { LogIn2 } from "./GoogleAuth/firebase";
import { LogIn, LoginZaProps, LogOut } from './GoogleAuth/logInOut';
import { ProfilePic } from './GoogleAuth/userData';

function NavB() {
  return (

    <Navbar bg="light">
      <Container>
        <Nav >
          <Navbar.Brand href="/">
            Svet Piv
          </Navbar.Brand>
          <Nav.Link href="/iskanje">Iskanje piv</Nav.Link>
          <Nav.Link href="/mojepive">Moje pive</Nav.Link>
          <Nav.Link href="/onas">O nas</Nav.Link>
          <Nav.Link href="/map">Zemljevid</Nav.Link>

        </Nav>
        <Nav>

        <LogIn2 />
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