import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/nav';
import {Routes, Route,} from "react-router-dom";
import PrvaStran from './components/prvastran';
import { Napaka } from './components/error';
import MojaPiva from './components/mojaPiva';
import About from './components/about';
import Iskanje from './components/iskanje';
import IskanjeBarcode from './components/iskanjeBarcode';
import Modal from './components/modal';
import BeerMap from './components/map';
import React, { StrictMode } from "react";
import ReactDOM from 'react-dom';

function App() {
  return (
    <>
      <NavB />
    
        
      <Routes>
        <Route path='/' element={<PrvaStran />}></Route>
        <Route path='/iskanje' element={<Iskanje />}></Route>
        <Route path='/mojepive' element={<MojaPiva />}></Route>
        <Route path='/onas' element={<About />}></Route>
        <Route path='/map' element={<BeerMap />}></Route>
        <Route path='/barcode' element={<IskanjeBarcode />}></Route>
        <Route path='*' element={<Napaka />}></Route>
      </Routes>

    </>
    )
}


export default App;
