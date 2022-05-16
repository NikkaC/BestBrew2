import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/nav';
import {Routes, Route,} from "react-router-dom";
import PrvaStran from './components/prvastran';
import { Napaka } from './components/error';
import MojaPiva from './components/mojaPiva';
import Onas from './components/oNas';
import Iskanje from './components/iskanje';



function App() {
  return (
    <>
      <NavB />
    

      <Routes>
        <Route path='/' element={<PrvaStran />}></Route>
        <Route path='/iskanje' element={<Iskanje />}></Route>
        <Route path='/mojepive' element={<MojaPiva />}></Route>
        <Route path='/onas' element={<Onas />}></Route>

        <Route path='*' element={<Napaka />}></Route>
      </Routes>

  
    </>
    )
}

export default App;
