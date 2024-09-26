import React, { useState } from "react";
import "./style.scss";
import { Container, Row, Col } from 'react-bootstrap';
import { DataBanner } from './banner/DataBanner';
import { DataBtn } from './content/DataBtn';
import { DataArticle } from './content/DataArticle';
import banner from './banner/DataBanner/datapanels.png';

const DataPanels = () => {
    const [currentArticle, setCurrentArticle] = useState('Summary of Current Projects');

    return (
        <>
            <DataBanner
                databanner={banner}
                title={(
                    <>
                        Introducing Project<br />
                        Catalog & Screenings:
                    </>
                )}
                description={(
                    <>
                        Blogs On Environmental Topics<br />
                        Are You Interested In Environmental Issues?
                    </>
                )}
            />
            <Container id="DataPanels">
                <Row>
                    <Col lg={3} className="p-0">
                    <DataBtn onArticleChange={setCurrentArticle}/>
                    </Col>
                    <Col lg={9} className="p-0">
                    <DataArticle currentArticle={currentArticle} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default DataPanels;