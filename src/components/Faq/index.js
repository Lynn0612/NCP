import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Faq = () => {
    return (
        <div className="faq">
            <div>
                <p class="fw-bold fs-1 m-0">FAQ</p>
                <span class="py-2 d-flex justify-content-between align-items-center">Frequently Asked Questions
                    <span class="d-flex justify-content-between"> More Resources <div className="circleBg"><i class="bi bi-arrow-right"></i></div></span>
                </span>
            </div>
            <hr class="hr my-2"></hr>

            <ul class="list-group list-group-flush">
                <li class="list-group-item py-4">
                    <div
                        class="d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#collapse1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        How does the card work?
                        <div className="circle">
                            <i class="bi bi-plus"></i>
                        </div>
                    </div>
                    <div class="collapse mt-2" id="collapse1">
                        <div class="p-3">
                            Frequently Asked Questions
                        </div>
                    </div>
                </li>

                <li class="list-group-item py-4">
                    <div
                        class="d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#collapse2"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Where is the card avaliable?
                        <div className="circle">
                            <i class="bi bi-plus"></i>
                        </div>
                    </div>
                    <div class="collapse mt-2" id="collapse2">
                        <div class="p-3">
                            Frequently Asked Questions
                        </div>
                    </div>
                </li>

                <li class="list-group-item py-4">
                    <div
                        class="d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#collapse3"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        What is the difference betwee plastic and virtual cards?
                        <div className="circle">
                            <i class="bi bi-plus"></i>
                        </div>
                    </div>
                    <div class="collapse mt-2" id="collapse3">
                        <div class="p-3">
                            Frequently Asked Questions
                        </div>
                    </div>
                </li>

                <li class="list-group-item py-4">
                    <div
                        class="d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#collapse4"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        How many days will it take to issue my card?
                        <div className="circle">
                            <i class="bi bi-plus"></i>
                        </div>
                    </div>
                    <div class="collapse mt-2" id="collapse4">
                        <div class="p-3">
                            Frequently Asked Questions
                        </div>
                    </div>
                </li>

                <li class="list-group-item py-4">
                    <div
                        class="d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#collapse5"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Are there any fees?
                        <div className="circle">
                            <i class="bi bi-plus"></i>
                        </div>
                    </div>
                    <div class="collapse mt-2" id="collapse5">
                        <div class="p-3">
                            Frequently Asked Questions
                        </div>
                    </div>
                </li>
                <li class="list-group-item py-4"></li>
            </ul>
        </div>
    )
}
export default Faq

