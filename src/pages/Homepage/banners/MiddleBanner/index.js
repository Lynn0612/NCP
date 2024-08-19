import React from 'react';
import "./style.scss"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Pic from './pic.jpeg';

export const MiddleBanner = () => (
<Container fluid className="mb-5">
    <Row>
        <Col lg={5} className='img-area px-0'>
            <Image src={Pic} className='img-cover'/>
        </Col>
        <Col lg={7} className='txt-area'>
            <h2>⁠We believe —— Nature<br/>Can Save Nature</h2>
            <p>At the heart of Napital's ethos lies a deep reverence for the natural world and a steadfast commitment to promoting the well-being of all. We believe that by cultivating a deeper understanding and respect for our natural capital, we can unlock the path to a more harmonious and resilient world, where prosperity is measured not solely by financial gain, but by the flourishing of all living beings.</p>
        </Col>
    </Row>
</Container>
)