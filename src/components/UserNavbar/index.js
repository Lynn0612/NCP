import React from 'react';
import { Navbar, Nav, Container, Dropdown ,ButtonToolbar ,Button } from 'react-bootstrap';
import './style.scss';
import logo from './navbarlogo.png';
import { Image } from 'react-bootstrap';

const UserNavbar = () => {
    return (
        <Navbar expand="lg" className="navbar-bg">
            <Container>
                <Navbar.Brand href="/"><Image src={logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto navcolor">
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Project</Nav.Link>
                        <Nav.Link href="#">Data Panels</Nav.Link>
                        <Nav.Link href="#">Subscription</Nav.Link>
                        <Nav.Link href="#">News</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                    </Nav>
                    <ButtonToolbar>
                        <Button bsSize="xsmall" className="My-btn btn border-0 fw-bold px-3">CONTACT US</Button>
                    </ButtonToolbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default UserNavbar
