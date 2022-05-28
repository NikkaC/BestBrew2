<<<<<<< HEAD
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { Card, Button,Container } from "react-bootstrap";
import '../styles/iskanje.css';
import 'mdbreact/dist/css/mdb.css'
import SeznamPiv from "./seznamPiv";
import Modal from "./modal.js";

class Iskanje extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        };
        this.prikazi = this.prikazi.bind(this);
        this.skrij = this.skrij.bind(this);
    }

    prikazi = () => {
        this.setState({ show: true });
    }

    skrij = () => {
        this.setState({ show: false });
    }

    render() {

        return (
        <>
            <center>
                    <Card>
                        <Card.Text>
                            <div>
                                <input class="searchBar" placeholder="Vnesi ime piva"/>
                                <Button size="lg"  variant="secondary">Poišči pivo</Button>{' '}
                                <Button size="lg" onClick={this.prikazi} variant="secondary">Skeniraj kodo</Button>{' '}
                            </div>
                        </Card.Text>
                    </Card>
            </center>

            <Modal show = {this.state.show} handleClose = {this.skrij}>
                <h1>Iskanje ~ barcode</h1>
            </Modal>

            <Container>
                <SeznamPiv/>
            </Container>    
        </>
        );
    }
=======
import React, { useState, useEffect } from "react";
import { Card, Button, Container, ListGroup, CardGroup } from "react-bootstrap";
import '../styles/iskanje.css';
import 'mdbreact/dist/css/mdb.css'
import SeznamPiv from "./seznamPiv";
import axios from 'axios';
var Barcode = require('react-barcode');




const handleOnSearch = (string, results) => {
  // onSearch will have as the first callback parameter
  // the string searched and for the second the results.
  console.log(string, results)
>>>>>>> 935b08f04eee6e08816c03dbb7bb7d73ffce125d
}





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
