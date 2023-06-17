import React from 'react';
import './Home.css';

const Banner = () => {
    return (
        <div className='container'>
            <div className="row ">
                <div className="col-md-6 bannerDiv">
                  <h1 className='bannerTxt'>Lore <span>ipsum.</span></h1>
                  <h1 className='bannerTxt'>Dolor <span>sit.</span></h1>
                  <p className='bannerPrimary'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.</p>
                  <div className="btndiv">
                    <button className="bannerbtn1">Viverra orci sagittis</button>
                    <button className="bannerbtn2">Get a demo</button>
                  </div>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/V9YF1dm/Rectangle-341.png" className='imgBanner' alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;