import React, { useEffect, useState } from 'react';
import { getFaqs } from '@rsrc/api';
import "./style.scss"

const Faq = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getFaqs().then(json => {
            setData(json.data);
        })
    }, []);
    return (
        <div className="faq my-5">
            <div>
                <p className="fw-bold title-fs m-0">FAQ</p>
                <span className="py-2 d-flex justify-content-between align-items-center title-sm-fs">Frequently Asked Questions
                    <span className="d-flex justify-content-between more"> More Resources <div className="circle-bg"><i className="bi bi-arrow-right"></i></div></span>
                </span>
            </div>
            <hr className="hr my-2"></hr>
            <ul className="list-group list-group-flush">
                {data.map((item, index) => (
                    <li className="list-group-item py-4" key={index}>
                        <div
                            className="d-flex justify-content-between align-items-center faq-question"
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
                        <div className="collapse mt-2 faq-answer" id={`collapse${index}`}>
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

