import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import React from "react";

import { LogIn2 } from "./GoogleAuth/firebase";

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

          </Link>
          <Link to="/iskanje">Iskanje piv</Link>
          <Link to="/mojepive">Moja piva</Link>
          <Link to="/onas">O nas</Link>
          <Link to="/map">Zemljevid</Link>
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