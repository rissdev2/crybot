import React from 'react';

const Dashboardnav = () => {
    return (
        <>
          <div className="container-fluid">
            <div className="row dash-head align-items-center">
              <div className="col-md-1"></div>
                <div className="col-md-7">
                    <h1>
                        Dashboard
                    </h1>
                </div>
                <div className="col-md-1 border-end text-center ">
                <i class="fa-solid fa-bell position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    3
    <span class="visually-hidden">unread messages</span>
  </span>

                </i>
                </div>
               <div className="col-md-2 d-flex justify-content-center">
                <img src="assets/img/Ellipse.png" alt="" />
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Kashan Bhatti
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
               </div>
               <div className="col-md-1"></div>
            </div>
            </div>  
        </>
    );
}

export default Dashboardnav;
