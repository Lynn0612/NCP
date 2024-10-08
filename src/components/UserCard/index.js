import React, { useEffect, useState } from 'react';
import "./style.scss"
import { Button, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getNews } from '@rsrc/api';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import icon from './newslisticon.png';


const UserCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getNews().then(json => {
            setData(json.data);
        })
    }, []);
    const limitedData = data.slice(0, 3);
    return (
        <div className="desk-margin" id="home-card">
            <div className="d-flex justify-content-between">
                <span className="fw-bold titlefs m-0">News and Updates</span>
                <div className="d-flex align-items-end my-2 card-color">
                    <span className="morenews">More News</span>
                    <div className="circle-bg">
                        <i className="bi bi-arrow-right">
                        </i>
                    </div>
                </div>
            </div>
            <hr className="hr hr-margin"></hr>
            <div className="d-none d-md-flex justify-content-around">
                {limitedData.map((item, index) => (
                    <Card className="shadow border-0" style={{ width: "410.67px" }} key={index}>
                        <Card.Img variant="top" src={item.cover_url} />
                        <Card.Body className="rounded card-body">
                            <div>
                                <Card.Title>{item.title}</Card.Title>
                                <div className="moment-span">
                                    <i className="bi bi-clock news-clock"></i>
                                    <span>{moment(item.posted_at).format('MM-DD-YYYY')}</span>
                                    <Image src={icon} className="news-icon" />
                                    <span>{item.category}</span>
                                </div>
                                <Card.Text className="text-truncate-multiline card-text">
                                    {item.summary}
                                </Card.Text>
                                <div className="button-wrapper">
                                    <Link to={`/news/${item.slug}`} className="text-decoration-none btn-link">
                                        <Button className="my-btn btn border-0 fw-bold px-3 my-4 w-100 d-flex justify-content-center align-items-center">READ MORE</Button>
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <div className="carousel-container">
                <Carousel className="d-md-none" controls={false} indicators={true} interval={null}>
                    {limitedData.map((item, index) => (
                        <Carousel.Item key={index}>
                            <Card className="shadow border-0" style={{ width: '330px' }} key={index}>
                                <Card.Img variant="top" src={item.cover_url} />
                                <Card.Body className="rounded card-body">
                                    <div>
                                        <Card.Title>{item.title}</Card.Title>
                                        <div className="moment-span">
                                            <i className="bi bi-clock news-clock"></i>
                                            <span>{moment(item.posted_at).format('MM-DD-YYYY')}</span>
                                            <Image src={icon} className="news-icon" />
                                            <span>{item.category}</span>
                                        </div>
                                        <Card.Text className="text-truncate-multiline card-text">
                                            {item.summary}
                                        </Card.Text>
                                        <div className="button-wrapper">
                                            <Link to={`/news/${item.slug}`} className="text-decoration-none btn-link">
                                                <Button className="my-btn btn border-0 fw-bold px-3 my-4 w-100 d-flex justify-content-center align-items-center">READ MORE</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
export default UserCard