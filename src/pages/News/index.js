import React, { useState } from "react";
import "./style.scss";
import { Container } from 'react-bootstrap';
import { NewsList } from "./NewsContent";
import { NewsBtn } from "./NewsContent";

const News = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    return (
        <Container>
            <NewsBtn
                setSelectedCategoryId={setSelectedCategoryId}
                selectedCategoryId={selectedCategoryId}
            />
            <NewsList selectedCategoryId={selectedCategoryId} />
        </Container>
    );
};
export default News;