import "./style.scss";
import { Container, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { getCategories } from '@rsrc/api';

export const NewsBtn = ({ setSelectedCategoryId, selectedCategoryId }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getCategories().then(json => {
            setData(json.data);
        });
    }, []);
    const CategoryClick = (id) => {
        setSelectedCategoryId(id);
    };
    const showAllNews = () => {
        setSelectedCategoryId(null);
    };
    const getCategoryTitle = (categoryId) => {
        const category = data.find(item => item.id === categoryId);
        return category ? category.title : 'All News';
    };
    const dropdownTitle = selectedCategoryId ? getCategoryTitle(selectedCategoryId) : 'All News';
    return (
        <Container id="news-btn" className="d-flex flex-column flex-sm-row">
            <Button className={`news-btn mx-3 ${selectedCategoryId === null ? 'selected' : ''} d-none d-sm-block`}
                onClick={showAllNews}>All News</Button>
            <DropdownButton className="d-block d-sm-none news-btn" title={dropdownTitle}>
                <Dropdown.Item
                    onClick={showAllNews}
                    active={selectedCategoryId === null}>All News
                </Dropdown.Item>
                {data.map((item) => (
                    <Dropdown.Item
                        key={item.id}
                        onClick={() => CategoryClick(item.id)}
                        active={selectedCategoryId === item.id}>{item.title}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
            <div className="d-none d-sm-flex">
                {data.map((item) => (
                    <Button
                        key={item.id}
                        className={`news-btn mx-3 ${selectedCategoryId === item.id ? 'selected' : ''}`}
                        onClick={() => CategoryClick(item.id)}>{item.title}
                    </Button>
                ))}
            </div>
        </Container>
    );
};
