import React from 'react';
import "./style.scss"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export const BlogBanner = ({ blogbanner, title, description }) => {
    return (
    <Container fluid id="blogbanner">
        <Row>
            <Col xs={8} className="banner-area px-0 position-relative">
                <Image src={blogbanner} className="banner-cover" />
                <Col xs={4} className="banner-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Col>
            </Col>
        </Row>
    </Container>
);
};