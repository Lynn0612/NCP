import React from "react";
import "./style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import whydoit from "./whydoit.png";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";

export const ProjectWhydoit = () => {
    return (
        <Container fluid id="projectwhydoit" className="p-0">
            <Row className="content">
                <Col md={12} className="content-padding">
                    <p className="fw-bold title">Why do it?</p>
                    <hr className="hr"></hr>
                </Col>
                <Col md={3} xs={12} className="icon">
                    <Image src={icon1}></Image>
                    <div className="icon-bg">
                        <p className="project-title">Habitat loss increases greenhouse gas emissions; 11% of global emissions result from deforestation and forest degradation.</p>
                        <p className="project-p">(United Nations Environment Programme (2021) Deforestation Factsheet)</p>
                    </div>
                </Col>
                <Col md={3} xs={12} className="icon">
                    <Image src={icon2}></Image>
                    <div className="icon-bg">
                        <p className="project-title">Nature and climate are intertwined. Forests, soils, peatlands, the ocean, and other ecosystems are the world’s largest carbon sinks, absorbing 60% of gross annual anthropogenic carbon emissions.</p>
                        <p className="project-p">(World Bank)</p>
                    </div>
                </Col>
                <Col md={3} xs={12} className="icon">
                    <Image src={icon3}></Image>
                    <div className="icon-bg">
                        <p className="project-title">Wildlife populations have declined by an average 69% in the past 50 years.</p>
                        <p className="project-p">(The WWF’s Living Planet Report 2022)</p>
                    </div>
                </Col>
                <Col md={3} xs={12} className="icon whydoit-padding">
                    <Image src={icon4}></Image>
                    <div className="icon-bg">
                        <p className="project-title">Climate, biodiversity, and land degradation goals can only be reached if investments into nature-based solutions quickly ramp up to USD 384 billion/year by 2025, more than double of current investments.</p>
                        <p className="project-p">(State of Finance for Nature 2022” by UN Environment Programme (UNEP)</p>
                    </div>
                </Col>
            </Row>
                <Row className="w-100 m-0">
                    <Col xs={8} className="project-area px-0 position-relative">
                        <Image src={whydoit} className="project-cover" />
                        <Col xs={4} className="project-content">
                            <p className="project-content-p">The latest announcement of Global Forest Watch is that the area of<br></br> ​​forest that disappeared in 2023 exceeds 28 million hectares. </p>
                            <p className="project-content-title">Calculated based on this:</p>
                            <p className="project-content-p">"Disappearance area ÷ seconds per year"</p>
                            <p className="project-math">28,256,071 ÷ (365 x 24 x 60 x 60) = <span className="projec-ans">0.90</span></p>
                            <p className="project-content-p">There is an average of one standard football field (0.71 hectares)<br></br> of forest is lost in the world every second. </p>
                        </Col>
                    </Col>
                </Row>           
        </Container>
    );
};