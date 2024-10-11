import React from "react";
import "./style.scss";
import project01 from "./project01.png";
import project02 from "./project02.png";
import project03 from "./project03.png";
import project04 from "./project04.png";
import { Container, Row, Col, Image } from "react-bootstrap";

export const ProjectContent = () => {
    return (
        <Container id="projectcontent">
        <Row className="projectcontent-bg projectcontent-row">
            <Col md={6} className="desk-pic-margin d-flex justify-content-end align-items-center p-0">
                <Image src={project01} className="projectcontent-pic2 w-100"/>
            </Col>
            <Col md={6} className="desk-margin article-col">
                <div>
                    <p className="fw-bold m-0 title-article">Capturing the Sounds</p>
                </div>
                <hr className="hr hr-margin"></hr>
                <p className="projectcontent-article m-0">
                On Bin Tan Island, the Natural Capital Initiative captures the serene and diverse sounds of its ecosystems. From the gentle rustle of leaves to the calls of key species, these natural sounds play a crucial role in understanding the health and vibrancy of the island's environment. By listening to nature’s melodies, we gain insights into the rich biodiversity and the success of ongoing restoration efforts.</p>
            </Col>
        </Row>
        <Row className="projectcontent-bg">
            <Col md={6} className="desk-margin col-article">
                <div>
                    <p className="fw-bold m-0 title-article">Exploring the Videos</p>
                </div>
                <hr className="hr hr-margin"></hr>
                <p className="projectcontent-article m-0">
                Experience the beauty and transformation of Bin Tan Island through stunning visual footage. These videos showcase the island’s evolving landscapes, highlighting the progress of the Natural Capital Initiative's restoration projects. From lush forests being revived to wildlife reclaiming their habitats, these films offer a compelling glimpse into the island’s ecological recovery.</p>
            </Col>
            <Col md={6} className="desk-pic-margin d-flex justify-content-start align-items-center p-0">
                <Image src={project02} className="pic2-projectcontent w-100"/>
            </Col>
        </Row>
        <Row className="projectcontent-bg projectcontent-row">
            <Col md={6} className="desk-pic-margin d-flex justify-content-end align-items-center p-0">
                <Image src={project03} className="projectcontent-pic2 w-100"/>
            </Col>
            <Col md={6} className="desk-margin article-col">
                <div>
                    <p className="fw-bold m-0 title-article">eDNA Report </p>
                </div>
                <hr className="hr hr-margin"></hr>
                <p className="projectcontent-article m-0">
                The eDNA report offers a scientific snapshot of Bin Tan Island's biodiversity. By analyzing environmental DNA from water and soil samples, this report identifies key species present on the island, both flora and fauna. It serves as a vital tool in tracking the success of restoration efforts, providing data on the species that are returning and thriving in the rejuvenated ecosystem.</p>
            </Col>
        </Row>
        <Row className="projectcontent-bg">
                <Col md={6} className="desk-margin col-article desk-mb">
                    <div>
                        <p className="fw-bold m-0 title-article">Exploring the Videos</p>
                    </div>
                    <hr className="hr hr-margin"></hr>
                    <p className="projectcontent-article m-0">
                        Experience the beauty and transformation of Bin Tan Island through stunning visual footage. These videos showcase the island’s evolving landscapes, highlighting the progress of the Natural Capital Initiative's restoration projects. From lush forests being revived to wildlife reclaiming their habitats, these films offer a compelling glimpse into the island’s ecological recovery.</p>
                </Col>
                <Col md={6} className="desk-pic-margin d-flex justify-content-start align-items-center p-0">
                    <Image src={project04} className="pic2-projectcontent desk-pic-mb  w-100" />
                </Col>
            </Row>
    </Container>
    );
};