import React from 'react';
import { Card, ListGroup, Button,CardGroup } from "react-bootstrap";
import axios from 'axios';
//-------------NI ŠE
export default class SeznamPriljubljenihPiv extends React.Component {
  state = {
    piva: [],
    uniques:[]
  }

  componentDidMount() {
    axios.get(`http://localhost:5001/vsaPriljubljenaPiva/1`)
      .then(res => {
        const piva = res.data;
        const vsiIDs = piva.map(pivo => pivo.idseznam_piva);
        let uniques = [...new Set(vsiIDs)];
        this.setState({piva,uniques});
      })
  }
 
  render() {
    return (
      <>
        
        <CardGroup>
        {   
          this.state.uniques
            .map(unique =>
            <Card  style={{ width: '12rem' }}>
                    <Card.Body>
                        <Card.Header as="h5">Seznam#{unique}</Card.Header>
                        <ListGroup variant="flush">
                        {
                        this.state.piva.filter(pivo =>pivo.idseznam_piva===unique).map(filteredPivo => (
                            <>
                            <ListGroup.Item>{filteredPivo.naziv}</ListGroup.Item>
                            <Button variant="warning">Odstrani</Button>
                            </>
                            ))}
                        </ListGroup>
          
                    </Card.Body>
                </Card>
            )
          }      
      </CardGroup>
      </>
    )
  }
}