import React, { useEffect, useState } from 'react';
import "./style.scss";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import projectcard from './projectcard.jpg';

const ModalWindow = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container id='modalwindow'>
            <Row>
                {[...Array(7)].map((_, index) => (
                    <Col md={3} className='position-relative mb-4' key={index}>
                        <div className='image-container'>
                            <Image src={projectcard} className='shadowed-image' />
                            <div className='image-overlay'>
                                <div className='overlay-text'>
                                    <h4 className='fw-bold m-0 text-center'>Bird of Paradise</h4>
                                    <p className='modal-py m-0'>New Guinea communities often use bird-of-paradise feathers in clothing and rituals</p>
                                </div>
                                <Button className='btn' onClick={handleShow}>
                                    <div className="circle">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ModalWindow;
