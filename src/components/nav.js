import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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

          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default NavB;