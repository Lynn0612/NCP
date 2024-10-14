import React from 'react';
import "./style.scss"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import topbanner from './topbanner.png';

export const TopBanner = () => (
    <Container fluid id='topbanner'>
        <Row>
            <Col lg={7} className='txt-area'>
                <div className='bannerwidth'>
                    <h2>Conserve and Enhance Nature Capital,<br /> Rebuild the Planet and Biodiversity</h2>
                    <p>Napital is a newly established organization based in Hong Kong, dedicated to nurturing a harmonious relationship between humanity and the natural world. Founded in 2024, our mission is to inspire and empower the people of Hong Kong and the Eastern Southern Asia region to embrace the principles of environmental sustainability, social responsibility, and holistic well-being, through the innovative natural capital initiative.</p>
                </div>
            </Col>
            <Col lg={5} className='img-area px-0'>
                <Image src={topbanner} className='img-cover' />
            </Col>
        </Row>
    </Container>
)