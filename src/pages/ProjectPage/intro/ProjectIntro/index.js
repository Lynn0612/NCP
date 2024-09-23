import Reactt, { useState } from "react";
import "./style.scss";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import background from "./background.png";
import ourgoal from "./ourgoal.png";
import operation from "./operation.png";

export const ProjectIntro = () => {
    const [selectedIntro, setSelectedIntro] = useState(0);

    const introData = [
        {
            id: 1,
            title: "Background",
            subtitle: "A Natural Capital Initiative Pilot",
            content:
                "The Natural Capital Initiative project holds vast promise for reshaping our approach to environmental conservation and sustainable development. By combining conservation, environmental engineering, and financial incentives, the initiative aims to restore degraded ecosystems, enhance biodiversity, and elevate the value of natural capital.",
            image: background
        },
        {
            id: 2,
            title: "Our Goal",
            subtitle: "Vision for Sustainable Development",
            content:
                "Prospects for this project include the creation of thriving high-performance habitats through strategic restoration and enhancement efforts. By leveraging digital monitoring tools, the initiative can track progress in real-time, ensuring the effectiveness of conservation measures and facilitating data-driven decision-making.",
            image: ourgoal
        },
        {
            id: 3,
            title: "Operation",
            subtitle: "From Restoration to Sustainable Business Models",
            content:
                "Expected outcomes encompass the transformation of degraded lands into valuable natural assets that benefit both the environment and local communities. The initiative is poised to demonstrate the economic viability of preserving natural capital, potentially opening new avenues for sustainable business models that prioritize environmental stewardship. Through innovative approaches and collaborative efforts, the Natural Capital Initiative seeks to set a precedent for holistic ecosystem management that balances ecological integrity with financial sustainability, fostering a future where the intrinsic value of nature is recognized and preserved for generations to come.",
            image: operation
        },
    ];

    return (
        <Container fluid id="projectintro" className="p-0">
            <Row className="content">
                <Col md={12}>
                    <p className="fw-bold title">Ecological Restoration and Financial Innovation </p>
                    <hr className="hr"></hr>
                </Col>
            </Row>
            <Row className="m-0">
                <Col xs={12} className="intro-content d-flex justify-content-center">
                    {introData.map((item, index) => (
                        <Button
                            key={item.id}
                            className={`intro-btn ${selectedIntro === index ? "selected" : ""} w-100 w-md-auto mb-2`}
                            onClick={() => setSelectedIntro(index)}
                        >
                            {item.title}
                        </Button>
                    ))}
                </Col>
            </Row>
            <Row className="intro">
                <Col lg={5} className="p-0 introimg">
                    <Image src={introData[selectedIntro].image} className="w-100 intro-img" />
                </Col>
                <Col lg={6}>
                    <p className="introtitle">{introData[selectedIntro].title}</p>
                    <p className="intro-title fw-bold">{introData[selectedIntro].subtitle}</p>
                    <p className="introcontent">{introData[selectedIntro].content}</p>
                </Col>
            </Row>
        </Container>
    );
};