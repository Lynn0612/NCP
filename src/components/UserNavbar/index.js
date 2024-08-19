import React from 'react';
import { Navbar, Nav, Container, Dropdown ,ButtonToolbar ,Button } from 'react-bootstrap';
import './style.scss';

const UserNavbar = () => {
    return (
        <Navbar expand="lg" className="navbar-bg">
            <Container>
                <Navbar.Brand href="/"><img src="./logo.svg" alt="Logo" /></Navbar.Brand>
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
                        <Nav.Link href="/about">Data Panels</Nav.Link>
                        <Nav.Link href="/about">Subscription</Nav.Link>
                        <Nav.Link href="/about">Blog</Nav.Link>
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
