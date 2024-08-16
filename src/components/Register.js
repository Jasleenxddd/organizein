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
      toast.success('Registration successful!');
      setTimeout(() => {
        navigate('/login');
      }, 500);
    } else {
      toast.error('Please fill in all required fields.');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-screen bg-[#f0f6ff]">
      <ToastContainer />
      
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#5a78e4] to-[#48a4d4] w-full lg:w-1/4 p-8 lg:p-12 text-white">
        <a href="#" className="mb-8 lg:mb-12">
          <img src={logo} alt="logo" className="w-16 lg:w-16" />
        </a>
        <div className="text-center lg:text-left">
          <h3 className="font-bold text-lg-4 mb-4">Explore Console</h3>
          <p className="text-sm-1">
            Climb leg rub face on everything, give attitude, nap all day for under the bed. Chase mice, attack feet, but rub face on everything hopped up.
          </p>
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
