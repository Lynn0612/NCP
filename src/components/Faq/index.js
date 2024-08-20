import React, { useEffect, useState } from 'react';
import { getFaqs } from '@rsrc/api';
import "./style.scss"

const Faq = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getFaqs().then(json => {
            console.log(json.data.length === 0);
            setData(json.data);
        })
    }, []);
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
                            className="d-flex justify-content-between align-items-center faq-question"
                            data-bs-toggle="collapse"
                            href={`#collapse${index}`}
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            {item.question.split('\n').map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            <div className="circle">
                                <i className="bi bi-plus"></i>
                            </div>
                        </div>
                        <div className="collapse mt-2 faq-answer" id={`collapse${index}`}>
                            <div className="p-3">
                                {item.answer.split('\n').map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
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

