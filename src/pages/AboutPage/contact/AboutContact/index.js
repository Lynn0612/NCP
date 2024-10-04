import React, { useState, useEffect, useRef } from 'react';
import "./style.scss"
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import usbanner from './US-banner.png';
import { getCaptcha, postContact } from '@rsrc/api';
import { useNavigate } from 'react-router-dom';

export const AboutContact = () => {
    const [captchaSrc, setCaptchaSrc] = useState('');
    const [captchaKey, setCaptchaKey] = useState('');
    const [captchaError, setCaptchaError] = useState(false);
    const navigate = useNavigate();
    const formRef = useRef(null);

    useEffect(() => {
        const fetchCaptcha = async () => {
            try {
                const data = await getCaptcha();
                setCaptchaSrc(data.img);
                setCaptchaKey(data.key);
            } catch (error) {
                console.error('Error fetching captcha:', error);
            }
        };

        fetchCaptcha();
    }, []);

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
        setIsTouched(prevTouched => ({
            ...prevTouched,
            [name]: true
        }));
        if (name === 'code') {
            setCaptchaError(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = isFormValid();
        if (!isValid) {
            return;
        }

        const contactData = {
            name: formValues.name,
            email: formValues.email,
            mobile: formValues.number,
            company: formValues.company,
            job_title: formValues.job,
            description: formValues.feedback,
            key: captchaKey,
            captcha: formValues.code
        };

        try {
            const response = await postContact(contactData);
            if (response.success) {
                setCaptchaError(false);
                setFormValues(prevValues => ({
                    ...prevValues,
                    code: ''
                }));
                navigate('/submitted', { state: { scroll: true } });
                window.scrollTo(0, 0);
            } else {
                setCaptchaError(true);
                setFormValues(prevValues => ({
                    ...prevValues,
                    code: ''
                }));
                handleRefreshCaptcha();
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
        }
    };

    const isFormValid = () => {
        const allTouched = Object.values(isTouched).every(touched => touched);
        const allValid = Object.entries(formValues).every(([key, value]) => {
            if (!value) return false;
            return getValidationRules(key, value);
        });
        return allTouched && allValid;
    };

    const handleBlur = ({ target: { name } }) => {
        setIsTouched(prevTouched => ({ ...prevTouched, [name]: true }));
    };

    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isNumberValid = (number) => /^\d+$/.test(number);

    const getValidationRules = (name, value) => {
        const type = formRef.current.elements[name]?.type;

        switch (type) {
            case 'text':
            case 'textarea':
                return value.trim() !== '';
            case 'email':
                return isEmailValid(value);
            case 'tel':
                return isNumberValid(value);
            case 'checkbox':
                return value;
            default:
                return true;
        }
    };

    const handleRefreshCaptcha = async () => {
        try {
            const data = await getCaptcha();
            setCaptchaSrc(data.img);
            setCaptchaKey(data.key);
        } catch (error) {
            console.error('Error refreshing captcha:', error);
        }
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
                    <Form onSubmit={handleSubmit} ref={formRef}>
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
                            {isTouched.email && !formValues.email && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                            {isTouched.email && formValues.email && !isEmailValid(formValues.email) && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * this is wrong
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
                            {isTouched.number && !formValues.number && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                            {isTouched.number && formValues.number && !isNumberValid(formValues.number) && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * this is wrong
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
                                    <Image
                                        src={captchaSrc}
                                        className="verification-image"
                                        onClick={handleRefreshCaptcha}
                                    />
                                    <i className="bi bi-arrow-clockwise ms-2 rotate" onClick={handleRefreshCaptcha}></i>
                                </div>
                            </div>
                            {isTouched.code && !formValues.code && !captchaError && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * is required
                                </Form.Text>
                            )}
                            {isTouched.code && captchaError && (
                                <Form.Text style={{ color: 'var(--ncp-state-error)', fontSize: '12px' }}>
                                    * this is wrong
                                </Form.Text>
                            )}
                        </Form.Group>
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
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};