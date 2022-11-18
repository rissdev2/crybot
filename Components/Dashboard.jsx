import React from 'react';

const Dashboard = () => {
   

var stripe_load = () => {
    if (process.browser) {
        var aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = " https://js.stripe.com/v3/";

        document.head.appendChild(aScript);
        aScript.onload = () => {
            const counters = document.querySelectorAll('.counter');
            const speed = 3000; // The lower the slower
            
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
            
                    // Lower inc to slow and higher to slow
                    const inc = target / speed;
            
                    // console.log(inc);
                    // console.log(count);
            
                    // Check if target is reached
                    if (count < target) {
                        // Add inc to count and output in counter
                        counter.innerText = count + inc;
                        // Call function every ms
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
            
                updateCount();  
            });
        };
    }
};








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
                <div className="col-md-12">
                    <img src="assets/img/Dashboard.png" className='img-fluid' alt="" />
                </div>
            </div>
            {/* <div className="row conter-pts ">
                <div className="col-md-4 d-flex align-items-center">
                <div className="counter" data-target="290"><h2>0</h2></div> 
                <h3 className='main-color'>M</h3>
                <p>Startup we <br /> have Funded</p>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
            </div> */}
        </div>  

        </>
    );
}

export default Dashboard;
