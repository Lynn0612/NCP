import React, { useEffect, useState } from 'react';
import { getFaqs } from '@rsrc/api';
import "./style.scss"
import { Container } from 'react-bootstrap';
import  Faq  from 'src/components/Faq';

const FaqPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getFaqs().then(json => {
            setData(json.data);
        })
    }, []);
    return (
        
        <Container id="faqpage">
            <Faq/>
        </Container>
    )
}
export default FaqPage