import React from 'react';
import { Navbar, Nav, Container, Dropdown ,ButtonToolbar ,Button } from 'react-bootstrap';
import './style.scss';
import logo from './logo.svg';
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
                        <Dropdown>
                            <Dropdown.Toggle className="My-dropdown-toggle" variant="" id="dropdown-basic">
                                Products
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="My-dropdown-menu">
                                <Dropdown.Item href="#">1</Dropdown.Item>
                                <Dropdown.Item href="#">2</Dropdown.Item>
                                <Dropdown.Item href="#">3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#">Data Panels</Nav.Link>
                        <Nav.Link href="#">Subscription</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                    </Nav>
                    <ButtonToolbar>
                        <Button bsSize="xsmall" className="My-btn btn border-0 fw-bold px-3">Contact Us</Button>
                    </ButtonToolbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default UserNavbar
