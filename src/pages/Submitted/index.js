import React, { useEffect }  from "react";
import "./style.scss";
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { Button } from 'react-bootstrap';

const Submitted = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        if (!location.state || !location.state.scroll) {
            navigate('/about'); 
        }
    }, [location.state, navigate]);

    const Submitted = (page) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        navigate(page);
    };

    return (
        <div id="pagenotfound" className="page-not-found">
            <div className="w-100 pnfimg"></div>
                <div className="pnf">
                    <i class="bi bi-check-circle-fill pnf-img"></i>
                    <div className="pnf-content">
                        <p className="pnf-title">Request submitted!</p>
                        <p className="pnf-p">Thanks for your details.<br/>We'll be in touch.</p>
                    </div>
                    <div>
                        <Link to="/" className="text-decoration-none btn-link">
                            <Button className="my-btn btn border-0 fw-bold" onClick={() => Submitted('/')}>
                            Go to homepage  <i class="bi bi-arrow-right"></i>
                            </Button>
                            <Button className="my-btn-about btn border-0 fw-bold" onClick={() => Submitted('/about')}>
                            Go to About Us  <i class="bi bi-arrow-right"></i>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default Submitted;