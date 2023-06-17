import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row footerdiv">
                    <div className="col-md-6 footerDiv1">
                        <div className="row">
                            <div className="col-md-4">
                              <p><b>Products</b></p>
                              <p>Features</p>
                              <p>Enterprice</p>
                              <p>Innovation</p>
                              <p>Offline</p>
                            </div>
                            <div className="col-md-4">
                              <p><b>Company</b></p>
                              <p>About</p>
                              <p>Our Story</p>
                              <p>Careers</p>
                            </div>
                            <div className="col-md-4">
                              <p><b>Support</b></p>
                              <p>Documentation</p>
                              <p>Community</p>
                              <p>Contact</p>
                              <p>FAQ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-start footerdiv2">
                       <div className="fotter2Content">
                        <p>
                            <img src="https://i.ibb.co/jwyM3zQ/Logo-1.png" alt="logo" />
                        </p>
                        <h4>Tristique senectus et netus et malesuada fames</h4>
                        <p><small>©2023 Logoipsum. All rights reserved</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;