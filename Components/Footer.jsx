import React from 'react';

const Footer = () => {
    return (
        <>
        <section className='foter-sec'>
          <div className="container">
            <div className="row  align-items-center">
                <div className="col-md-4 text-start">
                <a href=""><p>Term and Conditions</p></a>
                </div>
                <div className="col-md-4 text-center">
                    <img src="assets/img/logo.png" alt="" />
                </div>
                <div className="col-md-4 text-end">
                <p>© All Rights Reserved, 2022.</p>
                </div>
            </div>
            </div>  
            </section>
        </>
    );
}

export default Footer;
