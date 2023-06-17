import React from 'react';
import './Home.css';
const Apply = () => {
    return (
        <div className='container applyDiv'>
           <div className="row">
            <div className="col-md-8 applyTextDiv">
                <h2 className='applyTitle text-start'>Ullamcorper morbi tincidunt <br />ornare massa eget</h2>
                <p className='applyText text-start ms-2'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
            <div className="col-md-4 applyBtnDiv">
                <button className='serviceBtn'>Apply</button>
            </div>
            </div>
        </div>
    );
};

export default Apply;