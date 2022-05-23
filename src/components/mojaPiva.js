import React from "react";
import { Card,Container } from "react-bootstrap";
import SeznamPriljubljenihPiv from "./seznamPriljubljenih";

function MojaPiva() {
    return (
        <>
            <Card>
                <Card.Text>
                </Card.Text>
            </Card>
            <Container>  
                <SeznamPriljubljenihPiv/>
            </Container>  
        </>
    )
}

export default MojaPiva;