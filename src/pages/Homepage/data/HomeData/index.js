import React from "react";
import "./style.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import homedata from './hoemdata.png';


export const HomeData = () => {


    return (
        <Container id="homedata">
            <Row>
                <Col>
                    <h1 className="text-center fw-bold title">Data and insights for<br />every step of the carbon journey</h1>
                    <div className="data-hr d-none d-lg-flex"></div>
                </Col>
            </Row>
            <Row className="d-flex">
                <Col className="d-none d-lg-flex">
                    <Image src={homedata} className="dataimg" />
                </Col>
                <Col className="d-flex flex-column content">
                    <h3>Define & Discover</h3>
                    <p>Establish a carbon market strategy that works for you, supported by us, and explore the range of carbon projects that advance your goals.</p>
                    <Link to="/datapanels" className="text-decoration-none mt-auto d-flex">
                        <Button className="news-btn ms-auto d-block">read more</Button>
                    </Link>
                </Col>
                <div className="data-hr"></div>
                <Col className="d-none d-lg-flex">
                    <Image src={homedata} className="dataimg" />
                </Col>
                <Col className="d-flex flex-column content">
                    <h3>Diligence</h3>
                    <p>Ensure you're investing in real climate impact with the market’s deepest project-level due diligence insights.</p>
                    <Link to="/datapanels" className="text-decoration-none mt-auto d-flex">
                        <Button className="news-btn ms-auto d-block">read more</Button>
                    </Link>
                </Col>
                <div className="data-hr"></div>
                <Col className="d-none d-lg-flex">
                    <Image src={homedata} className="dataimg" />
                </Col>
                <Col className="d-flex flex-column content">
                    <h3>Monitor</h3>
                    <p>Be the first to know about material project and policy changes.</p>
                    <Link to="/datapanels" className="text-decoration-none mt-auto d-flex">
                        <Button className="news-btn ms-auto d-block">read more</Button>
                    </Link>
                </Col>
                <div className="data-hr"></div>
            </Row>
        </Container>

    );
};