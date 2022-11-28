import React from 'react';

const Header = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
{/* <!--  Show this only on mobile to medium screens  --> */}
  <a className="navbar-brand " href="#"><img src="assets/img/logo.png" alt="" /></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

{/* <!--  Use flexbox utility classes to change how the child elements are justified  --> */}
  <div className="collapse navbar-collapse justify-content-between" id="navbarNav">

    {/* <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">Start Investing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Learn</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About us</a>
      </li>
    </ul>
     */}
    
{/* <!--   Show this only lg screens and up   --> */}
    {/* <a className="navbar-brand d-none d-lg-block" href="#"><img src="assets/img/logo.png" alt="" /></a> */}
    
    
    
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Sign In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-color" href="#">Sign up</a>
      </li>
    
    </ul>
  </div>
  </div>
</nav>

{/* <div className="container">
  <div className="row">
    <div className="col-md-8">
    <a className="" href="#"><img src="assets/img/logo.png" alt="" /></a>
    </div>
    <div className="col-md-2"></div>
    <div className="col-md-2"></div>
  </div>
</div> */}





        </>
    );
}

export default Header;
