import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/prvastran.css';
import pivo from './Slike/BESTBREW.png';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col, Card } from 'react-bootstrap';

function PrvaStran() {
  return (
    <>
      <Container fluid>

        <p class=" text-center, fw-bold, glavnoText">BESTBREW<br></br>
          Za vse prave ljublitelje piv.</p>
        <Image src={pivo}></Image>


        <Card>
          <Card.Body  style={ {color: "primary"} }>
            <Card.Text>
              BESTBREW
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Row>
          <Col>
            <Card body>

            </Card>


          </Col>
          <Col>
            <Card body>
              
            </Card>
          </Col>
        </Row>
      </Container>

    </>



  );
}

export default PrvaStran;
