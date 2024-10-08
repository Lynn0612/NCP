import React, { useEffect, useState } from 'react';
import "./style.scss";
import { useParams, useNavigate } from 'react-router-dom';
import { getNewsContent } from '@rsrc/api';
import { NewsBanner } from '../banner/NewsBanner';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import UserCard from 'src/components/UserCard';

const NewsArticle = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            getNewsContent(slug).then(response => {
                if (response.data) {
                    setArticle(response.data);
                } else {
                    navigate('/404');
                }
            });
        }
    }, [slug, navigate]);

    if (!article) return null;

    return (
        <>
            <NewsBanner
                newsbanner={article.cover_url}
                title={article.title}
                description={article.description}
            />
            <Breadcrumb fluid>
                <div className="d-flex news-bread">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <span className="mx-3">{' > '}</span>
                    <Breadcrumb.Item href="/news">
                        News
                    </Breadcrumb.Item>
                    <span className="mx-3">{' > '}</span>
                    <span className="breadcrumb-color">{article.title}</span>
                </div>
            </Breadcrumb>
            <Container id="news-article" className="p-0">
                <Row className="news-margin p-0">
                    <Col className="news-margin news-padding">
                        <h1 >{article.title}</h1>
                        <div className='px-md-5 article-content' dangerouslySetInnerHTML={{ __html: article.content }} />
                    </Col>
                </Row>
                <Container>
                    <UserCard />
                </Container>
            </Container>
        </>
    );
};

export default NewsArticle;
