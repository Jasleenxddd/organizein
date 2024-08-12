// import React, { useState } from 'react';
// import './Register.css'; // Assuming you have a corresponding CSS file
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import logo from '../pages/home/images/Picture1.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [privacy, setPrivacy] = useState(false);
//   const [receiveMail, setReceiveMail] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       if (id === 'privacy') setPrivacy(checked);
//       if (id === 'rcvmail') setReceiveMail(checked);
//     } else {
//       if (id === 'Email__') setEmail(value);
//       if (id === 'pass') setPassword(value);
//       if (id === 'User__') setUsername(value);
//     }
//   };

//   const isFormValid = () => {
//     return email !== '' && password !== '' && username !== '' && privacy && receiveMail;
//   };

//   const handleRegister = () => {
//     if (isFormValid()) {
//       // Show success toast
//       toast.success("Registration successful!");
//       // Redirect to login page after 3 seconds
//       setTimeout(() => {
//         navigate('/login'); // Navigate to the home page after the toast
//       }, 500);
//     } else {
//       toast.error("Please fill in all required fields.");
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <section className="Wraper">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-12 p-0 col-12 col-xl-12 col-lg-12 col-xxl-12 mx-auto">
//               <div className="row" style={{ display: "flex", flexDirection: "row" }}>
//                 {/* Left Side */}
//                 <div className="col-12 left_____W col-md-3 col-lg-3 col-xl-3 col-xxl-3 mx-auto" style={{ width: "25%" }}>
//                   <a className="logo___" href="#">
//                     <img width="70px" src={logo} alt="logo img" className="img-fluid" />
//                   </a>

//                   <div className="left___site">
//                     <div className="Overly____div my-4">
//                       <div className="left___text">
//                         <div className="py-5"><br /><br />
//                           <h3>Explore Console</h3>
//                           <p>
//                             Climb leg rub face on everything
//                             give attitude nap all day for under the bed.
//                             Chase mice attack feet but rub face on
//                             everything hopped up.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Side */}
//                 <div className="col-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mx-auto" style={{ width: "75%" }}>
//                   <div className="right___site">
//                     <div className="main__box">
//                       <h5>Register</h5>
//                       <form>
//                         <label htmlFor="User__">User</label><br />
//                         <span>
//                           {/* <i className="fas fa-user"></i> */}
//                           <FontAwesomeIcon icon={faUser} />

//                           <input
//                             id="User__"
//                             type="text"
//                             placeholder="Enter your Name"
//                             value={username}
//                             onChange={handleInputChange}
//                           /><br />
//                         </span>

//                         <label htmlFor="Email__">E-mail</label><br />
//                         <span>
//                         <FontAwesomeIcon icon={faEnvelope} />
//                         <input
//                             id="Email__"
//                             type="email"
//                             placeholder="Enter your E-mail"
//                             value={email}
//                             onChange={handleInputChange}
//                           /><br />
//                         </span>

//                         <label htmlFor="pass">Password</label><br />
//                         <span>
//                           <a>
//                           <FontAwesomeIcon icon={faLock} />
//                           </a>
//                           <input
//                             id="pass"
//                             type="password"
//                             placeholder="Enter your Password"
//                             value={password}
//                             onChange={handleInputChange}
//                           />
//                         </span>
//                         <table>
//                           <tbody>
//                             <tr>
//                               <td><input type="checkbox" id="privacy" name="Privacy" checked={privacy} onChange={handleInputChange} /></td>
//                               <td>
//                                 <label htmlFor="privacy">I agree to the <a className="hyp"><u>privacy policy</u></a> and <a className="hyp"><u>terms of use</u></a></label>
//                               </td>
//                             </tr>
//                             <tr>
//                               <td><input type="checkbox" id="rcvmail" name="rcvmail" checked={receiveMail} onChange={handleInputChange} /></td>
//                               <td>
//                                 <label htmlFor="rcvmail">I agree to receive emails that will teach me how to generate more traffic and use usersuggest <a className="hyp"><u>(required)</u></a></label>
//                               </td>
//                             </tr>
//                           </tbody>
//                         </table>

