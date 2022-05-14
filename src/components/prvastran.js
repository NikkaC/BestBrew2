import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/prvastran.css';
import pivo from './BESTBREW.png';
import Image from 'react-bootstrap/Image'

function PrvaStran() {
  return (
<>
<p class=" text-center, fw-bold, glavnoText">BESTBREW<br></br>
Za vse prave ljublitelje piv.</p>
<Image src={pivo}></Image>
</>



  );
}

export default PrvaStran;
