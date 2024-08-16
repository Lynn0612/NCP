import React, { useEffect, useState } from 'react';
import "./style.scss"

const Navbar = () => {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"> <img src="./logo.svg" alt="Logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-3">
                                <a className="text-white nav-link" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <a
                                    className="nav-link dropdown-toggle text-white "
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Products
                                </a>
                                <ul className="dropdown-menu border-0">
                                    <li><a className="dropdown-item text-white" href="#">1</a></li>
                                    <li><a className="dropdown-item text-white" href="#">2</a></li>
                                    <li><a className="dropdown-item text-white" href="#">3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white nav-link" href="#">Data Panels</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white nav-link" href="#">Subscription</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white nav-link" href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn border-0 fw-bold px-3">Contact Us</button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
