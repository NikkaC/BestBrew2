import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/onas.css';

function Onas() {
  return (
    <>
      <Container fluid>

        <p class=" text-center, fw-bold, glavnoText">NEKAJ O NAS<br></br>
          EKIPA:</p>
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

export default Onas;
