import React from "react";
import "./style.scss";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import background from "./background.png";

export const ProjectIntro = () => {


    return (
        <Container fluid id="projectintro" className="p-0">
            <Row className="content">
                <Col md={12}>
                    <p className="fw-bold title">Ecological Restoration and Financial Innovation </p>
                    <hr className="hr"></hr>
                </Col>
            </Row>
            <div className="intro-content">
            <Button className="intro-btn">Background</Button>
            <Button className="intro-btn">Our Goal</Button>
            <Button className="intro-btn">Operation</Button>
            </div>
            <Row className="intro">
                <Col lg={5} className="p-0 introimg">
                <Image src={background} className="w-100"></Image>
                </Col>
                <Col lg={6}>
                <p className="introtitle">Background</p>
                <p className="intro-title fw-bold">A Natural Capital Initiative Pilot</p>
                <p className="introcontent">The Natural Capital Initiative project holds vast promise for reshaping our approach to environmental conservation and sustainable development. By combining conservation, environmental engineering, and financial incentives, the initiative aims to restore degraded ecosystems, enhance biodiversity, and elevate the value of natural capital. </p>
                </Col>
            </Row>


        </Container>
    );
};


             