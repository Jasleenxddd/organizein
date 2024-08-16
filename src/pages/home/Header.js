// import React from 'react';
// import './Home.css';

// function Header() {
//   return (
//     <header>
//       <div className="header-left">
//         <div className="logo">
//           <a href="index.html">
//             <img width="60px" id="logo_img" src="./imgage.png" className="img-fluid" alt="" />
//           </a>
//         </div>
//       </div>
//       <div className="header-right">
//         <ul className="top-header-btns">

//           <li className="dropdown">
//             <a className="login-user" data-toggle="dropdown" href="#" title="">
//               <img src="images/img1.jpg" alt="" />
//             </a>
//             <div className="dropdown-menu dropdown-menu-right">
//               <a className="dropdown-item" href="myacc.html">
//                 <ion-icon ios="ios-contact" md="md-contact"></ion-icon>
//                 <i className="fas fa-user"></i> Profile
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="myacc.html">
//                 <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>
//                 <i className="far fa-question-circle"></i> Help Center
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="ChangePass.html">
//                 <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>Change Password
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="login.html">
//                 <ion-icon ios="ios-log-out" md="md-log-out"></ion-icon>
//                 <i className="fas fa-sign-out-alt"></i> Logout
//               </a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import logo from './images/logo.png';
import img from './images/img1.jpg';


function Header() {
  // State to manage the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown when clicking outside
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="flex items-center h-14 z-[101] px-5 relative bg-white justify-between shadow-lg">
      <div className="flex items-center">
        <div className="text-lg font-semibold min-w-[150px]">
          <a href="index.html">
            <img width="60px" id="logo_img" src={logo} className="img-fluid" alt="Logo" />
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-2 list-none">
          <li className="relative">
            <button
              className="relative w-10 h-10 text-center text-[#617182] text-xl rounded-full shadow-md transition-transform transform hover:bg-gray-200"
              onClick={toggleDropdown}
              title="User"
            >
              <img src={img} alt="User" className="rounded-full border-2 border-white shadow-md" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-white rounded-full"></span>
            </button>
            {dropdownOpen && (
              <div
                className="dropdown-menu-right mt-1 absolute right-0 z-10 w-56 bg-white shadow-lg rounded-md overflow-hidden"
                onMouseLeave={closeDropdown}
              >
                <a className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 flex items-center" href="/myAcc">
                  <i className="fas fa-user mr-2"></i> Profile
                </a>
                <div className="border-t border-gray-200"></div>
                <a className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 flex items-center" href="/myAcc">
                  <i className="far fa-question-circle mr-2"></i> Help Center
                </a>
                <div className="border-t border-gray-200"></div>
                <a className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 flex items-center" href="/ChangePass">
                  <i className="fas fa-sign-out-alt mr-2"></i> Change Password
                </a>
                <div className="border-t border-gray-200"></div>
                <a className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 flex items-center" href="/login">
                  <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
