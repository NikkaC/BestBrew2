import React, { useState, useEffect } from "react";
import { Card, Button, Container, ListGroup, CardGroup, Form } from "react-bootstrap";
import mojaPiva from './mojaPiva'
import '../App.css'
import '../styles/iskanje.css';
import 'mdbreact/dist/css/mdb.css'
import axios from 'axios';
import { motion } from 'framer-motion/dist/framer-motion';
var Barcode = require('react-barcode');


/*
const handleOnSearch = (string, results) => {
   onSearch will have as the first callback parameter
   the string searched and for the second the results.
  console.log(string, results)
}
*/




export default function Iskanje() {




  const [piva, setPiva] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5001/Vsapiva`)
      .then(res => {

        const piva = res.data;
        setPiva(piva);
      })
  }
  );







  return (
    <motion.div className="marginTopRight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}>
      <SearchChange piva={piva} />
    </motion.div>
  )
}

function SearchChange({ piva }) {

  const [search, setSearch] = useState("")
  useEffect(() => {
  },
    [search]);


  const [mojaPiva, setMojaPiva] = useState([]);



  const handleChange = (event) => {
    setSearch(event.target.value.toLocaleLowerCase());
  };

  console.log(mojaPiva);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: window.innerWidth }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container className="marginTopMojaPiva">
        <center>
          <label class="naslov">Išči po imenu piva</label><br />
          <div class="form__group">
            <input class="form__input" type='text' placeholder="Vnesi ime piva" onChange={handleChange} />
            <label for="name" class="form__label">Rezultati iskanja</label>
          </div>
        </center>


        <CardGroup>
          {piva.filter(pivo => pivo.naziv.toLocaleLowerCase().includes(search)).map(pivo => (


            <Card className="flex-fill m-1" style={{ width: '12rem' }} >
              <Card.Body>
                <Card.Title>{pivo.naziv}</Card.Title>
                <Card.Subtitle>{pivo.naziv_pivovarne}</Card.Subtitle>
                <ListGroup variant="flush" >
                  <ListGroup.Item>{pivo.alkohol}</ListGroup.Item>
                  <ListGroup.Item>{pivo.vrsta}</ListGroup.Item>
                  <ListGroup.Item>Pena: {pivo.pena}</ListGroup.Item>
                  <ListGroup.Item>Okus: {pivo.okus}</ListGroup.Item>
                  <ListGroup.Item>Vonj: {pivo.vonj}</ListGroup.Item>
                </ListGroup>


                <Barcode value={pivo.crtna_koda} />
                <Button variant="primary">Več</Button>
                <Button variant="primary" id="mojaPivaShrani"
                  onClick={() => setMojaPiva([...new Set([pivo])])}
                >
                  Dodaj med priljubljene

                </Button>

                <mojaPiva likedPiva={mojaPiva.likedPiva} />
              </Card.Body>
            </Card>


          )
          )}
        </CardGroup>
      </Container>
    </motion.div>
  )
}
