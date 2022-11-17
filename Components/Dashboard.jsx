import React from 'react';

const Dashboard = () => {
    return (
        <>
          <div className="container">
            <div className="row dashboard-sec">
                <div className="col-md-7">
                    <h2>
                    Use wealth expert tools without <span className='main-color spn-sty'> coding skills</span>
                    </h2>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <img src="assets/img/shape-3.png" className='img-fluid' alt="shapes" />
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-1">
                    <img src="assets/img/shape-4.png" className='img-fluid' alt="" />
                </div>
                <div className="col-md-11">
                    <img src="assets/img/dashboard.png" className='img-fluid' alt="" />
                </div>
            </div>
        </div>  
        </>
    );
}

export default Dashboard;
