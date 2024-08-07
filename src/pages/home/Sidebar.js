import React from 'react';
import './Home.css';

function Sidebar() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <>
      <aside className="console-sidemenu active" id="sidemenu">
        <nav>
          <ul className="console-menu">
            <li><span style={{color: '#fff'}}>...</span></li>
            <li style={{backgroundColor: '#26bcf2'}} className="navbtn">
              <a href="#" title=""> <span>KPI-Main</span></a>
            </li>
          </ul>
          <div className="log">
            <a href="login.html"><i className="fa fa-power-off" aria-hidden="true"></i> Logout</a>
          </div>
        </nav>
      </aside>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="console-sidemenu active" id="sidemenu"></div>
      </div>

      <a className="d-lg-none d-flex fixed-bottom custom-task-btn p-4 m-5 fs-2 text-light ptr" type="button" onClick={openNav}>
        <i className="fa-solid fa-angles-right"></i>
      </a>

      {/* <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
        <ul className="console-menu">
          <li style={{backgroundColor: '#26bcf2'}} className="menu-item-has-children">
            <a href="#" title="" style={{backgroundColor: '#26bcf2'}}> <span>KPI-Main</span></a>
          </li>
        </ul>
        <div className="log">
          <a href="login.html"><i className="fa fa-power-off" aria-hidden="true"></i> Logout</a>
        </div>
      </div> */}
    </>
  );
}

export default Sidebar;
