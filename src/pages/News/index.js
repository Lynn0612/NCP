import React, { useState } from "react";
import "./style.scss";
import { Container } from 'react-bootstrap';
import { NewsList } from "./NewsContent";
import { NewsBtn } from "./NewsContent";
import { NewsBanner } from "./banner";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import newsbannerimg from './banner/NewsBanner/newsbanner.png';

const News = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const newsBtnHandler = (cateId) => {
        setSelectedCategoryId(cateId)
    };
    return (
        <>
            <NewsBanner
                newsbanner={newsbannerimg}
                title="Welcome to the Newsroom"
                description={(
                    <>
                        See our latest news, announcements, blogs, <br />
                        media coverage and stories.
                    </>
                )}
            />
            <Breadcrumb>
                <div className="d-flex news-bread">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <span className="mx-3">{' > '}</span>
                    <Breadcrumb.Item href="/news">
                        News
                    </Breadcrumb.Item>
                </div>
            </Breadcrumb>
            <Container>
                <NewsBtn onChange={newsBtnHandler} />
                <NewsList selectedCategoryId={selectedCategoryId} />
            </Container>
        </>
    );
};
export default News;