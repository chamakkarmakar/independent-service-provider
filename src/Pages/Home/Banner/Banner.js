import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='slider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100  " 
                        src="http://demo.glowlogix.com.pk/html/lawyer/images/slider/banner2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>I Will Fight For a Dismissal</h3>
                    <Button href='#consult' variant="primary">Free Consultation</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  " 
                        src="http://demo.glowlogix.com.pk/html/lawyer/images/slider/banner.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Independene In Telling Truth Makes The Difference</h3>
                    <Button href='#consult' variant="primary">Free Consultation</Button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  " 
                        src="https://themegeniuslab.com/html/juristic-live-cp/assets/images/slider/slide-1.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Always Fight For Rights</h3>
                    <Button href='#consult' variant="primary">Free Consultation</Button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;