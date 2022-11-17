import React from 'react';

const About = () => {
    return (
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-12 text-end">
                    <img src="assets/img/shape-1.png" className='img-fluid' alt="shape" />
                </div>
            </div>
            <div className="row about-sec mt-5 align-items-center">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <h2>About <span className='main-color spn-sty'>Crybot</span></h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                    <p>less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                    <p>less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className='about-pts'>
                        <h3><span className='main-color spn-sty'>Start Up</span></h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                    </div>
                    <div className='about-pts my-5'>
                        <h3><span className='main-color spn-sty'>On way</span></h3>
                        <p>Point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here </p>
                    </div>
                    <div className='about-pts'>
                        <h3><span className='main-color spn-sty'>Goal</span></h3>
                        <p>evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            </div>  
        </>
    );
}

export default About;
