import React, { useState } from "react";
import "./style.scss";
import { Container, Row, Col, Button, Image, Dropdown, DropdownButton } from "react-bootstrap";
import background from "./background.png";
import homeintro from "./homeintro.png";
import homeintro1 from "./homeintro1.png";
import homeintro2 from "./homeintro2.png";
import homeintro3 from "./homeintro3.png";
import { Link, useNavigate } from 'react-router-dom'; 

export const HomeIntro = () => {
    const [selectedIntro, setSelectedIntro] = useState(0);
    const navigate = useNavigate(); 

    const projectIntro = (page) => {
        window.scrollTo({
            top: 0,
        });
        navigate(page);
    };

    const introData = [
        {
            id: 1,
            title: "Background",
            content:
                "The Natural Capital Initiative project holds vast promise for reshaping our approach to environmental conservation and sustainable development. By combining conservation, environmental engineering, and financial incentives, the initiative aims to restore degraded ecosystems, enhance biodiversity, and elevate the value of natural capital.",
            image: background
        },
        {
            id: 2,
            title: "Capturing the Sounds",
            subtitle: "Capturing the Sounds",
            content:
                "On Bin Tan Island, the Natural Capital Initiative captures the serene and diverse sounds of its ecosystems. From the gentle rustle of leaves to the calls of key species, these natural sounds play a crucial role in understanding the health and vibrancy of the island's environment. By listening to nature’s melodies, we gain insights into the rich biodiversity and the success of ongoing restoration efforts.",
            image: homeintro
        },
        {
            id: 3,
            title: "Exploring the Videos",
            subtitle: "Exploring the Videos",
            content:
                "Experience the beauty and transformation of Bin Tan Island through stunning visual footage. These videos showcase the island’s evolving landscapes, highlighting the progress of the Natural Capital Initiative's restoration projects. From lush forests being revived to wildlife reclaiming their habitats, these films offer a compelling glimpse into the island’s ecological recovery.",
            image: homeintro1
        },
        {
            id: 4,
            title: "eDNA Report",
            subtitle: "eDNA Report",
            content:
                "The eDNA report offers a scientific snapshot of Bin Tan Island's biodiversity. By analyzing environmental DNA from water and soil samples, this report identifies key species present on the island, both flora and fauna. It serves as a vital tool in tracking the success of restoration efforts, providing data on the species that are returning and thriving in the rejuvenated ecosystem.",
            image: homeintro2
        },
        {
            id: 5,
            title: "Geolocation Data",
            subtitle: "Geolocation Data",
            content:
                "Geolocation data plays a pivotal role in the Natural Capital Initiative’s efforts on Bin Tan Island. By precisely mapping the land, researchers can monitor changes in topography, vegetation, and wildlife habitats. This data enables the team to make informed decisions on where to focus conservation efforts, ensuring the most impactful outcomes for the environment and local communities.",
            image: homeintro3
        }
    ];

    return (
        <div id="homeintro">
            <Container fluid className="p-0 d-none d-lg-flex flex-column">
                <Row className="content">
                    <Col md={12} className="project-padding text-center">
                        <p className="fw-bold title">Drive impact aBintan NCP Site Baseline And<br />Survey Introductiont scale</p>
                        <br />
                        <p className="title-p">Progress Meeting<br />Date: Wednesday, 17 July 2024<br />delivering a better world</p>
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
                    <Col lg={4} className="d-flex flex-column title-col">
                        <p className="introtitle fw-bold">{introData[selectedIntro].title}</p>
                        <p className="introcontent">{introData[selectedIntro].content}</p>
                        <Link to="/project" className="text-decoration-none mt-auto d-flex">
                        <Button className="my-btn btn mt-auto border-0 fw-bold px-3 w-100 d-flex justify-content-center align-items-center" onClick={() => projectIntro('/')}>
                            Learn more<i className="bi bi-arrow-right"></i>
                        </Button>
                        </Link>
                    </Col>
                    <Col lg={4} className="p-0 introimg">
                        <Image src={introData[selectedIntro].image} className="w-100 intro-img" />
                    </Col>
                </Row>
            </Container>

            <Container className="d-flex d-lg-none flex-column p-0">
            <Row className="content">
                    <Col md={12} className="project-padding text-center">
                        <p className="fw-bold title">Drive impact aBintan NCP Site Baseline And<br />Survey Introductiont scale</p>
                        <p className="title-p">Progress Meeting<br />Date: Wednesday, 17 July 2024<br />delivering a better world</p>
                    </Col>
                </Row>
            <DropdownButton 
                    title={introData[selectedIntro].title} 
                    className="news-btn"
                    onSelect={(eventKey) => setSelectedIntro(parseInt(eventKey))}
                >
                    {introData.map((item, index) => (
                        <Dropdown.Item 
                            key={item.id} 
                            eventKey={index} 
                            active={selectedIntro === index}
                        >
                            {item.title}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <Row className="intro">
                    <Col lg={4} className="d-flex flex-column title-col">
                        <p className="introtitle fw-bold">{introData[selectedIntro].title}</p>
                        <p className="introcontent">{introData[selectedIntro].content}</p>
                    </Col>
                    <Col lg={4} className="d-flex flex-column p-0 introimg mx-auto align-items-center justify-content-center text-center">
                        <Image src={introData[selectedIntro].image} className="h-100 intro-img" />
                        <Link to="/project" className="text-decoration-none w-100">
                        <Button className="my-btn btn mt-auto border-0 fw-bold px-3 w-100 d-flex justify-content-center align-items-center">
                            Learn more<i className="bi bi-arrow-right"></i>
                        </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};