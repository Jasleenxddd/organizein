import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import logo from '../pages/home/images/Picture1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Register.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'Email__') setEmail(value);
    if (id === 'pass') setPassword(value);
  };

  const handleLogin = () => {
    if (email !== '' && password !== '') {
      toast.success('Logging in...');
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      toast.error('Please fill in both fields');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full bg-[#f0f6ff]">
      <ToastContainer />
      
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#5a78e4] to-[#48a4d4] w-full lg:w-1/3 lg:h-screen p-8 lg:p-12 text-white relative">
        <a href="#" className="mb-8 lg:mb-16">
          <img src={logo} alt="logo" className="w-16 lg:w-20" />
        </a>

        <div className="text-center lg:text-left lg:absolute lg:inset-y-1/2 lg:transform lg:-translate-y-1/2 lg:px-4">
          <h3 className="font-bold text-lg mb-4">Explore Console</h3>
          <p className="text-sm leading-relaxed">
            Climb leg rub face on everything give attitude<br />
            nap all day for under the bed. Chase mice<br />
            attack feet but rub face on everything hopped up.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center w-full lg:w-2/3 p-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h5 className="text-blue-700 font-semibold mb-6">Admin Login</h5>
          <form>
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

            <div className="text-right mb-4">
              <a href="#" className="text-blue-600 text-xs">Forgot Password?</a>
            </div>

            <button
              type="button"
              className={`w-full py-2 text-white bg-blue-600 rounded-md ${email !== '' && password !== '' ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'}`}
              onClick={handleLogin}
            >
              Log in
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <label>Don't have an account? <a className="text-blue-600 underline" href="/register">Register here</a></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
