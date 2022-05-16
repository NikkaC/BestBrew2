import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { signInWithGoogle, signOutWithGoogle } from "./GoogleAuth/firebase";
import { LogIn, LogOut } from './GoogleAuth/logInOut';
import { ProfilePic } from './GoogleAuth/userData';

function NavB() {
  return (

    <Navbar bg="light">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="/">
            Svet Piv
          </Navbar.Brand>
          <Nav.Link href="/iskanje">Iskanje piv</Nav.Link>
          <Nav.Link href="/mojepive">Moje pive</Nav.Link>
          <Nav.Link href="/onas">O nas</Nav.Link>

        </Nav>
        <Nav>

          {localStorage.getItem("login")
            ? <LogOut />
            : <LogIn />}
        </Nav>
      </Container>
    </Navbar>

  )
}

export default NavB;