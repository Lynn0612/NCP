import React, { useState } from 'react';
import "./style.scss";
import { Container, Row, Col, Button, Modal, Image } from 'react-bootstrap';
import projectcard from './projectcard.jpg';

const ModalWindow = () => {
    const [showModal, setShowModal] = useState(null);

    const modalwindowData = [...Array(7)].map((_, index) => ({
        id: index + 1,
        title: "Bird of Paradise",
        subtitle: "New Guinea communities often use bird-of-paradise feathers in clothing and rituals",
        content: "Bird-of-paradise is a bird of the order Paradisaeidae, also known as bird of paradise and wind bird. They are found in eastern Indonesia, the Torres Strait Islands, Papua New Guinea and eastern Australia. The male bird is most famous for its feathers, especially the long and delicate feathers extending from the beak, wings and head. The smallest among the birds of paradise is the King Bird of Paradise, which weighs about 50 grams and is about 15 centimeters long; the longest is the black sickle-billed bird of paradise, which is about 110 centimeters long; and the heaviest is the Curled-crested Puffbird, which weighs about 430 grams.",
        image: projectcard
    }));

    const handleClose = () => setShowModal(null);
    const handleShow = (id) => setShowModal(id);

    return (
        <Container id='modalwindow'>
            <Row className='modalmargin'>
                {modalwindowData.map((item, index) => (
                    <Col md={3} xs={6} sm={4} className='position-relative mb-4' key={index}>
                        <div className='image-container'>
                            <Image src={item.image} className='shadowed-image' />
                            <div className='image-overlay'>
                                <div className='overlay-text'>
                                    <h4 className='fw-bold m-0 text-center'>{item.title}</h4>
                                    <p className='modal-py m-0'>{item.subtitle}</p>
                                </div>
                                <Button className='btn' onClick={() => handleShow(item.id)}>
                                    <div className="circle-bg">
                                        <i className="bi bi-arrow-right">
                                        </i>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <Modal className="modalwindow" show={showModal === item.id} onHide={handleClose} ClassName="modal-dialog">
                            <Button className='btntop' onClick={handleClose}>
                                <div><i class="bi bi-x-circle"></i></div>
                            </Button>
                            <Modal.Body>
                                <Row>
                                    <Col lg={4} md={4}>
                                        <div className='image-container'>
                                            <Image src={item.image} className='shadowed-image w-100' />
                                            <div className='image-overlay'></div>
                                            <div className='overlay-text'>
                                                <h4 className='fw-bold m-0 text-center'>{item.title}</h4>
                                                <p className='modal-py m-0'>{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={8} className='content'>
                                        <p>{item.content}</p>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className='btndown' onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ModalWindow;