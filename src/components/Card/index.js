import React, { useEffect, useState } from 'react';
import "./style.scss"
import { Button, Card } from 'react-bootstrap';
import cardimg from './cardimg.png';
import Table from 'react-bootstrap/Table';

const MyCard = () => {
    return (
        <div className="home-page">
            <div className="d-flex justify-content-between">
                <span className="fw-bold fs-1 m-0">News and Updates</span>
                <div className="d-flex align-items-end my-2 card-color">
                    <span>More Resources</span>
                    <div className="circle-bg">
                        <i className="bi bi-arrow-right">
                        </i>
                    </div>
                </div>
            </div>
            <hr className="hr"></hr>
            <div className="d-flex justify-content-around">
                <Card className="shadow border-0" style={{ width: "410.67px" }}>
                    <Card.Img variant="top" src={cardimg} />
                    <Card.Body className="p-0 rounded">
                        <Table striped className="card-table">
                            <thead>
                                <tr>
                                    <th>07-30-2024 · 7 Min</th>
                                    <th>international News</th>
                                </tr>
                            </thead>
                        </Table>
                        <div className="m-4">
                        <Card.Title className="fw-bold">Reinforcing Our Culture In Valle de Bravo - Cultivo's Global Team Summit</Card.Title>
                        <Card.Text className="text-truncate-multiline m-0">
                            Costa Rica and Ghana agree  landmark deals to supply  forest carbon credits to  LEAF Coalition buyers
                        </Card.Text>
                        <Button className="my-btn btn border-0 fw-bold px-3 my-5 w-100 d-flex justify-content-center align-items-center">READ MORE</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default MyCard
