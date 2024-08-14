import React, { useEffect, useState } from 'react';
import { getFaqs } from '@rsrc/api';
import "./style.scss"

const Faq = () => {
    const data = [
        {
            question: 'How does the card work?',
            answer: 'This is the answer to "How does the card work?"'
        },
        {
            question: 'Where is the card available?',
            answer: 'This is the answer to "Where is the card available?"'
        },
        {
            question: 'What is the difference between plastic and virtual cards?',
            answer: 'This is the answer to "What is the difference between plastic and virtual cards?"'
        },
        {
            question: 'How many days will it take to issue my card?',
            answer: 'This is the answer to "How many days will it take to issue my card?"'
        },
        {
            question: 'Are there any fees?',
            answer: 'This is the answer to "Are there any fees?"'
        }
    ];
    return (
        <div className="faq">
            <div>
                <p className="fw-bold fs-1 m-0">FAQ</p>
                <span className="py-2 d-flex justify-content-between align-items-center">Frequently Asked Questions
                    <span className="d-flex justify-content-between"> More Resources <div className="circle-bg"><i className="bi bi-arrow-right"></i></div></span>
                </span>
            </div>
            <hr className="hr my-2"></hr>
            <ul className="list-group list-group-flush">
                {data.map((item, index) => (
                    <li className="list-group-item py-4" key={index}>
                        <div
                            className="d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse"
                            href={`#collapse${index}`}
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            {item.question}
                            <div className="circle">
                                <i className="bi bi-plus"></i>
                            </div>
                        </div>
                        <div className="collapse mt-2" id={`collapse${index}`}>
                            <div className="p-3">
                                {item.answer}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <hr className="hr-last m-0"></hr>
        </div>
    )
}
export default Faq

