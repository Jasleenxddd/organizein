import React from 'react';
import './Home.css';
import Artboard12 from "../home/images/hover/Artboard12.jpg"
import Artboard10 from "../home/images/hover/Artboard10.jpg"
import Artboard11 from "../home/images/hover/Artboard11.jpg"
import Artboard13 from "../home/images/hover/Artboard13.jpg"
import Artboard15 from "../home/images/hover/Artboard15.jpg"
import Artboard16 from "../home/images/hover/Artboard16.jpg"
import Artboard17 from "../home/images/hover/Artboard17.jpg"
import Artboard18 from "../home/images/hover/Artboard18.jpg"
import Artboard1 from "../home/images/Artboard1.jpg";
import Artboard2 from "../home/images/Artboard2.jpg";
import Artboard3 from "../home/images/Artboard3.jpg";
import Artboard4 from "../home/images/Artboard4.jpg";
import Artboard5 from "../home/images/Artboard5.jpg";
import Artboard6 from "../home/images/Artboard6.jpg";
import Artboard7 from "../home/images/Artboard7.jpg";
import Artboard8 from "../home/images/Artboard8.jpg";
import Artboard9 from "../home/images/Artboard9.jpg";
import Artboard14 from "../home/images/Artboard14.jpg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div id="tabing-head">
      <div className="container">
        <div className="task-logo-container">
          <div className="task-logo d-md-none d-flex d-lg-flex">
            <img src="https://i.ibb.co/cNYYY7p/Picture1.png" alt="task-logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* <div className="tab-head-title">
              <h1>CMIT Solutions of Tribeca Dashboard > KPI</h1>
            </div> */}
          </div>
          <div className="col-md-12 col-3 tabs">
            <ul className="head-menu">
              <li className="active">
                <div className="head-ic-bg icon-f">
                  <style>
                    {`li.active img.inactive { display: none; }`}
                  </style>
                  <a href="/home">
                    <img src={Artboard1} className="inactive" alt="icons1" />
                    <img src={Artboard12} className="active" alt="icons1" />
                  </a>
                </div>
                <div className="head-title">
                  <p>KPI</p>
                </div>
              </li>
              <li className="active">
  <div className="head-ic-bg">
    <style>
      {`li.active img.inactive { display: none; }`}
    </style>
    <Link to="/SEO">
      <img src={Artboard3} className="inactive" alt="icons1" />
      <img src={Artboard18} className="active" alt="icons1" />
    </Link>
  </div>
  <div className="head-title">
    <p>SEO</p>
  </div>
</li>
              <li className="active">
                <div className="head-ic-bg">
                <style>
                    {`li.active img.inactive { display: none; }`}
                  </style>
                  <a href="/SEM">
                    <img src={Artboard5} className="inactive" alt="icons1" />
                    <img src={Artboard16} className="active" alt="icons1" />
                  </a>
                </div>
                <div className="head-title">
                  <p>SEM</p>
                </div>
              </li>
              <li className="active">
                <div className="head-ic-bg">
                <style>
                    {`li.active img.inactive { display: none; }`}
                  </style>
                  <a href="/Social">
                    <img src={Artboard4} className="inactive" alt="icons1" />
                    <img src={Artboard17} className="active" alt="icons1" />
                  </a>
                </div>
                <div className="head-title">
                  <p>Social</p>
                </div>
              </li>
              <li className="active">
                <div className="head-ic-bg">
                <style>
                    {`li.active img.inactive { display: none; }`}
                  </style>
                  <a href="/Mail">
                    <img src={Artboard2} className="inactive" alt="icons1" />
                    <img src={Artboard13} className="active" alt="icons1" />
                  </a>
                </div>
                <div className="head-title">
                  <p>Mail</p>
                </div>
              </li>
              <li className="active">
                <div className="head-ic-bg">
                <style>
                    {`li.active img.inactive { display: none; }`}
                  </style>
                  <Link href="/Web">
                    <img src={Artboard9} className="inactive" alt="icons1" />
                    <img src={Artboard10} className="active" alt="icons1" />
                  </Link>
                </div>
                <div className="head-title">
                  <p>Web</p>
                </div>
              </li>
              <li className="active">
                <div className="head-ic-bg">
                <style>
                    {`li.active img.inactive { display: none; }`}
                  </style>
                  <a href="/More">
                    <img src={Artboard6} className="inactive " alt="icons1" />
                    <img src={Artboard15} className="active " alt="icons1" />
                  </a>
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
