import React, { useState, useEffect } from "react";
import { Card, Button, Container, ListGroup, CardGroup } from "react-bootstrap";
import '../styles/iskanje.css';
import 'mdbreact/dist/css/mdb.css'
import axios from 'axios';
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
    <>
      <CardGroup>
        <SearchChange piva={piva} />
      </CardGroup>
      <center>
        <Card>
          <Card.Text>

          </Card.Text>
        </Card>
      </center>
      <Container>
      </Container>
    </>
  )
}

function SearchChange({ piva }) {

  const [search, setSearch] = useState("")
  useEffect(() => {
  },
    [search]);

  const handleChange = (event) => {
    setSearch(event.target.value.toLocaleLowerCase());
  };

  return (
    <>
      <input className="searchBar" type='text' placeholder="Išči po imenu piva" onChange={handleChange} />

      {piva.filter(pivo => pivo.naziv.toLocaleLowerCase().includes(search)).map(pivo => (


        <Card className="flex-fill m-1" style={{ width: '12rem' }} >
          <Card.Body>
            <Card.Title>{pivo.naziv}</Card.Title>
            <Card.Subtitle>{pivo.naziv_pivovarne}</Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item>{pivo.alkohol}</ListGroup.Item>
              <ListGroup.Item>{pivo.vrsta}</ListGroup.Item>
              <ListGroup.Item>Pena: {pivo.pena}</ListGroup.Item>
              <ListGroup.Item>Okus: {pivo.okus}</ListGroup.Item>
              <ListGroup.Item>Vonj: {pivo.vonj}</ListGroup.Item>
              <Barcode value={pivo.crtna_koda} />,
            </ListGroup>
            <Button variant="primary">Več</Button>
          </Card.Body>
        </Card>


      ))}
    </>
  )
}
