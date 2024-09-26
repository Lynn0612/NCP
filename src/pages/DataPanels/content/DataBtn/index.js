import "./style.scss";
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import React, { useState } from 'react';

export const DataBtn = ({ onArticleChange }) => {
    const [ddTitle, setDdTitle] = useState('Summary of Current Projects');
    const [activeLink, setActiveLink] = useState('Summary of Current Projects'); 

    const handleSelect = (eventKey) => {
        setDdTitle(eventKey);
        setActiveLink(eventKey);
        onArticleChange(eventKey);
    };

    const handleLinkClick = (articleTitle) => () => {
        setActiveLink(articleTitle); 
        onArticleChange(articleTitle);
    };

    return (
        <div id="DataBtn" >
            <div className="d-none d-lg-flex flex-column">
                <div>
                    <h2>Data Panels</h2>
                </div>
                <div className="title">
                    <p className={`btn-name ${activeLink === 'Summary of Current Projects' ? 'selected' : ''}`} onClick={handleLinkClick('Summary of Current Projects')}>
                        Summary of Current Projects
                    </p>
                    <hr></hr>
                </div>
                <div className="title">
                    <p  className={`btn-name ${activeLink === 'Fair Carbon Project' ? 'selected' : ''}`} onClick={handleLinkClick('Fair Carbon Project')}>
                        Fair Carbon Project
                    </p>
                    <hr></hr>
                </div>
                <div className="title">
                    <p className={`btn-name ${activeLink === 'Untangling the Net of ‘Bycatch’ in Commercial Shark Fisheries' ? 'selected' : ''}`} onClick={handleLinkClick('Untangling the Net of ‘Bycatch’ in Commercial Shark Fisheries')}>
                        Untangling the Net of ‘Bycatch’ in Commercial Shark Fisheries
                    </p>
                    <hr></hr>
                </div>
                <div className="title">
                    <p className={`btn-name ${activeLink === 'Plastic Free Campus and Carbon-Free Campus' ? 'selected' : ''}`} onClick={handleLinkClick('Plastic Free Campus and Carbon-Free Campus')}>
                        Plastic Free Campus and Carbon-Free Campus
                    </p>
                    <hr></hr>
                </div>
                <div className="title">
                    <p className={`btn-name ${activeLink === 'Partners' ? 'selected' : ''}`} onClick={handleLinkClick('Partners')}>
                        Partners
                    </p>
                    <hr></hr>
                </div>
            </div>

            {/* mobile */}
            <Container className="d-flex d-lg-none flex-column">
                <DropdownButton
                    title={ddTitle}
                    onSelect={handleSelect}
                    className="news-btn"
                >
                    <Dropdown.Item eventKey="Summary of Current Projects">Summary of Current Projects</Dropdown.Item>
                    <Dropdown.Item eventKey="Fair Carbon Project">Fair Carbon Project</Dropdown.Item>
                    <Dropdown.Item eventKey="Untangling the Net of ‘Bycatch’ in Commercial Shark Fisheries">Untangling the Net of ‘Bycatch’ in Commercial Shark Fisheries</Dropdown.Item>
                    <Dropdown.Item eventKey="Plastic Free Campus and Carbon-Free Campus">Plastic Free Campus and Carbon-Free Campus</Dropdown.Item>
                    <Dropdown.Item eventKey="Partners">Partners</Dropdown.Item>
                </DropdownButton>
            </Container>
        </div>
    );
};