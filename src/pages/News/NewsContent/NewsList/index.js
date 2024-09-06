import "./style.scss";
import { Container, Row, Col, Pagination, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import icon from './newslisticon.png';
import React, { useEffect, useState } from 'react';
import { getNewslist, getCategories } from '@rsrc/api';
import moment from 'moment';
import { Link } from 'react-router-dom';


export const NewsList = ({ selectedCategoryId }) => {
    const [newsData, setNewsData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        getNewslist(currentPage, 10, selectedCategoryId)
            .then(response => {
                setNewsData(response.data);
                setTotalPages(response.pagination.total_page);
            });
    }, [currentPage, selectedCategoryId]);

    useEffect(() => {
        getCategories()
            .then(json => {
                setCategories(json.data);
            });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategoryId]);

    const getCategoryTitle = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.title : " ";
    };

    const PageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container id="news-list">
            {newsData.map(item => (
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
                        <Link to={`/news/article/${item.slug}`} className="text-decoration-none">
                            <Button className="news-btn ms-auto d-block">read more</Button>
                        </Link>
                    </Col>
                </Row>
            ))}
            <div className="pagination-container">
                <Pagination>
                    <Pagination.Prev
                        onClick={() => PageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lsaquo;
                    </Pagination.Prev>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => PageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        onClick={() => PageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &rsaquo;
                    </Pagination.Next>
                </Pagination>
            </div>
        </Container>
    );
};