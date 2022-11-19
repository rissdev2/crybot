import React from 'react';

const Hero = () => {
    return (
        <>
          <div className="container">
           <div className="row hero-sec align-items-center">
            <div className="col-md-6">
                <h1>Start increasing your <span className='main-color spn-sty'>Wealth</span>  with TRADES for free!</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer</p>
        <div className="button">
			<span>Get started</span>
		</div>
		<svg width="190px" height="60px" viewBox="0 0 180 60" className="border1">
				<polyline points="182,1 182,59 1,59 1,1 182,1" className="bg-line"></polyline>
				<polyline points="182,1 182,59 1,59 1,1 182,1" className="hl-line"></polyline>
			</svg>
            </div>
            <div className="col-md-6 text-center">
                <img src="assets/img/Earth.png" className='img-fluid' alt="Earth-image" />
            </div>
            </div> 
          </div>  
        </>
    );
}

export default Hero;
