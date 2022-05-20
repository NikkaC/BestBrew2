import React from "react";
import { Card, Button,Container } from "react-bootstrap";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import '../styles/iskanje.css';
import 'mdbreact/dist/css/mdb.css'
import SeznamPiv from "./seznamPiv";

function Iskanje() {
    return (
    <>
        <center>
                <Card>
                    <Card.Text>
                        <div>
                            <input class="searchBar" placeholder="Vnesi ime piva"/>
                            <Button size="lg"  variant="secondary">Poišči pivo</Button>{' '}
                        </div>
                    </Card.Text>
                </Card>
        </center>
        <Container>  
            <SeznamPiv/>
        </Container>    
    </>
    )
}

export default Iskanje;