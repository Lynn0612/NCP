import "./style.scss";
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getCategories } from '@rsrc/api';

export const NewsBtn = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getCategories().then(json => {
            setData(json.data);
        });
    }, []);
    return (
        <Container id="news-btn">
            {data.map((item, index) => (
                <Button key={index} className="news-btn d-block">
                    {item.title}
                </Button>
            ))}
        </Container>
    );
};
