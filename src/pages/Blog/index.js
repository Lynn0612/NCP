import React, { useState } from "react";
import "./style.scss";
import { Container } from 'react-bootstrap';
import { BlogList } from "./BlogContent";
import { BlogBtn } from "./BlogContent";
import { BlogBanner } from './banner/BlogBanner';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Blogbannerimg from './banner/BlogBanner/blogbanner.png';

const Blog = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const newsBtnHandler = (cateId) => {
        setSelectedCategoryId(cateId)
    };
    return (
        <>
            <BlogBanner
                blogbanner={Blogbannerimg}
                title="Welcome to the Blogs"
                description={(
                    <>
                        Blogs On Environmental Topics<br />
                        Are You Interested In Environmental Issues?
                    </>
                )}
            />
                <Breadcrumb>
                    <div className="d-flex news-bread">
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <span className="mx-3">{' > '}</span>
                        <span className="breadcrumb-color">Blog</span>
                    </div>
                </Breadcrumb>
            <Container>
                <BlogBtn onChange={newsBtnHandler} />
                <BlogList selectedCategoryId={selectedCategoryId} />
            </Container>
        </>
    );
};
export default Blog;