//                         <input
//                           type="button"
//                           className={`submit__btn ${isFormValid() ? 'active__' : ''}`}
//                           value="Register"
//                           onClick={handleRegister}
//                         />
//                       </form>
//                       <label>Already have an account? <a className="hyp" href="/login">Login here</a></label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer>
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-md-12 text-center">
//               <img width="30px" src="./img/Picture1.png" alt="" className="img-fluid mx-1" />
//               <a style={{ color: 'rgb(185, 185, 185)', textDecoration: 'none' }} href="www.organizein.com | KPI Dashboard Admin">
//                 www.organizein.com | KPI Dashboard Admin
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import logo from '../pages/home/images/Picture1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Register.css';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [receiveMail, setReceiveMail] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (id === 'privacy') setPrivacy(checked);
      if (id === 'rcvmail') setReceiveMail(checked);
    } else {
      if (id === 'Email__') setEmail(value);
      if (id === 'pass') setPassword(value);
      if (id === 'User__') setUsername(value);
    }
  };

  const isFormValid = () => {
    return email !== '' && password !== '' && username !== '' && privacy && receiveMail;
  };

  const handleRegister = () => {
    if (isFormValid()) {
      toast.success("Registration successful!");
      setTimeout(() => {
        navigate('/login');
      }, 500);
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full bg-[#f0f6ff]">
      <ToastContainer />
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#5a78e4] to-[#48a4d4] w-full lg:w-1/4 lg:h-screen p-8 lg:p-12 text-white">
        <a href="#" className="absolute top-8 left-8 mb-8">
          <img src={logo} alt="logo" className="w-16 lg:w-16 top-2" />
        </a>
        
        <div className='Overly____div '>
        <div className="text-center lg:text-left ml-3 mr-1 absolute top-1/2 transform -translate-y-1/2">
      <h3 className="font-bold text-lg-4 mb-4">Explore Console</h3>
      <div>
        <p className="text-sm-1 text-white">
          Climb leg rub face on everything give attitude <br></br>nap all day for under the bed.
          Chase mice attack<br></br> feet but rub face on everything hopped up.
        </p>
      </div>
    </div>


        </div>
        
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center w-full lg:w-3/4 p-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h5 className="text-blue-700 font-semibold mb-6">Register</h5>
          <form>
            <div className="mb-4">
              <label htmlFor="User__" className="block text-sm font-medium text-gray-700">User</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-1">
                <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                <input
                  id="User__"
                  type="text"
                  placeholder="Enter your Name"
                  value={username}
                  onChange={handleInputChange}
                  className="flex-1 outline-none ml-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="Email__" className="block text-sm font-medium text-gray-700">E-mail</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                <input
                  id="Email__"
                  type="email"
                  placeholder="Enter your E-mail"
                  value={email}
                  onChange={handleInputChange}
                  className="flex-1 outline-none ml-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="pass" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-1">
                <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                <input
                  id="pass"
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={handleInputChange}
                  className="flex-1 outline-none ml-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <input type="checkbox" id="privacy" name="Privacy" checked={privacy} onChange={handleInputChange} className="mr-2" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                I agree to the <a className="text-blue-600 underline">privacy policy</a> and <a className="text-blue-600 underline">terms of use</a>
              </label>
            </div>

            <div className="mb-6">
              <input type="checkbox" id="rcvmail" name="rcvmail" checked={receiveMail} onChange={handleInputChange} className="mr-2" />
              <label htmlFor="rcvmail" className="text-sm text-gray-600">
                I agree to receive emails that will teach me how to generate more traffic and use usersuggest <a className="text-blue-600 underline">(required)</a>
              </label>
            </div>

            <button
              type="button"
              className={`w-full py-2 text-white bg-blue-600 rounded-md ${isFormValid() ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'}`}
              onClick={handleRegister}
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <label>Already have an account? <a className="text-blue-600 underline" href="/login">Login here</a></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
