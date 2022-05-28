import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/nav';
import { Routes, Route, } from "react-router-dom";
import PrvaStran from './components/prvastran';
import { Napaka } from './components/error';
import MojaPiva from './components/mojaPiva';
import About from './components/about';
import Iskanje from './components/iskanje';
import IskanjeBarcode from './components/iskanjeBarcode';
import Modal from './components/modal';
import BeerMap from './components/map';
import React, { useState } from "react";
import AgeAuthPopUp from './components/GoogleAuth/ageAuth';
import { getAuth } from 'firebase/auth';

let popUpState2 = true
let potrdilo = localStorage.getItem("ageAuth")
localStorage.setItem("ageAuth", potrdilo)



function App() {

  let potrdilo = localStorage.getItem("ageAuth")
  if (potrdilo === null) {
    potrdilo = true
  }
  
  const [ageAuth, setAgeAuth] = useState(potrdilo)

  const popUpState = (data) => {
    localStorage.setItem("ageAuth", data)
  }


  const defaultImg = "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
  const defIme = "Prijavite se: ";
  const defButton = true;
  
  const getData = (data) => {
    console.log("Index data");
    console.log(data);
  };




  return (
    <>
      
      <NavB image={defaultImg} ime={defIme} button={defButton} dataPull={getData} />
      <Routes>
        <Route path='/' element={<PrvaStran />}></Route>
        <Route path='/iskanje' element={<Iskanje />}></Route>
        <Route path='/mojepive' element={<MojaPiva />}></Route>
        <Route path='/onas' element={<About />}></Route>
        <Route path='/map' element={<BeerMap />}></Route>
        <Route path='/barcode' element={<IskanjeBarcode />}></Route>
        <Route path='*' element={<Napaka />}></Route>
      </Routes>

      {ageAuth &&
        <AgeAuthPopUp closeWindow={setAgeAuth} popUpState2={popUpState}/>}
    </>
  )
}

export default App;
