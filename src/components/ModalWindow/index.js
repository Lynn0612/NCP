import React, { useState } from 'react';
import "./style.scss";
import { Container, Row, Col, Button, Modal, Image } from 'react-bootstrap';

const ModalWindow = ({ modalData, modalStyle, modalStyle1, modalStyle2, modalStyle3, colSizes }) => {
    const [showModal, setShowModal] = useState(null);
    const handleClose = () => setShowModal(null);
    const handleShow = (id) => setShowModal(id);
    const defaultColSizes = { md: 3, xs: 6, sm: 4 };
    const colConfig = colSizes || defaultColSizes;

    return (
        <Container id='modalwindow'>
            <Row className='modalmargin'>
                {modalData.map((item, index) => (
                    <Col md={colConfig.md} xs={colConfig.xs} sm={colConfig.sm} className='position-relative mb-4' key={index}>
                        <div className='image-container'>
                            <Image src={item.image} className='shadowed-image' style={modalStyle2}/>
                            <div className='image-overlay' style={modalStyle}>
                                <div className='overlay-text'>
                                    <h4 className='fw-bold m-0 text-center'>{item.name}</h4>
                                    <p className='modal-py m-0' style={modalStyle3}>{item.intro}</p>
                                </div>
                                <Button className='btn' onClick={() => handleShow(item.id)}>
                                    <div className="circle-bg">
                                        <i className="bi bi-arrow-right">
                                        </i>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <Modal className="modalwindow" show={showModal === item.id} onHide={handleClose} ClassName="modal-dialog" dialogClassName="custom-modal"
                            style={modalStyle1}>
                            <Button className='btntop' onClick={handleClose}>
                                <div><i class="bi bi-x-circle"></i></div>
                            </Button>
                            <Modal.Body>
                                <Row>
                                    <Col lg={4} md={4}>
                                        <div className='image-container'>
                                            <Image src={item.image} className='shadowed-image w-100' />
                                            <div className='image-overlay'  style={modalStyle}></div>
                                            <div className='overlay-text'>
                                                <h4 className='fw-bold m-0 text-center'>{item.name}</h4>
                                                <p className='modal-py m-0' style={modalStyle3}>{item.intro}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={8} className='content'>
                                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
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