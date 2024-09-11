import React from 'react';
import './style.scss';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import footerlogo from './footerlogo.png';
import { Nav, Button } from 'react-bootstrap';

const footer = () => {
  return (
    <footer id="footer">
      <Container className="footer-container">
        <Row className="full-width-row">
          <Col lg={4} md={3} xs={12}>
            <Image src={footerlogo} className="footer-logo" />
          </Col>
          <Col lg={2} md={3} xs={6} className="footer-px">
            <Nav.Link href="/about" className="footer-link ">About Us</Nav.Link>
            <Nav.Link href="/Faq" className="footer-link">FAQs</Nav.Link>
            <Nav.Link href="/privacy" className="footer-link">Privacy Policy</Nav.Link>
            <Nav.Link href="/terms" className="footer-link">Terms and conditions</Nav.Link>
          </Col>
          <Col lg={2} md={3} xs={6} className="footer-px">
            <Nav.Link href="#" className="footer-link">Products</Nav.Link>
            <Nav.Link href="#" className="footer-link">Data Panels</Nav.Link>
            <Nav.Link href="#" className="footer-link">ubscription</Nav.Link>
            <Nav.Link href="/news" className="footer-link">News</Nav.Link>
            <Nav.Link href="#" className="footer-link">Blog</Nav.Link>
          </Col>
          <Col lg={4} md={3} xs={12} className="footer-paragraph">
            <p>Sign up for the latest carbon insights from our monthly newsletter and other<br></br>
              occasional updates.</p>
            <p>By clicking subscribe, you agree to the Privacy Policy  </p>
            <Button className="footer-btn my-4 d-flex justify-content-center align-items-center">Contact Us</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex flex-column align-items-end">
            <div className="d-flex justify-content-end mb-2">
              <i className="bi bi-linkedin m-1"></i>
              <i className="bi bi-twitter m-1"></i>
              <i className="bi bi-instagram m-1"></i>
            </div>
            <p className="text-end">© NCP, 2024. All rights reserved.</p>
          </Col>
        </Row>

      </Container>
    </footer>
  )
}
export default footer
