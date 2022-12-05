import React from 'react';
import Link from 'next/link'

const Hero = () => {
    return (
        <>
          <div className="container">
           <div className="row hero-sec align-items-center">
            <div className="col-md-6">
                <h1>Start increasing your <span className='main-color spn-sty'>Wealth</span>  with TRADES for free!</h1>
                <p>crybot is a trade automation tool that uses algorithmic trading to carry out trades and generate as much wealth as possible for you even while you sleep.</p>
        <div className="button">
        <Link href="/Dasboard">
              
              <span>Get started</span>
             
              </Link> 
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
