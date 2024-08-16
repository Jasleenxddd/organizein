import React, { useState, useEffect } from 'react';
import './Home.css';
import Artboard12 from "../home/images/hover/Artboard12.jpg";
import Artboard10 from "../home/images/hover/Artboard10.jpg";
import Artboard13 from "../home/images/hover/Artboard13.jpg";
import Artboard15 from "../home/images/hover/Artboard15.jpg";
import Artboard16 from "../home/images/hover/Artboard16.jpg";
import Artboard17 from "../home/images/hover/Artboard17.jpg";
import Artboard18 from "../home/images/hover/Artboard18.jpg";

import mail from "../home/images/mail.svg";
import seo from "../home/images/seo.svg";
import sem from "../home/images/sem.svg";
import social from "../home/images/social.svg";
import web from "../home/images/web.svg";
import kpi from "../home/images/kpi.svg";
import more from "../home/images/more.svg";

import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div id="tabing-head">
      <div className="container">
      <div className="task-logo-container">
  <div className="task-logo w-30 h-30 absolute top-40 left-12 shadow-lg flex justify-center items-center z-50 rounded-full bg-white">
    <img src="https://i.ibb.co/cNYYY7p/Picture1.png" alt="task-logo" className="rounded-full object-cover w-full h-full" />
  </div>
</div>

        <div className="row">
          <div className="col-md-12 col-3 tabs">
            <ul className="head-menu">
              <li className={activeTab === '/home' ? 'active' : ''}>
                <div className="head-ic-bg icon-f">
                  <Link to="/home" onClick={() => handleTabClick('/home')}>
                    <img src={kpi} className="inactive" alt="KPI Icon" />
                    <img src={Artboard12} className="active" alt="KPI Icon Active" />
                  </Link>
                </div>
                <div className="head-title">
                  <p>KPI</p>
                </div>
              </li>
              <li className={activeTab === '/SEO' ? 'active' : ''}>
                <div className="head-ic-bg">
                  <Link to="/SEO" onClick={() => handleTabClick('/SEO')}>
                    <img src={seo} className="inactive" alt="SEO Icon" />
                    <img src={Artboard18} className="active" alt="SEO Icon Active" />
                  </Link>
                </div>
                <div className="head-title">
                  <p>SEO</p>
                </div>
              </li>
              <li className={activeTab === '/SEM' ? 'active' : ''}>
                <div className="head-ic-bg">
                  <Link to="/SEM" onClick={() => handleTabClick('/SEM')}>
                    <img src={sem} className="inactive" alt="SEM Icon" />
                    <img src={Artboard16} className="active" alt="SEM Icon Active" />
                  </Link>
                </div>
                <div className="head-title">
                  <p>SEM</p>
                </div>
              </li>
              <li className={activeTab === '/Social' ? 'active' : ''}>
                <div className="head-ic-bg">
                  <Link to="/Social" onClick={() => handleTabClick('/Social')}>
                    <img src={social} className="inactive" alt="Social Icon" />
                    <img src={Artboard17} className="active" alt="Social Icon Active" />
                  </Link>
                </div>
                <div className="head-title">
                  <p>Social</p>
                </div>
              </li>
              <li className={activeTab === '/Mail' ? 'active' : ''}>
                <div className="head-ic-bg">
                  <Link to="/Mail" onClick={() => handleTabClick('/Mail')}>
                    <img src={mail} className="inactive" alt="Mail Icon" />
                    <img src={Artboard13} className="active" alt="Mail Icon Active" />
                  </Link>
                </div>
                <div className="head-title">
                  <p>Mail</p>
                </div>
              </li>
              <li className={activeTab === '/Web' ? 'active' : ''}>
                <div className="head-ic-bg">
                  <Link to="/Web" onClick={() => handleTabClick('/Web')}>
                    <img src={web} className="inactive" alt="Web Icon" />
                    <img src={Artboard10} className="active" alt="Web Icon Active" />
                  </Link>
                </div>
                <div className="head-title">
                  <p>Web</p>
                </div>
              </li>
              <li className={activeTab === '/More' ? 'active' : ''}>
                <div className="head-ic-bg">
                  <Link to="/More" onClick={() => handleTabClick('/More')}>
                    <img src={more} className="inactive" alt="More Icon" />
                    <img src={Artboard15} className="active" alt="More Icon Active" />
                  </Link>
                </div>
                <div className="head-title">
                  <p>More</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
