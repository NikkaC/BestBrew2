import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar bg="light">
    <Container>
      <Nav className="me-auto">
      <Navbar.Brand href="#prva">
          Prva Stran
      </Navbar.Brand>

        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
    </div>
    )
}

export default App;
