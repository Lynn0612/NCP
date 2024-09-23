import React from "react";
import "./style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import ModalWindow from 'src/components/ModalWindow';

export const ProjectCard = () => {
    return (
        <Container id="ProjectCard" className="project">
            <Row className="content">
                <Col md={12}>
                    <p className="fw-bold title">Ecology - Flora/Fauna</p>
                    <hr className="hr"></hr>
                </Col>
            </Row>
            <ModalWindow />
        </Container>
    );
};