import React from 'react';

const Contact = () => {
    return (
        <div className='container contactMain'>
            <div className="row">
                <div className="col-md-6">
                    <h4 className='text-start contactTitle'>Nemo enim ipsam quia </h4>
                    <p className='text-start mb-3 contactText'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, <br /> consectetur, adipisci velit, sed qu nemo enim</p>
                
                   <div className="contactDiv1">
                     <p> <i class="far fa-clock text-success"></i> Sed ut perspiciatis unde</p>
                   </div>
                   <div className="contactDiv1">
                    <p><i class="far fa-clock text-success"></i> Omnis iste natus</p>
                   </div>
                   <div className="contactDiv1">
                    <p><i class="far fa-clock text-success"></i> Error sit voluptatem</p>
                   </div>
                   <div className="contactDiv1">
                    <p><i class="far fa-clock text-success"></i> Accusantium doloremque</p>
                   </div>
                   <div className="btnContactDiv">
                    <button className='serviceBtn'>Try Out Now!</button>
                   </div>
                </div>
                <div className="col-md-6 imgDivContact">
                    <img src="https://i.ibb.co/DDDyjs8/Screenshot-112.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;