import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import NavB from './components/nav';
import { Route, Router, Routes } from 'react-router-dom';

import PrvaStran from './components/prvastran';

function App() {
  return (
    <div className="App">
        <NavB></NavB>
        
          
        <Routes>  
          <Route path='/' element={<PrvaStran></PrvaStran>}></Route>  
        </Routes>
        
        
    </div>
    )
}

export default App;
