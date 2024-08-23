import React from 'react';
import "./style.scss"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import aboutbanner from './aboutbanner.png';

export const AboutBanner = () => (
        <Container fluid id="about-banner">
            <Row>
                <Col xs={8} className="banner-area px-0 position-relative">
                    <Image src={aboutbanner} className="banner-cover" />
                    <Col xs={4} className="banner-text">
                        <h1>Introducing Project<br />Catalog & Screenings:</h1>
                        <p>Expanding Access to High-Quality Carbon Offset Projects</p>
                    </Col>
                </Col>
            </Row>
        </Container>
    )


