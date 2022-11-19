import React from "react";

const Dashboard = () => {
  function numCounter(tagId, maxCount, speed) {
    var initialNumber = 0;
    function counter() {
      document.getElementById(tagId).innerHTML = initialNumber;
      ++initialNumber;
    }
    var counterDelay = setInterval(counter, speed);
    function totalTime() {
      clearInterval(counterDelay);
    }
    var totalPeriod = speed * maxCount;
    setTimeout(totalTime, totalPeriod);
  }

  numCounter("Projects", 12, 80);
  numCounter("Clients", 105, 20);
  numCounter("Partners", 310, 10);

  return (
    <>
      <div className="container">
        <div className="row dashboard-sec align-items-center ">
          <div className="col-md-7">
            <h2>
              Use wealth expert tools without{" "}
              <span className="main-color spn-sty"> coding skills</span>
            </h2>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3 text-center">
            <img
              src="assets/img/shape-3.png"
              className="img-fluid"
              alt="shapes"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-1 text-center">
            <img src="assets/img/shape-4.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-10 text-center">
            <img src="assets/img/Dashboard.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row conter-pts ">
          <div className="col-md-4 justify-content-center d-flex align-items-center">
            <h2>
              <span id="Partners">0</span>
            </h2>
            <h3 className="main-color">M</h3>
            <p>
              Startup we <br /> have Funded
            </p>
          </div>
          <div className="col-md-4 justify-content-center  d-flex align-items-center">
            <h2>
              <span id="Projects">0</span>
            </h2>
            <h3 className="main-color">K</h3>
            <p>
              Investors from <br /> Crybot community
            </p>
          </div>
          <div className="col-md-4 justify-content-center  d-flex align-items-center">
            <h2>
              <span id="Clients">0</span>
            </h2>
            <h3 className="main-color">%</h3>
            <p>Success <br /> Rate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
