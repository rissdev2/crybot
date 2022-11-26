import React from "react";

const Experience = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5 exp-sec">
          <div className="col-md-6 ">
            <div className="sticky-lg-top">
              <br className="br-hide" />
              <br className="br-hide" />
              <br className="br-hide" />
              <br className="br-hide" />

              <h2>
                Get experienced.{" "}
                <span className="main-color spn-sty">Without risks.</span>
              </h2>
              <p>
              Cut down your trading time and make more money by using crybot.You get the best of both worlds–a safe investment with no risk and spectacular returns.
              </p>
              <div className="mt-5 mt-md-2">
                <div className="button">
                  <span>Get started</span>
                </div>
                <svg
                  width="190px"
                  height="60px"
                  viewBox="0 0 180 60"
                  className="border1"
                >
                  <polyline
                    points="182,1 182,59 1,59 1,1 182,1"
                    className="bg-line"
                  ></polyline>
                  <polyline
                    points="182,1 182,59 1,59 1,1 182,1"
                    className="hl-line"
                  ></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 ">
            <br className="br-hide" />
            <br className="br-hide" />
            <br className="br-hide" />
            <br />
            <br />
            <img
              src="assets/img/experience-1.png"
              className="mt-5 mt-md-2 mt-lg-0 img-fluid"
              alt="points image"
            />
            <br className="br-hide" />
            <br className="br-hide" />
            <br className="br-hide" />
            <br />
            <br />
            <img
              src="assets/img/experience-2.png"
              className="mt-5 mt-lg-0 img-fluid"
              alt="points image"
            />
            <br className="br-hide" />
            <br className="br-hide" />
            <br className="br-hide" />
            <br />
            <br />
            <img
              src="assets/img/experience-3.png"
              className="mt-5 mt-lg-0 img-fluid"
              alt="points image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
