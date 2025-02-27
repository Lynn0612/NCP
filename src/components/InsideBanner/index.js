import React from 'react';
import "./style.scss"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import banner from './insidebanner.jpeg';
import { Button } from 'react-bootstrap';

const InsideBanner = () => {

    return (
        <Container fluid className="mb-5" id="home-insidebanner">
            <Row>
                <Col xs={8} className="banner-area px-0 position-relative">
                    <Image src={banner} className="banner-cover" />
                    <Col xs={4} className="banner-text">
                        <h1>Introducing Project<br />Catalog & Screenings:</h1>
                        <p>Expanding Access to High-Quality Carbon Offset Projects</p>
                        <Button className="my-btn btn border-0 fw-bold d-flex justify-content-center align-items-center">READ MORE</Button>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}
export default InsideBanner

