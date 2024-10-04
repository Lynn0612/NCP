import React, { useEffect, useState } from "react";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import ModalWindow from 'src/components/ModalWindow';
import { getpProjectEcology } from '@rsrc/api';

export const ProjectCard = () => {
    const [modalData, setModalData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getpProjectEcology();
                if (response.success) {
                    setModalData(response.data);
                }
            } catch (error) {
                console.error("Error");
            }
        };
        fetchData();
    }, []);

    return (
        <Container id="ProjectCard" className="project">
            <Row className="content">
                <Col md={12}>
                    <p className="fw-bold title">Ecology - Flora/Fauna</p>
                    <hr className="hr"></hr>
                </Col>
            </Row>
            <ModalWindow modalData={modalData}/>
        </Container>
    );
};