import React from 'react';
import { Card, ListGroup, Button,CardGroup } from "react-bootstrap";
import axios from 'axios';
var Barcode = require('react-barcode');
//-------------NI ŠE
export default class SeznamPiv extends React.Component {
  state = {
    piva: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/seznamiPivSeznama/:idSeznama/:idUporabnik`)
      .then(res => {
        const piva = res.data;
        this.setState({ piva });
      })
  }

  render() {
    return (
        <CardGroup>
        {
          this.state.piva
            .map(pivo =>
                <Card className="flex-fill m-1" style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Title>{pivo.idseznam_piva}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{pivo.alkohol}</ListGroup.Item>
                            <ListGroup.Item>{pivo.vrsta}</ListGroup.Item>
                            <ListGroup.Item>Pena: {pivo.pena}</ListGroup.Item>
                            <ListGroup.Item>Okus: {pivo.okus}</ListGroup.Item>
                            <ListGroup.Item>Vonj: {pivo.vonj}</ListGroup.Item>
                            <Barcode value={pivo.crtna_koda} />,
                        </ListGroup>
                        <Button variant="primary">Ogled</Button>
                    </Card.Body>
                </Card>
            )
        }
      </CardGroup>
    )
  }
}