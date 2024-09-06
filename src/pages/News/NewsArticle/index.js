import React, { useState, useEffect } from "react";
import "./style.scss";
import { Container, Row, Col, Image, Breadcrumb } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import { getNewsContent } from '@rsrc/api'; 
import { NewsBanner } from "../banner";

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
    return (
        <>
        <NewsBanner />
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/news">News</Breadcrumb.Item>
                <Breadcrumb.Item active>{article.title}</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col md={12}>
                    <h1>{article.title}</h1>           
                    {article.cover_url && (
                        <Image src={article.cover_url} fluid alt={article.title} />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </Col>
            </Row>
        </Container>
        </>
    );
};
export default NewsArticle;
