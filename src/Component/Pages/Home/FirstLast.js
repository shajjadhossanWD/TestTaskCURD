import React from 'react';

const FirstLast = () => {
    return (
        <div className='container firstLastMain'>
            <div className="row">
                <div className="col-md-6 applyDivfirstlast">
                  <h2 className='applyTitle text-start'>Consectetur <br />adipiscing elit</h2>
                  <p className='applyText text-start'>Convallis a cras semper auc.<br /> Fringilla est ullamcorper <br /> eget nulla facilisi etiam</p>
                </div>
                <div className="col-md-6 lastDivPart2">

                    <div>
                        <div className="firstDiv1">
                            <img className='firstlastImg' src="https://i.ibb.co/mb7zH6z/Screenshot-86-removebg-preview.png" alt="" />
                        </div>
                        <button className='firstlastBtn text-success'>First Touch</button>
                    </div>

                    <div>
                        <div className="lastDiv1">
                        <img className='firstlastImg' src="https://i.ibb.co/pddjSf7/Screenshot-85-removebg-preview.png" alt="" />
                        </div>
                        <button className='firstlastBtn text-warning ms-4'>Last Touch</button>
                    </div>
                   
                    <div className="RoundDiv1">
                        <h1>3</h1>
                        <p>+Custom <br /> ones</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FirstLast;