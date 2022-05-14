
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
   

function NavB() {
  return (
   
   <Navbar bg="light">
    <Container>
      <Nav className="me-auto">
      <Navbar.Brand href="#prva">
          Prva Stran
      </Navbar.Brand>

        <Nav.Link href="#onas">O nas</Nav.Link>
        <Nav.Link href="#iskanje">Iskanje piv</Nav.Link>
        <Nav.Link href="#mojepive">Moje pive</Nav.Link>
        </Nav>
    </Container>
    </Navbar>

  )
}

export default NavB;