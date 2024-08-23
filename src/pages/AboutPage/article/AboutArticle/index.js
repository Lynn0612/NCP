import React from 'react';
import "./style.scss"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pic from './aboutpic1.png';

export const AboutArticle = () => (
    <Container id="about-article">
        <div>
            <p className="fw-bold m-0 title-fs">The origin of the NCP organization</p>
        </div>
        <hr className="hr hr-margin"></hr>
        <Row className="desk-margin">
            <Col lg={6}>
                <p className="about-article">
                    Napital is a newly established company based in Hong Kong, specializing in providing advanced sustainability and Environmental, Social, and Governance (ESG) solutions. The company was founded in 2024 to address the growing need for sustainable business practices and promote the concept of natural capital in Hong Kong and the Eastern Southern Asia region, in alignment with the countries and regional context.
                    <br /><br />
                    The primary objective of Napital is to develop and implement the Natural Capital Project (NCP), an innovative solution that integrates environmental sustainability, social responsibility, and financial value creation in Hong Kong and the Eastern Southern Asia region. The NCP is designed to assist organizations in identifying, measuring, and managing potential natural capital assets and impacts, demonstrating strong capability in Public-Private Partnership coordination and management.
                    <br /><br />
                    In order to finance and capitalize the exploration of the NCP, Napital has actively engaged with banks and investment counterparts. The company is seeking strategic partnerships and investment opportunities to secure the necessary funding for the project. Additionally, Napital is exploring collaborations with financial institutions to develop innovative financing models that support sustainable initiatives in the region.
                    <br /><br />
                    Napital is committed to collaborating with various stakeholders, including businesses, government agencies, non-profit organizations, and academia, to drive positive change in the field of sustainability and ESG in Hong Kong and the Eastern Southern Asia region. By offering comprehensive and circulated consulting services, data analytics, and technological solutions, Napital aims to help its counterparts in different sectors achieve their sustainability goals while enhancing their financial performance.
                    <br /><br />
                    With its headquarters in Hong Kong, Napital is strategically positioned to serve as a hub for sustainable business practices in Asia. The company envisions expanding its operations across the region and becoming a trustworthy and intelligent provider of natural capital solutions, contributing to the transition towards a more sustainable and resilient future.
                </p>
            </Col>
            <Col lg={6} className="about-pic">
                <Image src={pic} className='w-100'/>
            </Col>
        </Row>

    </Container>
)


