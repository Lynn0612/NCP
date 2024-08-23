import React from "react"
import "./style.scss"
import { AboutBanner } from './banner';
import { AboutArticle } from './article';
import { AboutArticle1 } from './article';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => (
    <>
        <AboutBanner />
        <Container>
        <AboutArticle />
        </Container>
        <AboutArticle1 />
    </>)
export default AboutPage

