import React, { useEffect }  from "react";
import "./style.scss";
import Image from 'react-bootstrap/Image';
import pagenotfoundimg from './bg404.png';
import pagenotfound404 from './404.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PageNotFound = () => {
    useEffect(() => {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.style.marginTop = '0';
      }
  
      return () => {
        if (footer) {
          footer.style.marginTop = '120px';
        }
      };
    }, []);

    return (
        <div id="pagenotfound" className="page-not-found">
            <Image src={pagenotfoundimg} className="w-100 pnfimg"/>
                <div className="pnf">
                    <Image src={pagenotfound404} className="pnf-img w-100" />
                    <div className="pnf-content">
                        <p className="pnf-title">Page Not Found</p>
                        <p className="pnf-p">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    </div>
                    <div >
                        <Link to="/" className="text-decoration-none btn-link">
                            <Button className="my-btn btn border-0 fw-bold px-3 my-4 w-100 d-flex justify-content-center align-items-center">
                                Home Page
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default PageNotFound;