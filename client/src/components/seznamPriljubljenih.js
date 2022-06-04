import React, { useState } from 'react';
import { Card, Container, ListGroup, Button,CardGroup } from "react-bootstrap";
import ReactStars from 'react-stars'
import axios from 'axios';



const ratingChanged = (event,idPriljubljenaPiva) => {
  console.log(event);
  console.log(idPriljubljenaPiva);
    // PUT request using axios with error handling
    const article = { title: 'React PUT Request Example' };
    axios.get(`http://localhost:5001/posodobiOceno/${event}/${idPriljubljenaPiva}`)
        .catch(error => {
            console.error('There was an error!', error);
        });
}



export default class SeznamPriljubljenihPiv extends React.Component {
  
  state = {
    piva: [],
    uniques: [],
    imena: []
  }

  componentDidMount() {
    if(sessionStorage.getItem("prijavljenUporabnik")!=null){
    const idUporabnika=JSON.parse(sessionStorage.getItem("prijavljenUporabnik")).iduporabnik;
    
    axios.get(`http://localhost:5001/vsaPriljubljenaPiva/${idUporabnika}`)
      .then(res => {
        const piva = res.data;
        const vsiIDs = piva.map(pivo => pivo.idseznam_piva);
        let uniques = [...new Set(vsiIDs)];
        this.setState({
          piva: piva,
          uniques: uniques,
        });
      })
      
      axios.get(`http://localhost:5001/seznamIme/${idUporabnika}`)
      .then(res => {
        const imenaJSON = res.data;
        const imenaSeznamov = imenaJSON.map(seznam => seznam.naziv);
        let imena = [...new Set(imenaSeznamov)];
        this.setState({
          imena: imena,
        });
      });
    }
  }

  handleOdstraniPivo(idpivo,idseznam) {
    console.log(idpivo);
    console.log(idseznam);
    axios.delete(`http://localhost:5001/odstraniPivoSseznama/${idpivo}/${idseznam}`)
    this.setState({piva: this.state.piva.filter(function(pivo) { 
      return pivo.idpivo !== idpivo;
  })});
  }

 
  render() {
    console.log('Piva.');
    console.log(this.state.piva);
    console.log(this.state.uniques);
    console.log(this.state.imena);

    return (
      <>
        <Container>
          <center>
            <div class="form__group">
              <input class="form__input" type='text' placeholder='Vnesite ime seznama'></input>
              <Button size='lg' variant='secondary'>Dodaj nov seznam</Button>
            </div>
          </center>
          <CardGroup>
            {   
              this.state.uniques
                .map((unique, index) =>
                <Card  style={{ width: '12rem' }}>
                  
                        <Card.Body>
                            <Card.Header as="h2" style={{ textAlign: "center" }}>{this.state.imena[index]}</Card.Header>
                            <ListGroup variant="flush">
                            {
                            this.state.piva.filter(pivo =>pivo.idseznam_piva===unique).map(filteredPivo => (
                                <>
                                <ListGroup.Item>{filteredPivo.naziv}</ListGroup.Item>
                                <ListGroup.Item> <p>Oceni pivo</p> 
                                    <ReactStars count={5} value={filteredPivo.ocena} half={false} onChange={event => ratingChanged(event, filteredPivo.idpriljubljena_piva)} size={40} color2={'#ffd700'} />
                                </ListGroup.Item>
                                <Button variant="warning" onClick={() => { this.handleOdstraniPivo(filteredPivo.idpivo,unique) }}>Odstrani</Button>
                                </>
                                ))}
                            </ListGroup>
              
                        </Card.Body>
                    </Card>
                )
              }      
          </CardGroup>
        </Container>
      </>
    )
  }
}