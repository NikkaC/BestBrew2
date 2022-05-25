import React, { useState } from "react";
import { Card, Button, Container, ListGroup, CardGroup } from "react-bootstrap";
import '../styles/iskanje.css';
import 'mdbreact/dist/css/mdb.css'
import SeznamPiv from "./seznamPiv";
import axios from 'axios';
var Barcode = require('react-barcode');



export default class Iskanje extends React.Component {

  state = {
    piva: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5001/Vsapiva`)
      .then(res => {
        const piva = res.data;
        this.setState({ piva });
      })
  }



  searchChanged = event => {
    this.setState({ search: event.target.value.toLocaleLowerCase() })
  }

  render() {
    return (
      <>



<input className="searchBar" type='text' placeholder="Išči po imenu piva" onChange={this.searchChanged} value={this.state.search} />

        
        <CardGroup>

          {this.state.piva
            .filter(pivo => pivo.naziv.toLocaleLowerCase().includes(this.state.search))
            .map(pivo => (
              <>
              
                <Card className="flex-fill m-1" style={{ width: '12rem' }}>
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
              </>
            )
            )}
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
}