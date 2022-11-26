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
                    <p>Everyone deserves to grow their wealth faster. That is why we created Crybot. we are passionate about the power of automation to save traders time & increase their profits.</p>
                    <p>Our software is designed to help you make money in the markets 24/7. CryBot functions smarter than other bots. Our wealth-generating algorithms, don't just make trades for you all day, also work to boost your bank balance every single day.</p>
                    <p>No need to watch the markets all day long Just set up your Profile and let the bots do the rest.</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className='about-pts'>
                        <h3><span className='main-color spn-sty'>Values</span></h3>
                        <p>Make a trusting relationship with our clients to provide them with the most innovative solutions designed to exceed their trade automation needs. </p>
                    </div>
                    <div className='about-pts my-5'>
                        <h3><span className='main-color spn-sty'>Vision</span></h3>
                        <p>We believe that the future of cryptocurrency trading is automated, and we re here to help make that a reality.</p>
                    </div>
                    <div className='about-pts'>
                        <h3><span className='main-color spn-sty'>Goal</span></h3>
                        <p>To save millions of traders from the usual pains of trade and make it effortless through automation.</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            </div>  
        </>
    );
}

export default About;
