import React from "react";
import "./style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import project01 from "./subscription1.png";
import project02 from "./subscription2.png";

export const SubscriptionContent = () => {
    return (
        <Container fluid id="subscriptioncontent">
            <Row className="subscriptioncontent-row">
                <Col md={6} className="desk-pic-margin d-flex justify-content-end align-items-center p-0">
                    <Image src={project01} className="subscriptioncontent-pic2" />
                </Col>
                <Col md={6} className="desk-margin article-col">
                    <div>
                        <p className="fw-bold m-0 title-article">About Natural Capital Project (NCP)</p>
                    </div>
                    <hr className="hr hr-margin"></hr>
                    <p className="subscriptioncontent-article m-0">
                        Napital runs Natural Capital Project (NCP), a project that aims to transform and restore the ecological environment of natural habitats, ie. mountain forest, combined woodland, wetland, etc., bringing together the expertise of ecologists, conservation experts, and engineers to rebuild and monitor the interconnected ecological system of the habitat.
                        By improving the overall comprehensiveness and health of habitat ecosystems, this project monitors the growth of biodiversity and capacity building for ecosystem services of the area, creating a baseline and stimulations of the potential performance of the habitat in terms of natural capital.
                        Napital also develops visual scientific innovation tools to promote participation and interaction and organize field education, and cultural and fieldwork activities to achieve sustainability in conservation research and management</p>
                </Col>
            </Row>
            <Row className="subscriptioncontent-bg">
                <Col md={6} className="desk-margin col-article desk-mb">
                    <div>
                        <p className="fw-bold m-0 title-article">Make conservation visible, valuable, so that be active</p>
                    </div>
                    <hr className="hr hr-margin"></hr>
                    <p className="subscriptioncontent-article m-0">
                        Napital believes that conservation can be an active and dynamic process, one that requires careful planning, thoughtful implementation, and constant vigilance. We believe that true conservation must not only protect what already exists but also actively enhance and rejuvenate the natural world through diligent monitoring and transformative enforcement.<br /><br />
                        At the heart of our approach is the conviction that conservation must be as scientifically rigorous as it is spiritually attuned. We seek to uncover the intrinsic value of our natural resources, not solely through the lens of commodity or financial gain, but by recognizing the inherent worth and interconnectedness of all living beings.</p>
                </Col>
                <Col md={6} className="desk-pic-margin d-flex justify-content-start align-items-center p-0">
                    <Image src={project02} className="pic2-subscriptioncontent desk-pic-mb" />
                </Col>
            </Row>
        </Container>
    );
};