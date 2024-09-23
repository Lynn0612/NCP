import React, { useState } from 'react';
import "./style.scss";
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import card from './subscriptioncard.png';

export const SubscriptionCard = () => {

    const subscriptionPlans = [
        {
            name: 'Subscription plan name 1',
            price: 'NT$1,800',
            connotation: ['Tentative', 'Tentative', 'Tentative', 'Tentative'],
            description: 'Simple explanation, Simple explanation, Simple explanation, Simple explanation, Simple explanation, Simple explanation.',
            imgSrc: card,
            implementationDate: 'Expected to be implemented in October 2024',
            link: '/#/subscribe1',
        },
        {
            name: 'Subscription plan name 2',
            price: 'NT$2,400',
            connotation: ['Tentative', 'Tentative', 'Tentative', 'Tentative'],
            description: 'Simple explanation, Simple explanation, Simple explanation, Simple explanation, Simple explanation, Simple explanation.',
            imgSrc: card,
            implementationDate: 'Expected to be implemented in October 2024',
            link: '/#/',
        },
        {
            name: 'Subscription plan name 3',
            price: 'NT$3,600',
            connotation: ['Tentative', 'Tentative', 'Tentative', 'Tentative'],
            description: 'Simple explanation, Simple explanation, Simple explanation, Simple explanation, Simple explanation, Simple explanation.',
            imgSrc: card,
            implementationDate: 'Expected to be implemented in October 2024',
            link: '/#/',
        }
    ];
    
    const limitedData = subscriptionPlans.slice(0, 3);

    return (
        <div id="subscriptioncard">
            <Container>
                <div className="d-none d-md-flex justify-content-around">
                    {limitedData.map((plan, index) => (
                        <Card className="border-0 subscriptioncard" style={{ width: "336px" }} key={index}>
                            <Card.Img variant="top" className="rounded-0" src={plan.imgSrc} />
                            <Card.Body className="p-0 card-body">
                                <div className="cardspace">
                                    <Card.Title>
                                        <h5>{plan.name}</h5>
                                        <h2>{plan.price}</h2>
                                        <span>Already subscribed 20 times</span>
                                    </Card.Title>
                                    <Card.Text>
                                        <p>connotation：</p>
                                        <ul>
                                            {plan.connotation.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <hr />
                                        <p>{plan.description}</p>
                                    </Card.Text>
                                    <div>
                                        <Link to={plan.link} className="text-decoration-none">
                                            <Button className="my-btn btn border-0 fw-bold px-3 w-100 d-flex justify-content-center align-items-center">
                                                Subscription
                                            </Button>
                                        </Link>
                                    </div>
                                    <hr />
                                    <p className="card-p text-center">{plan.implementationDate}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
            <div className="carousel-container">
            <Carousel className="d-md-none" controls={false} indicators={true} interval={null}>
                {subscriptionPlans.map((plan, index) => (
                    <Carousel.Item key={index}>
                        <Card className="border-0 subscriptioncard " style={{ width: '290px' }} key={index}>
                            <Card.Img variant="top" className="rounded-0" src={plan.imgSrc} />
                            <Card.Body className="p-0 rounded card-body">
                                <div className="cardspace">
                                    <Card.Title>
                                        <h5>{plan.name}</h5>
                                        <h2>{plan.price}</h2>
                                        <span>Already subscribed 20 times</span>
                                    </Card.Title>
                                    <Card.Text>
                                        <p>connotation：</p>
                                        <ul>
                                            {plan.connotation.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <hr />
                                        <p>{plan.description}</p>
                                    </Card.Text>
                                    <div>
                                        <Link to={plan.link} className="text-decoration-none">
                                            <Button className="my-btn btn border-0 fw-bold px-3 w-100 d-flex justify-content-center align-items-center">
                                                Subscription
                                            </Button>
                                        </Link>
                                    </div>
                                    <hr />
                                    <p className="card-p text-center">{plan.implementationDate}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
        </div>
    );
};
