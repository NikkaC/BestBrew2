import React from "react";
import { Card, Col } from "react-bootstrap";
import slikaUrban from './Slike/urban.jpg';
import slikaKac from './Slike/kac.jpg';
import slikaDavid from './Slike/david.jpeg';
import slikaMatic from './Slike/matic.jpeg';
import '../styles/onas.css';

function ONas() {
    return (
        <>

        <Col className="d-flex">
            <Card className="flex-fill" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={slikaUrban} />
                <Card.Body>
                    <Card.Title>Urban Vižintin</Card.Title>
                    <Card.Subtitle>Velenje</Card.Subtitle>
                    <Card.Text>
                        Backend expert<br/>
                        Three point specialist
                    </Card.Text>
                    <Card.Link href="#">Instagram</Card.Link>
                </Card.Body>
            </Card>

            <Card className="flex-fill" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={slikaDavid} />
                <Card.Body>
                    <Card.Title>David Golež</Card.Title>
                    <Card.Subtitle>Slovenj Gradec</Card.Subtitle>
                    <Card.Text>
                        Frontend expert<br/>
                        Chupapi
                    </Card.Text>
                    <Card.Link href="#">Facebook</Card.Link>
                </Card.Body>
            </Card>

            <Card className="flex-fill" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={slikaKac} />
                <Card.Body>
                    <Card.Title>Nik Kac</Card.Title>
                    <Card.Subtitle>Vuzenica</Card.Subtitle>
                    <Card.Text>
                        Frontend expert<br/>
                        Anime watcher ( HAHAHAHA )
                    </Card.Text>
                    <Card.Link href="#">Instagram</Card.Link>
                    <Card.Link href="#">Tinder</Card.Link>
                </Card.Body>
            </Card>



            <Card className="flex-fill" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={slikaMatic} />
                <Card.Body>
                    <Card.Title>Matic Absec</Card.Title>
                    <Card.Subtitle>Slovenj Gradec</Card.Subtitle>
                    <Card.Text>
                       Fullstack engineer<br/>
                        DJ
                    </Card.Text>
                    <Card.Link href="#">Snapchat</Card.Link>
                </Card.Body>
            </Card>
            </Col>

        </>
    )
}

export default ONas;