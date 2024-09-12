import React from "react";
import "./style.scss";
import Products from "./products.png";
import { Container, Row, Col, Image } from "react-bootstrap";

export const ProductsBanner = () => {
    return (
        <Container fluid id="productsbanner" className="p-0">
            <Row className="products-padding">
                <Col xs={12} md={4} className="products-img d-flex p-0 justify-content-end align-items-end">
                    <Image src={Products} className="productsimg" />
                </Col>
                <Col xs={12} md={8} className="products-content">
                    <p className="title fw-bold">A Sustainable Approach to Ecosystem Revitalization</p>
                    <p className="content">The "Natural Capital Initiative" stands as a pioneering strategy project that integrates conservation, environmental engineering, and financial incentives to revitalize ecosystems and their services. This innovative approach aims to restore environmental balance while enhancing multiple aspects of environmental performance. By meticulously mapping the holistic profile of a land's natural capital, this initiative seeks to elevate its intrinsic value, transforming it into a tangible financial asset. Through a blend of ecological stewardship and economic foresight, the Natural Capital Initiative not only safeguards our planet's biodiversity but also presents a sustainable model for increasing land value through the preservation and enhancement of our natural heritage.</p>
                </Col>
            </Row>
        </Container>
    );
};