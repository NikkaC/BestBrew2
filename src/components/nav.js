
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

function NavB() {
  return (
   
   <Navbar bg="light">
    <Container>
      <Nav className="me-auto">
      <Navbar.Brand href="#prva">
          Prva Stran
      </Navbar.Brand>
        <Nav.Link href="/onas">O nas</Nav.Link>
        <Nav.Link href="/iskanje">Iskanje piv</Nav.Link>
        <Nav.Link href="/mojepive">Moje pive</Nav.Link>
        <GoogleLogin>
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        </GoogleLogin>
        </Nav>
    </Container>
    </Navbar>

  )
}

export default NavB;