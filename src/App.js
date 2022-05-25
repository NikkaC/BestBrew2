import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/nav';
import { Routes, Route, } from "react-router-dom";
import PrvaStran from './components/prvastran';
import { Napaka } from './components/error';
import MojaPiva from './components/mojaPiva';
import About from './components/about';
import Iskanje from './components/iskanje';
import BeerMap from './components/map';
import React, { useState } from "react";
import JebisiMater from './components/GoogleAuth/ageAuth';
import { getAuth } from 'firebase/auth';

let popUpState2 = true




function App() {
  const [ageAuth, setAgeAuth] = useState(popUpState2)

  return (
    <>
      <NavB />
      <Routes>
        <Route path='/' element={<PrvaStran />}></Route>
        <Route path='/iskanje' element={<Iskanje />}></Route>
        <Route path='/mojepive' element={<MojaPiva />}></Route>
        <Route path='/onas' element={<About />}></Route>
        <Route path='/map' element={<BeerMap />}></Route>

        <Route path='*' element={<Napaka />}></Route>
      </Routes>
      
      {/*ageAuth &&
        <JebisiMater closeWindow={setAgeAuth} />*/}
    </>
  )
}

export default App;
