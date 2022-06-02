import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/nav';
import React, { useState } from "react";
import AgeAuthPopUp from './components/GoogleAuth/ageAuth';
import AnimacijaStrani from './components/animation';
import Polnoletnost from './components/GoogleAuth/ageAuth';
import Footer from './components/footer'







function App() {

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
      <AnimacijaStrani />
      <Polnoletnost />
      <Footer />

    </>
  )
}

export default App;
