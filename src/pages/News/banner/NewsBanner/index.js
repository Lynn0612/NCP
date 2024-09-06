import React from 'react';
import "./style.scss"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import newsbanner from './newsbanner.png';

export const NewsBanner = () => (
    <Container fluid id="news-banner">
        <Row>
            <Col xs={8} className="banner-area px-0 position-relative">
                <Image src={newsbanner} className="banner-cover" />
                <Col xs={4} className="banner-text">
                    <h1>Welcome to the Newsroom</h1>
                    <p>See our latest news, announcements, blogs, <br />
                        media coverage and stories.</p>
                </Col>
            </Col>
        </Row>
    </Container>
)


