import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/prvastran.css';
import pivo from './Slike/BESTBREW.png';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

function PrvaStran() {
  return (
    <>
    
      <Container fluid>
      <Card>
        <Card.Body style={ {color: "primary"} }>
      <center>
        

        <p class=" text-center, fw-bold, glavnoText">BESTBREW<br></br>
          Za vse prave ljublitelje piv.</p>
        <Image src={pivo}></Image>
        </center>
        </Card.Body>
        </Card>

        <center>
        <Card>
          <Card.Body  style={ {color: "primary"} }>
          <Card.Header><p class = "naslov">Nekaj o spletni strani in kaj tukaj najdete.</p></Card.Header>
            <Card.Text>
              <p class="glavni">
             Radi pogosto zavijete po napornem dnevu v gostilno? Imate radi pijačo narejeno iz hmelja po imenu pivo?<br/>
             Potem je ta stran prava za vas!<br/>
             Ocenjujte piva ter si ustvarite vaš lasten nabor najljubših piv.<br/>
             BestBrew
             </p>
            </Card.Text>
          </Card.Body>
        </Card>
        </center>

        <Card className="bg-dark text-white">
          <Card.Body  style={ {color: "dark"} }>
            <center>
            <Card.Text>
              <p class="textd">Prični svojo pivsko doživetje s klikom enega gumba.</p>
                <Button href="/iskanje">Poišči svojo najljubše pivo</Button>
            </Card.Text>
            </center>
          </Card.Body>
        </Card>

      </Container>

    </>



  );
}

export default PrvaStran;
