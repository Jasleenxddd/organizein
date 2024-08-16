import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../Home.css';

function SMore() {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  const navigator = useNavigate();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

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
          <ul className="console-menu mt-5 p-0 list-none">
            <li>
              <span className="text-white">...</span>
            </li>
            <li className={`navbtn ${activeRoute === '/ProjectDetails' ? 'bg-[#26bcf2]' : ''}`}>
              <Link 
                to="/ProjectDetails" 
                className="items-center px-4 py-3 block"
                style={{ color: activeRoute === '/ProjectDetails' ? 'black' : 'inherit' }}
              >
                Project Details
              </Link>
            </li>
            <li className={`navbtn ${activeRoute === '/MyAcc' ? 'bg-[#26bcf2]' : ''}`}>
              <Link 
                to="/MyAcc" 
                className="flex items-center px-4 py-3 block"
                style={{ color: activeRoute === '/MyAcc' ? 'black' : 'inherit' }}
              >
                My Account
              </Link>
            </li>
            <li className={`navbtn ${activeRoute === '/ChangePass' ? 'bg-[#26bcf2]' : ''}`}>
              <Link 
                to="/ChangePass" 
                className="flex items-center px-4 py-3 block"
                style={{ color: activeRoute === '/ChangePass' ? 'black' : 'inherit' }}
              >
                Change Password
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="console-sidemenu active" id="sidemenu"></div>
      </div>

      <a className="d-lg-none d-flex fixed-bottom custom-task-btn p-4 m-5 fs-2 text-light ptr" type="button" onClick={openNav}>
        <i className="fa-solid fa-angles-right"></i>
      </a>
    </>
  );
}

export default SMore;
