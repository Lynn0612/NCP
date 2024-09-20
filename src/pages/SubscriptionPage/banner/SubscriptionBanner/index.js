import React from 'react';
import "./style.scss";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import banner from './subscriptionbanner.png';
import { Button } from 'react-bootstrap';


const SubscriptionBanner = () => {
    
    return (
        <>
<Container fluid id="SubscriptionBanner">
            <Row>
                <Col className="banner-area px-0 position-relative">
                    <Image src={banner} className="banner-cover" />
                    <Col className="banner-text">
                        <h1>‘Unlock the Wealth of<br />Natural Capital’</h1>
                        <Button className="my-btn btn border-0 fw-bold px-5">Subscription project</Button>
                    </Col>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default SubscriptionBanner;
