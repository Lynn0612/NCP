import React from "react"
import "./style.scss"
import { AboutBanner } from './banner';
import { AboutArticle } from './article';
import { AboutArticle1 } from './article';
import { Container, Row, Col } from 'react-bootstrap';
import ModalWindow from 'src/components/ModalWindow';
import about1 from './about1.png';
import about2 from './about2.png';
import about3 from './about3.png';
import { Partners } from '@/components';

const modalData = [
    {
        id: 1,
        title: "Dr. David Gallacher",
        subtitle: "Executive Director, Environmental & Ecological Planning, Environment, Hong Kong, AECOM",
        content: "Dr. David Gallacher is an Ecological Specialist with 23 years professional and academic experience in Asia. His expertise includes environmental: planning, conservation, impact assessment, audit and monitoring; ecological: design, surveys and research; transplantation and faunal re-location projects, nature-based solution and natural capital assessment.</br></br>David has been studying the ecology of Hong Kong and China for three decades. He has accumulated a wealth of experience working as part of interdisciplinary teams to enhance the ecosystem service provision of the projects he works on. Key high-profile projects include developing a biodiversity masterplan for Yunnan Province, designing the world’s first large-scale ecoshoreline at Tung Chung East in Hong Kong, and developing Hong Kong’s first Agricultural Nature Park at Long Valley.</br></br>David is the Executive Committee Secretary of the Hong Kong Institute of Environmental Impact Assessment, and serves on the Ecology & Biodiversity Group Qualification Panel for the Hong Kong Institute of Qualifed Environmental Professionals. He gives lectures, seminars and courses throughout the Asia Pacific Region, and has been a key contributor to successful and award winning AECOM publications, including Brownfield Remediation and Redevelopment, Climate:Design, A Book on Design and Planning for the Age of Climate Change, and the Wetland Restoration Handbook. ",
        image: about1
    },
    {
        id: 2,
        title: "Ashley Welch",
        subtitle: "Senior Consultant, Environment, Singapore, AECOM",
        content: "Ashley Welch has extensive experience working with clientele to deliver nature-based solutions (NBS) at a landscape and urban scale, with a core aim of creating multi-functional habitats that provide for biodiversity and ecosystem service benefits, including climate change resilience. Ash specialises in NBS design and habitat restoration, having gained experience in Europe and Asia. </br></br>Ash utilises and designs biodiversity metrics (e.g., biodiversity net gain) for long-term for the purpose of devising long-term monitoring strategies for developments and to ensure success of habitat restoration and NBS. Ash has recently published a Biodiversity Accounting Metric for Singapore. </br></br>Furthermore, Ash has several years of experience with biodiversity impact assessment, having led several on biodiversity across several EIA projects.",
        image: about2
    },
    {
        id: 3,
        title: "Sherry Hui",
        subtitle: "ESG Specialist, Land Supply / Municipal, Hong Kong, AECOM",
        content: "Sherry Hui is an ESG professional with a background in in-house sustainability practices within corporate settings. Skilled in sustainability communications, corporate affairs and strategy in sustainability-focused, and integrating environmental and social responsibility into business practices.</br></br>Currently with AECOM, specializing in business development, partnerships, project-based sustainability advisory, and conducting sustainability business risk assessments including climate and nature-related risks. Proficient in ESG reporting and dedicated to driving sustainable and responsible business practices.",
        image: about3
    },
];

const modalStyle = {
    background: 'linear-gradient(180deg, rgba(0, 101, 107, 0) 23.03%, #00656B 81.05%)',
};

const modalStyle1 = {
    '--modal-content-background': 'var(--ncp-secondary)',
};
const modalStyle2 = {
    width: '300px',
    height: '420px'
};

const modalStyle3 = {
    textAlign: 'center',
};


const AboutPage = () => (
    <div id="AboutPage">
        <AboutBanner />
        <Container>
        <AboutArticle />
        </Container>
        <AboutArticle1 />
        <Container>
        <Row className="content">
                <Col md={12}>
                    <p className="fw-bold title">Our team</p>
                    <hr className="hr"></hr>
                </Col>
            </Row>
        <ModalWindow modalData={modalData} modalStyle={modalStyle} modalStyle1={modalStyle1} modalStyle2={modalStyle2} modalStyle3={modalStyle3}/>
        </Container>
        <Partners />
    </div>)
export default AboutPage

