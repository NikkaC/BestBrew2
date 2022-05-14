import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import NavB from './components/nav';
import PrvaStran from './components/prvastran';


function App() {
  return (
    <div className="App">
<NavB></NavB>
<PrvaStran></PrvaStran>
    </div>
    )
}

export default App;
