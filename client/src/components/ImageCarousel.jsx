import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselSample1 from '/client/src/Images/CarouselSample1';

const ImageCarousel = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <image
                    className='FirstSlide'
                    src='/CarouselSample1.png'
                    alt='FirstSlide'
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}



export default ImageCarousel;