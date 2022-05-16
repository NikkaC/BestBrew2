import { render } from "@testing-library/react";
import React from "react";
import { Card } from "react-bootstrap";

export const Napaka = () => {

    const MyStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial",
        margin: "auto"
        };
        
    const Center = {
        margin: "auto",
        width: "50%",
        border: "3px solid green",
        padding: "10px"
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