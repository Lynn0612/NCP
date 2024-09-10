import React, { useEffect, useState } from 'react';
import "./style.scss";
import { useParams } from 'react-router-dom';
import { getNewsContent } from '@rsrc/api';
import { NewsBanner } from "../banner";
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import UserCard from 'src/components/UserCard';


const NewsArticle = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        if (slug) {
            getNewsContent(slug).then(response => {
                setArticle(response.data);
            }).catch(error => {
                console.error("Failed to fetch article content:", error);
            });
        }
    }, [slug]);

    if (!article) return null;

    return (
        <>
            <NewsBanner
                newsbanner={article.cover_url}
                title={article.title}
                description={article.description}
            />
            <Breadcrumb  fluid>
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
                    <Col md={8} className="p-0">
                        <h1>{article.title}</h1>
                        <div className="news-margin news-padding" dangerouslySetInnerHTML={{ __html: article.content }} />
                    </Col>
                </Row>
                <UserCard/>
            </Container>
        </>
    );
};

export default NewsArticle;
