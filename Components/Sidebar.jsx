import React from "react";
import Dashboardnav from "./Dashboardnav";
import Graphs from "./Graphs";
import History from "./History";

const Sidebar = () => {
  

  return (
    <>
    <body className="app ">
        <div className="main-di">
    {/* <!-- Sidebar content here --> */}
    <div className="sidebar bg-dark">
    <div className="sidebar-inner">
        <div className="sidebar-logo">
        <div className="d-flex align-items-center flex-nowrap">
            <a className="sidebar-link text-decoration-none" href="#">
            <div className="d-flex align-items-center flex-nowrap">
                <div className="logo-sm">
                <div className="logo d-flex align-items-center justify-content-center">
                    {/* <!-- The Minify logo here --> */}
                    <img src="assets/img/logo.png" alt="" />
                </div>
                </div>
                <div className="logo-text d-flex align-items-center justify-content-center">
                    {/* <!-- The Full Logo here --> */}
                    <img src="assets/img/logo.png" alt="" />
                </div>
            </div>
            </a>
            <div className="">
            <div className="mobile-toggle sidebar-toggle">
                <a href="#" className="text-decoration-none">
                {/* <!-- closing sidebar icon here --> */}
                </a>
            </div>
            </div>
        </div>
    </div>
         <hr className="line1  " />     
    <ul className="sidebar-menu scrollable position-relative">
        <li className="nav-item dropdown">
            <a className="nav-link" href="#">
                {/* <!-- Navigation icon here  --> */}
            <span className="icon-holder">
                {/* <i className="fal fa-home"></i> */}
                <img src="assets/img/menu.svg" alt="" />
            </span>
            {/* <!-- Navigation link here --> */}
            <span className="title text-white">Dashboard</span>
            </a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">
            <span className="icon-holder">
                {/* <i className="fas fa-fingerprint"></i> */}
                <img src="assets/img/chart.svg" alt="" />
            </span>
            <span className="title">Trade</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">
            <span className="icon-holder">
                {/* <i className="fas fa-fingerprint"></i> */}
                <img src="assets/img/wallet.svg" alt="" />
            </span>
            <span className="title">Wallet</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">
            <span className="icon-holder">
                {/* <i className="fas fa-fingerprint"></i> */}
                <img src="assets/img/chatting.svg" alt="" />
            </span>
            <span className="title">Message</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">
            <span className="icon-holder">
                {/* <i className="fas fa-fingerprint"></i> */}
                <img src="assets/img/gear.svg" alt="" />
            </span>
            <span className="title">Settings</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        <div></div>
        <hr className="line" />
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">
            <span className="icon-holder">
                {/* <i className="fas fa-fingerprint"></i> */}
                <img src="assets/img/support.svg" alt="" />
            </span>
            <span className="title">Support</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#">
            <span className="icon-holder">
                {/* <i className="fas fa-fingerprint"></i> */}
                <img src="assets/img/logout.svg" alt="" />
            </span>
            <span className="title">Logout</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        </ul>
    </div>
</div>



    <div className="container-wide">
        {/* <!-- Page content here --> */}
        <a id="sidebar-toggle" className="sidebar-toggle nav-link" href="">
        <i className="fa-solid fa-bars"></i>
</a>
<Dashboardnav />
<br />
<br />
<br />
<Graphs />
<br />
<br />
<History />
    </div>
    </div>
</body>
    </>
  );
};

export default Sidebar;
