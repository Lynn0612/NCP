import "./style.scss";
import { Container, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { getBlogCategories } from '@rsrc/api';

export const BlogBtn = ({ onChange }) => {
    const [data, setData] = useState([]);
    const [cateId, setCateId] = useState(null);

    useEffect(() => {
        getBlogCategories().then(json => {
            setData(json.data);
        });
    }, []);
    const ddTitle = data.find(x => x.id == cateId)?.title;

    const changeHandler = (id) => {
        setCateId(id)
        onChange(id)
    };
    
    return (
        <div id="BlogBtn">

            {/* desktop */}
            <Container className="d-none d-lg-flex flex-column flex-lg-row">
                <Button
                    className={`news-btn mx-3 ${cateId ? '' : 'selected'}`}
                    onClick={() => changeHandler(null)}
                >
                    All News
                </Button>
                {data.map((item) => (
                    <Button
                        key={item.id}
                        className={`news-btn mx-3 ${cateId === item.id ? 'selected' : ''}`}
                        onClick={() => changeHandler(item.id)}>{item.title}
                    </Button>
                ))}
            </Container>

            {/* mobile */}
            <Container className="d-flex d-lg-none flex-column flex-lg-row">
                <DropdownButton className="news-btn" title={ddTitle ? ddTitle : 'All News'}>
                    <Dropdown.Item
                        onClick={() => changeHandler(null)}
                        active={cateId === null}>All News
                    </Dropdown.Item>
                    {data.map((item) => (
                        <Dropdown.Item
                            key={item.id}
                            onClick={() => changeHandler(item.id)}
                            active={cateId === item.id}>{item.title}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </Container>
        </div>
    );
};
