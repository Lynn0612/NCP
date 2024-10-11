import React from 'react';
import { Navbar, Nav, Container, ButtonToolbar ,Button } from 'react-bootstrap';
import './style.scss';
import logo from './navbarlogo.png';
import { Image } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const UserNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const scrollToContact = () => {
        navigate('/about');
        setTimeout(() => {
          const contactSection = document.getElementById('about-contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      };
      const isAboutPage = location.pathname === '/about';
    return (
        <Navbar expand="lg" id="navbar">
            <Container>
                <Navbar.Brand href="/"><Image src={logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Nav.Link>
                        <Nav.Link href="/project" className={location.pathname === '/project' ? 'active' : ''}>Project</Nav.Link>
                        <Nav.Link href="/datapanels" className={location.pathname === '/datapanels' ? 'active' : ''}>Data Panels</Nav.Link>
                        <Nav.Link href="/news" className={location.pathname === '/news' ? 'active' : ''}>News</Nav.Link>
                        <Nav.Link href="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Nav.Link>
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
