import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import "./GoogleAuth/ageAuthPopUp.css";
import pivo from './Slike/BESTBREW.png';
import navlogo from './Slike/navlogo.png';

import React from "react";

import { LogIn2 } from "./GoogleAuth/firebase";


function NavB({ image, ime, button, dataPull }) {

  const [prikaz, setPrikaz] = React.useState(false);

  const pull_data = (data) => {
    console.log(data);
    setPrikaz(true);
  };

  // opcija 1: style={{ visibility: "hidden" }}
  
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand><Link to="/" className='navText'><Image src={navlogo} roundedCircle width="26"/><b>BestBrew</b></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/iskanje" className='navText'>Iskanje piv</Link>  </Nav.Link>
            { prikaz && <Nav.Link><Link to="/mojepive" className='navText'>Moja piva</Link>    </Nav.Link> }
            <Nav.Link><Link to="/map" className='navText'>Zemljevid</Link>    </Nav.Link>
            <Nav.Link><Link to="/onas" className='navText'>O nas</Link>    </Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <Nav>
          <LogIn2 imageDef={image} imeDef={ime} buttonDef={button} func={pull_data} nastaviPrikaz={setPrikaz}/>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default NavB;


/*
  

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





<LoginZaProps />


{localStorage.getItem("login")
            ? <LogOut />
            : <LogIn />}
 */