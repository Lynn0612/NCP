import React from "react";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";


export const SubscriptionSupporter = () => {
    return (
        <div id="subscriptionsupporter">
            <div className="title fw-bold">Reinforcing Our Culture In Valle de Bravo - Cultivo's Global Team Summit</div>
            <Container className="supporter">
                <Row className="text-center m-0">
                    <Col sm={12} className="suportercol">
                        <h1>209</h1>
                        <p>Number supporters</p>
                    </Col>
                    <Col sm={12} className="suportercol suporter-border">
                        <h1>NT$375,556</h1>
                        <p>Subscription amount</p>
                    </Col>
                    <Col sm={12} className="suportercol">
                        <h1>50%</h1>
                        <p>Goal achievement rate</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};