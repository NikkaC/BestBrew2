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
}

export default Iskanje;