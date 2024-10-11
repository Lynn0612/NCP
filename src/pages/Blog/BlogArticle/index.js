import React, { useEffect, useState } from 'react';
import "./style.scss";
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogContent } from '@rsrc/api';
import { BlogBanner } from '../banner/BlogBanner';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import UserCard from 'src/components/UserCard';

const BlogArticle = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            getBlogContent(slug).then(response => {
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
            <BlogBanner
                blogbanner={article.cover_url}
                title={article.title}
                description={article.description}
            />
            <div className="news-breadcrumb">
                <Breadcrumb fluid>
                    <div className="d-flex news-bread">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <span className="mx-3">{' > '}</span>
                        <Breadcrumb.Item href="/blog">
                            Blog
                        </Breadcrumb.Item>
                        <span className="mx-3">{' > '}</span>
                        <span className="breadcrumb-color">{article.title}</span>
                    </div>
                </Breadcrumb>
            </div>
            <Container id="blogarticle" className="p-0">
                <Row className="news-margin p-0">
                    <Col className="news-margin news-padding">
                        <h1 >{article.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </Col>
                </Row>
                <UserCard />
            </Container>
        </>
    );
};

export default BlogArticle;
