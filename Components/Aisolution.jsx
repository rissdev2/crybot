import React from "react";

const Aisolution = () => {
  return (
    <>
      <div className="container">
        <div className="row ai-section align-items-center">
          <div className="col-md-1">
            <img
              src="assets/img/shape-5.png"
              className="img-fluid"
              alt="shapes"
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-8 text-center justify-ci=ontent-center">
            <h2>Increasing your money with our developed best <span className="main-color spn-sty">AI Solution</span> </h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industrys standard dummy text ever since the 1500s, when an unknown printer</p>
            <div className="button btn-lst">
			<span>Get started</span>
		</div>
		<svg width="190px" height="60px" viewBox="0 0 180 60" className="border1">
				<polyline points="182,1 182,59 1,59 1,1 182,1" className="bg-line"></polyline>
				<polyline points="182,1 182,59 1,59 1,1 182,1" className="hl-line"></polyline>
			</svg>
          </div>
          <div className="col-md-2">
            <img
              src="assets/img/shape-6.png"
              className="img-fluid"
              alt="shapes"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aisolution;