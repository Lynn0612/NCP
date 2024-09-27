import React, { useState } from 'react';
import "./style.scss"
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import usbanner from './US-banner.png';
import code from './code.png';

export const AboutContact = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        number: '',
        company: '',
        job: '',
        feedback: '',
        code: '',
        checkbox: false
    });

    const [isTouched, setIsTouched] = useState({
        name: false,
        email: false,
        number: false,
        company: false,
        job: false,
        feedback: false,
        code: false,
        checkbox: false
    });

    const handleChange = ({ target: { name, value, checked } }) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: name === 'checkbox' ? checked : value
        }));
    };
    
    const handleBlur = ({ target: { name } }) => {
        setIsTouched(prevTouched => ({ ...prevTouched, [name]: true }));
    };

    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isNumberValid = (number) => /^\d+$/.test(number);

    const isFormValid = () => {
        const { name, email, number, company, job, feedback, code, checkbox } = formValues;
        return (
            name.trim() !== '' &&
            isEmailValid(email) &&
            isNumberValid(number) &&
            company.trim() !== '' &&
            job.trim() !== '' &&
            feedback.trim() !== '' &&
            code.trim() !== '' &&
            checkbox
        );
    };

    return (
        <Container id="AboutContact">
            <Row>
                <Col lg={6} sx={12} className="aboutimg">
                    <div>
                        <Image src={usbanner} className="w-100" />
                    </div>
                </Col>
                <Col lg={6} sx={12} className="aboutinput">
                    <div className="title">
                        <h4>Contact us</h4>
                        <p>Fill out the form below and we’ll schedule the demo session very soon.</p>
                    </div>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Enter your name <span>*</span></Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={isTouched.name && !formValues.name ? 'is-invalid' : ''}
                            />
                            {isTouched.name && !formValues.name && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Work Email <span>*</span></Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={isTouched.email && (!formValues.email || !isEmailValid(formValues.email)) ? 'is-invalid' : ''}
                            />
                            {isTouched.email && (!formValues.email || !isEmailValid(formValues.email)) && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group controlId="number">
                            <Form.Label>Mobile Number <span>*</span></Form.Label>
                            <Form.Control 
                                type="tel" 
                                name="number"
                                value={formValues.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={isTouched.number && (!formValues.number || !isNumberValid(formValues.number)) ? 'is-invalid' : ''}
                            />
                            {isTouched.number && (!formValues.number || !isNumberValid(formValues.number)) && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group controlId="company">
                            <Form.Label>Company Name <span>*</span></Form.Label>
                            <Form.Control 
                                type="text" 
                                name="company"
                                value={formValues.company}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={isTouched.company && !formValues.company ? 'is-invalid' : ''}
                            />
                            {isTouched.company && !formValues.company && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group controlId="job">
                            <Form.Label>Job Title <span>*</span></Form.Label>
                            <Form.Control 
                                type="text" 
                                name="job"
                                value={formValues.job}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={isTouched.job && !formValues.job ? 'is-invalid' : ''}
                            />
                            {isTouched.job && !formValues.job && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group controlId="feedback">
                            <Form.Label>What are you looking to Solve <span>*</span></Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="feedback"
                                value={formValues.feedback}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={isTouched.feedback && !formValues.feedback ? 'is-invalid' : ''}
                            />
                            {isTouched.feedback && !formValues.feedback && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group controlId="code">
                            <Form.Label>Verification code <span>*</span></Form.Label>
                            <div className="d-flex align-items-center flex-column flex-sm-row code">
                                <Form.Control 
                                    type="text" 
                                    name="code"
                                    value={formValues.code}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={isTouched.code && !formValues.code ? 'is-invalid' : 'code-input'} 
                                />
                                <div className="image-container">
                                    <Image src={code} className="verification-image" />
                                    <i className="bi bi-arrow-clockwise ms-2 rotate"></i>
                                </div>
                            </div>
                            {isTouched.code && !formValues.code && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Form>
                    <p>Briefly explain any specific areas of the problem you want us to solve</p>
                    <Form.Group controlId="checkbox">
                        <Form.Check
                            type="checkbox"
                            name="checkbox"
                            checked={formValues.checkbox}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={isTouched.checkbox && !formValues.checkbox ? 'is-invalid' : ''}
                            label={
                                <>
                                    I accept the
                                    <a href="/terms"> Terms and Conditions</a>
                                </>
                            }
                        />
                        {isTouched.checkbox && !formValues.checkbox && (
                            <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                * is required
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100"
                        style={{ backgroundColor: isFormValid() ? 'var(--ncp-primary-1)' : 'var(--ncp-gray-4)', borderColor: isFormValid() ? 'var(--ncp-primary-1)' : 'var(--ncp-gray-4)' }}
                        disabled={!isFormValid()}
                    >
                        SEND DATA<i className="bi bi-arrow-right"></i>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};