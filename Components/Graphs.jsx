import React from "react";
import Linegraph from "./Linegraph"

const Graphs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center justify-content-lg-start">
          <div className="col-lg-1"></div>
          {/* <div className="col-md-4 col-lg-2 mb-md-2 mb-lg-0 grp-crd1 me-2">
            <p>Current Balance</p>
            <h2>$1782.32</h2>
          </div>
          <div className="col-md-4 col-lg-2 mb-md-2 mb-lg-0 grp-crd2 me-2">
            <p>Amount Withdraw</p>
            <h2>$8436</h2>
          </div>
          <div className="col-md-4 col-lg-2 grp-crd3 me-2">
            <p>Profit this month</p>
            <h2>$965.53</h2>
          </div>
          <div className="col-md-4 col-lg-2 grp-crd4 me-2">
            <p>Profit Percentage</p>
            <h2>86%</h2>
          </div> */}
          <div className="col-md-4 col-lg-2 text-center mb-3 mb-md-3">
            <img src="assets/img/dsh1.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-4 col-lg-2 text-center mb-3 mb-md-3">
            <img src="assets/img/dsh2.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-4 col-lg-2 text-center mb-3 mb-md-3">
            <img src="assets/img/dsh3.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-4 col-lg-2 text-center mb-3 mb-md-0">
            <img src="assets/img/dsh4.png" className="img-fluid" alt="" />
          </div>
          <div className="col-md-4 mt-md-0 mt-lg-0  col-lg-2 btn-dv">
            <a href="" className="dsh-btn">
              Invest
            </a>
            <br />
            <br />
            <br />
            <a href="" className="dsh-btn1">
              Withdraw
            </a>
          </div>
          {/* <div className="col-md-1"></div>   */}
        </div>
        <br />
        <br />
        <div className="row justify-content-md-center justify-content-lg-start">
          <div className="col-lg-1"></div>
          <div className="col-md-10 col-lg-7 p-2 p-md-5 bg-dark rounded-3">
            <div className="row chrt-1">
              <div className="col-3 col-md-5">
                <h2>Analytics</h2>
              </div>
              <div className="col-5 col-md-5">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Day
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Week
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active" href="#">
                      Month
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-2 col-md-2">
              <div class="dropdown">
  <button class="btn btn-coin dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     <a href=""><img src="assets/img/curency.png" className="me-1" alt="" /></a> BTC
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
              </div>
              <div className="col-md-12 mt-3">
                <Linegraph />
              </div>
            </div>
          </div>
          <div className="col-md-10 col-lg-3 ms-0 ms-lg-3 mt-5 mt-lg-0 wlt-sec bg-dark rounded-3 px-4 py-2" py>
            <h3>Wallet</h3>
            <div className="row align-items-center mt-4">
              <div className="col-7 col-md-7 coin">
              <a href=""><img src="assets/img/curency1.png" className="me-3" alt="" /><span>Bitcoin</span> BTC</a> 
              </div>
              <div className="col-5 col-md-5 coin-prcnt  text-end">
                <a href=""> 37% <span className="main-color"> +2.5% </span> </a>
              </div>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-7 col-md-7 coin">
              <a href=""><img src="assets/img/curency2.png" className="me-3" alt="" /><span>Tether</span> USDT</a> 
              </div>
              <div className="col-5 col-md-5 coin-prcnt  text-end">
                <a href=""> 23% <span className="main-color"> +3.5% </span> </a>
              </div>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-8 col-md-7 coin">
              <a href=""><img src="assets/img/curency3.png" className="me-3" alt="" /><span>Ethereum</span> ETH</a> 
              </div>
              <div className="col-4 col-md-5 coin-prcnt  text-end">
                <a href=""> 20% <span className="main-color"> +1.5% </span> </a>
              </div>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-7 col-md-6 coin">
              <a href=""><img src="assets/img/curency4.png" className="me-3" alt="" /><span>Ripple</span> XLA</a> 
              </div>
              <div className="col-5 col-md-6 coin-prcnt  text-end">
                <a href=""> 17% <span className="main-color"> +1.5% </span> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphs;
