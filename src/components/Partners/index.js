import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';
import partners1 from './partners1.png';
import partners2 from './partners2.png';
import partners3 from './partners3.png';
import partners4 from './partners4.png';
import partners5 from './partners5.png';
import partners6 from './partners6.png';
import partners7 from './partners7.png';
import partners8 from './partners8.png';
import partners9 from './partners9.png';
import { Button } from 'react-bootstrap';

const Partners = () => {
    const partners = [
        partners1,
        partners2,
        partners3,
        partners4,
        partners5,
        partners6,
        partners7,
        partners8,
        partners9
    ];
    return (
        <Container fluid id="partners">
            <div className="slider">
                <div className="slider-items">
                    {partners.map((src, index) => (
                        <img key={index} src={src} alt={`Partner ${index + 1}`} />
                    ))}
                </div>
                <div className="slider-items">
                    {partners.map((src, index) => (
                        <img key={index} src={src} alt={`Partner ${index + 1}`} />
                    ))}
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                <Button className="partners-btn my-4 px-4 d-flex">Trusted by world-leading companies</Button>
                </div>
            </div>
        </Container>
    )
}
export default Partners
