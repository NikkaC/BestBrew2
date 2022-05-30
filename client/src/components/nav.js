import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

import React from "react";

import { LogIn2 } from "./GoogleAuth/firebase";


function NavB({ image, ime, button, dataPull }) {

  const pull_data = (data) => {
    console.log(data);
  };


  return (
    <Navbar bg="light">
      <Container>
      <ul>
        <Nav >
          <li><Link to="/">Začetna stran</Link></li>
          <li> <Link to="/iskanje">Iskanje piv</Link></li>
          <li><Link to="/mojepive">Moja piva</Link></li>
          <li> <Link to="/onas">O nas</Link></li>
          <li> <Link to="/map">Zemljevid</Link></li>
        </Nav>
        </ul>
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