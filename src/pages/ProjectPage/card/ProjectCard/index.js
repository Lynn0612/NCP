import React from "react";
import "./style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import ModalWindow from 'src/components/ModalWindow';
import projectcard from './projectcard.jpg';

const modalData = [
    {
        id: 1,
        title: "Bird of Paradise",
        subtitle: "New Guinea communities often use bird-of-paradise feathers in clothing and rituals",
        content: "Bird-of-paradise is a bird of the order Paradisaeidae, also known as bird of paradise and wind bird. They are found in eastern Indonesia, the Torres Strait Islands, Papua New Guinea and eastern Australia. The male bird is most famous for its feathers, especially the long and delicate feathers extending from the beak, wings and head. The smallest among the birds of paradise is the King Bird of Paradise, which weighs about 50 grams and is about 15 centimeters long; the longest is the black sickle-billed bird of paradise, which is about 110 centimeters long; and the heaviest is the Curled-crested Puffbird, which weighs about 430 grams.",
        image: projectcard
    },
    {
        id: 2,
        title: "Bird of Paradise",
        subtitle: "New Guinea communities often use bird-of-paradise feathers in clothing and rituals",
        content: "Bird-of-paradise is a bird of the order Paradisaeidae, also known as bird of paradise and wind bird. They are found in eastern Indonesia, the Torres Strait Islands, Papua New Guinea and eastern Australia. The male bird is most famous for its feathers, especially the long and delicate feathers extending from the beak, wings and head. The smallest among the birds of paradise is the King Bird of Paradise, which weighs about 50 grams and is about 15 centimeters long; the longest is the black sickle-billed bird of paradise, which is about 110 centimeters long; and the heaviest is the Curled-crested Puffbird, which weighs about 430 grams.",
        image: projectcard
    },
    {
        id: 3,
        title: "Bird of Paradise",
        subtitle: "New Guinea communities often use bird-of-paradise feathers in clothing and rituals",
        content: "Bird-of-paradise is a bird of the order Paradisaeidae, also known as bird of paradise and wind bird. They are found in eastern Indonesia, the Torres Strait Islands, Papua New Guinea and eastern Australia. The male bird is most famous for its feathers, especially the long and delicate feathers extending from the beak, wings and head. The smallest among the birds of paradise is the King Bird of Paradise, which weighs about 50 grams and is about 15 centimeters long; the longest is the black sickle-billed bird of paradise, which is about 110 centimeters long; and the heaviest is the Curled-crested Puffbird, which weighs about 430 grams.",
        image: projectcard
    },
];


export const ProjectCard = () => {
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