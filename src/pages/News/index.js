import React from "react"
import "./style.scss"
import { Container } from 'react-bootstrap';
import { NewsList } from "./NewsContent";
import { NewsBtn } from "./NewsContent";

const News = () => (
    <>    
        <Container>
        <NewsBtn/>
        <NewsList/>
        </Container>   
    </>)
export default News

