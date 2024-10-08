import React from 'react';
import { Navbar, Nav, Container, ButtonToolbar ,Button } from 'react-bootstrap';
import './style.scss';
import logo from './navbarlogo.png';
import { Image } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const UserNavbar = () => {
    const navigate = useNavigate();
    const aboutlocation = useLocation();
    const scrollToContact = () => {
        navigate('/about');
        setTimeout(() => {
          const contactSection = document.getElementById('about-contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      };
      const isAboutPage = aboutlocation.pathname === '/about';
    return (
        <Navbar expand="lg" id="navbar">
            <Container>
                <Navbar.Brand href="/"><Image src={logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/project">Project</Nav.Link>
                        <Nav.Link href="/datapanels">Data Panels</Nav.Link>
                        {/* <Nav.Link href="subscription">Subscription</Nav.Link> */}
                        <Nav.Link href="/news">News</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <ButtonToolbar>
                    {!isAboutPage && (
                        <Button className="my-btn btn border-0 fw-bold px-3" onClick={scrollToContact}>CONTACT US</Button>
                    )}
                        </ButtonToolbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default UserNavbar
