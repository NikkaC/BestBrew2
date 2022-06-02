import React from "react";
import { Card, Carousel, Image } from "react-bootstrap";
import pivo2 from './Slike/SlideShow1.jpg';
import pivo3 from './Slike/SlideShow2.jpg';
import pivo4 from './Slike/SlideShow3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SlideShow() {


    return (
        <Card sm>

            <Carousel wrap>
                <Carousel.Item interval={1000}>
                    
                    <img src={pivo2} />

                </Carousel.Item>
                <Carousel.Item interval={1000}>

                    <Image src={pivo3} fluid />

                </Carousel.Item>
                <Carousel.Item interval={1000}>

                    <Image src={pivo4} fluid />

                </Carousel.Item>
            </Carousel>

        </Card>

    );

}