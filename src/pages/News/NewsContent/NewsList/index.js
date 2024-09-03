import "./style.scss"
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import icon from './newslisticon.png';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { getNews } from '@rsrc/api';
import moment from 'moment';

export const NewsList = () => {
    const [data, setData] = useState([]); 
    useEffect(() => {
        getNews().then(json => {
            setData(json.data); 
        })
    }, []);
    return (
    <Container id="news-list">
        {data.map((item, index) => (
        <Row className="desk-margin" key={index}>
            <Col lg={6} className="news-pic">
                <Image src={item.cover_url} className="w-100 news-img" />
            </Col>
            <Col lg={6} className="news-bg">
                <p className="news-title">{item.title}</p>
                <div>
                    <i className="bi bi-clock news-clock"></i>
                    <span>{moment(item.posted_at).format('MM-DD-YYYY')}</span>
                    <Image src={icon} className="news-icon"/>
                    <span>{item.category}</span>
                    </div>
                <p className="news-p">{item.summary}</p>
                <Button className="news-btn ms-auto d-block">read more</Button>
            </Col>
        </Row>
         ))}
    </Container>
 )
}
