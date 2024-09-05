import "./style.scss";
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import icon from './newslisticon.png';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { getNewslist, getCategories } from '@rsrc/api';
import moment from 'moment';

export const NewsList = ({ selectedCategoryId }) => {
    const [newsData, setNewsDatalist] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getNewslist().then(json => {
            setNewsDatalist(json.data);
        });
        getCategories().then(json => {
            setCategories(json.data);
        });
    }, []);
    const filteredNews = selectedCategoryId
        ? newsData.filter(newslist => newslist.id === selectedCategoryId)
        : newsData;
    const getCategoryTitle = (categoryId) => {
        const category = categories.find(newscategory => newscategory.id === categoryId);
        return category ? category.title : " ";
    };
    return (
        <Container id="news-list">
        {filteredNews.map((item) => (
            <Row className="desk-margin" key={item.id}>
                <Col lg={6} className="news-pic">
                    <Image src={item.cover_url} className="w-100 news-img" />
                </Col>
                <Col lg={6} className="news-bg">
                    <p className="news-title">{item.title}</p>
                    <div>
                        <i className="bi bi-clock news-clock"></i>
                        <span>{moment(item.posted_at).format('MM-DD-YYYY')}</span>
                        <Image src={icon} className="news-icon" />
                        <span>{getCategoryTitle(item.category_id)}</span>
                    </div>
                    <p className="news-p">{item.summary}</p>
                    <Button className="news-btn ms-auto d-block">read more</Button>
                </Col>
            </Row>
        ))}
    </Container>
    );
};