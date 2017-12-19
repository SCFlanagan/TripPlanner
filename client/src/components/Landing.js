import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Button, Col } from 'react-bootstrap';
import '../stylesheets/landing.css';

// Fix the second button so that it scrolls to the next section of the landing page.
const CarouselButtons = () => {
    return (
        <div>
            <Link to={'/signup'}>
                <Button bsSize='large' bsStyle='primary' className='carousel-buttons'>Get Started</Button>
            </Link>
            <Link to={'/#tour'}>
                <Button bsSize='large' bsStyle='primary' className='carousel-buttons'>Take the Tour</Button>
            </Link>
        </div>
    )
}

// *****  Animate the text sections as you scroll down

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <Carousel className='Carousel'>
                    <Carousel.Item>
                        <div className='landing-photo' id='plan-photo'></div>
                        <Carousel.Caption>
                            <h1>Plan</h1>
                            <h3>Plan your trips and save details to your account.</h3>
                            <CarouselButtons />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='landing-photo' id='guide-photo'></div>     
                        <Carousel.Caption>
                            <h1>Explore</h1>
                            <h3>Use your itinerary and explore travel options.</h3>
                            <CarouselButtons />
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className='landing-photo' id='organize-photo'></div>                
                        <Carousel.Caption>
                            <h1>Organize</h1>
                            <h3>Upload photos and share your customized albums with friends.</h3>
                            <CarouselButtons />
                        </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
                <Col xs={0} sm={1} md={2} />
                <Col xs={12} sm={10} md={8} id='landing-tour'>
                    <div className='tour-section'>
                        <h1 id="tour">Take the Tour</h1>
                        <p>pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.</p>
                    </div>
                    <div className='tour-section'>
                        <h1>How it Works</h1>
                        <p>pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.</p>
                    </div>
                    <div className='tour-section'>
                        <h1>How it Works</h1>
                        <p>pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.pload photos and share your customized albums with friends.</p>
                    </div>
                </Col>
                <Col xs={0} sm={1} md={2} />
            </div>
        )
    }
}