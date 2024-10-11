import React from 'react';
import "./style.scss"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pic2 from './aboutpic2.png';
import pic3 from './aboutpic3.png';
import pic4 from './aboutpic4.png';

export const AboutArticle1 = () => (
    <Container fluid id="about-page">
        <Row className="about-bg about-row">
            <Col md={6} className="desk-pic-margin d-flex justify-content-end align-items-center p-0">
                <Image src={pic2} className="about-pic2"/>
            </Col>
            <Col md={6} className="desk-margin article-col">
                <div>
                    <p className="fw-bold m-0 title-article">bout Natural Capital Project (NCP)</p>
                </div>
                <hr className="hr hr-margin"></hr>
                <p className="about-article m-0">
                    Napital runs Natural Capital Project (NCP), a project that aims to transform and restore the ecological environment of natural habitats, ie. mountain forest, combined woodland, wetland, etc., bringing together the expertise of ecologists, conservation experts, and engineers to rebuild and monitor the interconnected ecological system of the habitat.
                    <br />
                    By improving the overall comprehensiveness and health of habitat ecosystems, this project monitors the growth of biodiversity and capacity building for ecosystem services of the area, creating a baseline and stimulations of the potential performance of the habitat in terms of natural capital.
                    Napital also develops visual scientific innovation tools to promote participation and interaction and organize field education, and cultural and fieldwork activities to achieve sustainability in conservation research and management
                </p>

            </Col>
        </Row>
        <Row className="about-bg">
            <Col md={6} className="desk-margin col-article">
                <div>
                    <p className="fw-bold m-0 title-article">Make conservation visible, valuable, so that be active</p>
                </div>
                <hr className="hr hr-margin"></hr>
                <p className="about-article m-0">
                    Napital believes that conservation can be an active and dynamic process, one that requires careful planning, thoughtful implementation, and constant vigilance. We believe that true conservation must not only protect what already exists but also actively enhance and rejuvenate the natural world through diligent monitoring and transformative enforcement.
                    <br />
                    At the heart of our approach is the conviction that conservation must be as scientifically rigorous as it is spiritually attuned. We seek to uncover the intrinsic value of our natural resources, not solely through the lens of commodity or financial gain, but by recognizing the inherent worth and interconnectedness of all living beings
                </p>
            </Col>
            <Col md={6} className="desk-pic-margin d-flex justify-content-start align-items-center p-0">
                <Image src={pic3} className="pic2-about"/>
            </Col>
        </Row>
        <Row className="about-bg about-row">
            <Col md={6} className="desk-pic-margin d-flex justify-content-end align-items-center p-0 desk-pic-mb">
                <Image src={pic4} className="about-pic2"/>
            </Col>
            <Col md={6} className="desk-margin article-col desk-mb">
                <div>
                    <p className="fw-bold m-0 title-article">The '3-step active approach' of the Natural Capital Building</p>
                </div>
                <hr className="hr hr-margin"></hr>
                <p className="about-article m-0">
                    Napital's mission is to pioneer a new, holistic methodology that bridges the current gaps in biodiversity and ecosystem conservation. By establishing unprecedented levels of transparency and setting quantifiable goals, we aim to empower individuals, communities, and organizations to become active stewards of the natural world .
                    <br />
                    We advocate the '3-step active approach' of the natural capital building, which can pioneer environmental conservation, which is 'restoration, conservation, and management'. This approach aims to not only protect what already exists but also actively enhance and rejuvenate the natural world through diligent monitoring and transformative interventions.
                    <br />
                    We believe that this shift in mindset and will approach unlock new possibilities for harmonious coexistence, where the needs of humanity are aligned with the flourishing of the natural world. Through this transformative journey, we envision a future where conservation is not merely a passive endeavor, but a dynamic and purposeful pursuit that celebrates the sacredness of all life.
                </p>
            </Col>
        </Row>
    </Container>
)