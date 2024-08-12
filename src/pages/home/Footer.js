import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import img from './images/Picture1.png';

const Footer = () => {
  return (
    <section className=" text-white " style={{ backgroundColor: "#5163C6",height:'345px' }}>
      <div className="container mx-auto  h-14 px-52">
        <footer className="pt-4">
          <div className="container-fluid text-center md:text-left">
            <div className="flex flex-wrap -mx-4">
              <div className="md:w-5/12 px-4">
              <div className="flex flex-col items-start">
  <img className="w-24 h-28 py-3" src={img} alt="Organizein" />
  <p className="py-8 text-sm-4 text-white">
    Organizein Trusted IT &amp; Digital Marketing Agency. We will help you take
    advantage of all that the Internet has to offer. Having a solid inbound
    strategy with a high ROI is what every business strives for.
  </p>
</div>

              </div>
              <div className="md:w-2/12 px-4"></div>
              <div className="md:w-2/12 px-4 mt-6">
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
              <div className="md:w-2/12 px-4 mt-6">
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
            <div className="flex flex-wrap -mx-4">
              <div className="md:w-6/12 px-4">
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/organizeindm/"
                    className="text-white text-xl"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/3273657/admin/"
                    className="text-white text-xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/organizeindm/"
                    className="text-white text-xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCAuvWg57vxGiRcyRV9p3Avw/videos"
                    className="text-white text-xl"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
              
              <div className="md:w-5/12 px-11 text-right ">
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
