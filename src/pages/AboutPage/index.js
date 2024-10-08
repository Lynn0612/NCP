import React, { useEffect, useState } from "react"
import "./style.scss"
import { AboutBanner } from './banner';
import { AboutArticle } from './article';
import { AboutArticle1 } from './article';
import { AboutContact } from './contact';
import { Container, Row, Col } from 'react-bootstrap';
import ModalWindow from 'src/components/ModalWindow';
import { Partners } from '@/components';
import { getpOurTeam } from '@rsrc/api';

const modalStyle = {
    background: 'linear-gradient(180deg, rgba(0, 101, 107, 0) 23.03%, #00656B 81.05%)',
};

const modalStyle1 = {
    '--modal-content-background': 'var(--ncp-secondary)',
};
const modalStyle2 = {
    width: '300px',
    height: '420px',
};

const modalStyle3 = {
    textAlign: 'center',
};

const AboutPage = () => {
    const [modalData, setModalData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getpOurTeam();
                if (response.success) {
                    setModalData(response.data);
                }
            } catch (error) {
                console.error("Error");
            }
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     const contactSection = document.getElementById('about-contact');
    //     if (contactSection) {
    //         contactSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }, []);

    return (

        <div id="AboutPage">
            <AboutBanner />
            <Container>
                <AboutArticle />
            </Container>
            <AboutArticle1 />
            <Container>
                <Row className="content">
                    <Col md={12} className="p-0">
                        <h2 className="fw-bold title">Our team</h2>
                        <hr className="hr"></hr>
                    </Col>
                    <p>We are a diverse mix of scientists, techies, data geeks, and finance wizards united by our love of nature and our mission to unlock investment into nature at scale.</p>
                </Row>
                <ModalWindow modalData={modalData} modalStyle={modalStyle} modalStyle1={modalStyle1} modalStyle2={modalStyle2}  modalStyle3={modalStyle3} colSizes={{ md: 3, xs: 12 }} page="about"/>
            </Container>
            <Partners />
            <div id="about-contact">
                <AboutContact />
            </div>
        </div>
    );
};

export default AboutPage

