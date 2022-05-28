import React from "react";
import { Card } from "react-bootstrap";

export const Napaka = () => {

    const MyStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial",
        margin: "auto"
        };

    return (
        <>
            <Card style={{body: "true", bg: 'success'}}>
                <Card.Body style={MyStyle}>
                    <Card.Text>
                        ERROR
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}