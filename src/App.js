import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/nav';
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import PrvaStran from './components/prvastran';

import { createRoot } from "react-dom/client";

function App() {
  return (
    
 

      <Routes>
        <Route path='/prva' element={<PrvaStran />}></Route>
        <Route path='/' element={<PrvaStran></PrvaStran>}></Route>
      </Routes>

  
    )
}

export default App;
