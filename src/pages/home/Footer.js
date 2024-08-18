import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import img from './images/Picture1.png';

const Footer = () => {
  return (
    <section className="text-white" style={{ backgroundColor: "#5163C6", height: 'auto', minHeight: '345px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-52 py-1 lg:py-1">
        <footer className="pt-1">
          <div className="text-center md:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start -mx-4">
              {/* Logo and Description */}
              <div className="w-full md:w-5/12 px-4 text-center md:text-left mb-8 md:mb-0">
                <div className="flex flex-col items-center md:items-start">
                  <img className="w-24 h-28 py-3" src={img} alt="Organizein" />
                  <p className="py-8 text-sm text-white">
                    Organizein Trusted IT &amp; Digital Marketing Agency. We will help you take
                    advantage of all that the Internet has to offer. Having a solid inbound
                    strategy with a high ROI is what every business strives for.
                  </p>
                </div>
              </div>
              
              {/* Spacer */}
              <div className="hidden md:block md:w-3/12 p-9"></div>

{/* Resources Links */}
<div className="w-full md:w-4/12 md:pl-8 px-4 mb-6 lg:mb-0 text-center md:text-left">
  <h5 className="font-semibold">Resources</h5>
  <ul className="list-none mt-2">
    <li className="py-1">
      <a href="#!" className="text-white hover:underline">
        Case Studies
      </a>
    </li>
    <li className="py-1">
      <a href="#!" className="text-white hover:underline">
        Blog
      </a>
    </li>
  </ul>
</div>

              {/* Company Links */}
              <div className="w-full md:w-2/12 px-4 mb-6 lg:mb-0 text-center md:text-left">
                <h5 className="font-semibold">Company</h5>
                <ul className="list-none mt-2">
                  <li className="py-1">
                    <a href="#!" className="text-white hover:underline">
                      About
                    </a>
                  </li>
                  <li className="py-1">
                    <a href="#!" className="text-white hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container mt-8">
            <div className="flex flex-wrap justify-between items-center -mx-4">
              {/* Social Media Links */}
              <div className="w-full md:w-6/12 px-4 mb-4 md:mb-0 text-center md:text-left">
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="https://www.facebook.com/organizeindm/" className="text-white text-xl">
                    <FaFacebook />
                  </a>
                  <a href="https://www.linkedin.com/company/3273657/admin/" className="text-white text-xl">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.facebook.com/organizeindm/" className="text-white text-xl">
                    <FaTwitter />
                  </a>
                  <a href="https://www.youtube.com/channel/UCAuvWg57vxGiRcyRV9p3Avw/videos" className="text-white text-xl">
                    <FaYoutube />
                  </a>
                </div>
              </div>
              
              {/* Footer Note */}
              <div className="w-full md:w-5/12 px-4 text-center md:text-right">
                <hr className="border-white mb-4" />
                <p className="text-sm text-white">
                  © 2022{" "}
                  <a href="#" className="text-white hover:underline">
                    Organizein Internet Marketing Solutions Pvt Ltd
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
