import React from 'react';

const Graphs = () => {
    return (
        <>
        <div className="container-fluid">
         <div className="row align-items-center">
          <div className="col-md-1"></div>
          <div className="col-md-2 grp-crd1 me-2">
            <p>Current Balance</p>
            <h2>$1782.32</h2>
          </div>
          <div className="col-md-2 grp-crd2 me-2">
            <p>Amount Withdraw</p>
            <h2>$8436</h2>
          </div>
          <div className="col-md-2 grp-crd3 me-2">
            <p>Profit this month</p>
            <h2>$965.53</h2>
          </div>
          <div className="col-md-2 grp-crd4 me-2">
            <p>Profit Percentage</p>
            <h2>86%</h2>
          </div> 
          <div className="col-md-2 ">
            <a href="" className='dsh-btn'>
            Invest
            </a>
            <br />
            <br />
            <br />
            <a href="" className='dsh-btn1'>
            Withdraw
            </a>
          </div>
          <div className="col-md-1"></div>  
         </div>    
        </div>   
        </>
    );
}

export default Graphs;
