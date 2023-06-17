import React from 'react';

const Category = () => {
    return (
        <div className='container categoryDiv'>
          <div className="d-flex align-items-center justify-content-around">
              <div className="Category1">
                <img className='categoryImg' src="https://i.ibb.co/PFjB8jR/Screenshot-89-removebg-preview.png" alt="" />
                <h5 className='cardTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                <p className='cardText'>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
              </div>
              <div className="Category2">
                <img className='categoryImg' src="https://i.ibb.co/JKtRZ7q/Screenshot-90-removebg-preview.png" alt="" />
                <h5 className='cardTitle'>Sed do eiusmod tempor incididunt ut labore </h5>
                <p className='cardText'>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim elit duis tristique solicitudin vel</p>
              </div>
              <div className="Category3">
                <img className='categoryImg' src="https://i.ibb.co/zss8YyC/Screenshot-91-removebg-preview.png" alt="" />
                <h5 className='cardTitle'>Quis autem vel eum iure reprehenderit qui in ea voluptate</h5>
                <p className='cardText'>Look no further for seamless multi-channel attribution. Our process is complete and customizatible, allowing you to view your</p>
              </div>

          </div>
            
        </div>
    );
};

export default Category;