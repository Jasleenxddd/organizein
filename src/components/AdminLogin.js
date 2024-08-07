import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css';

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
                navigate('/home'); // Navigate to the home page after the toast
            }, 2000); // Delay to show the toast message
        } else {
            toast.error('Please fill in both fields');
        }
    };

    return (
        <div className='wrap'>
            <section className="Wraper">
                <div className="container-fluid">
                    <div className="upper-div">
                        <div>
                            <div className="complete-div" style={{ display: "flex", flexDirection: "row" }}>
                                {/* Left Side */}
                                <div className="col-12 left_____W col-md-3 col-lg-3 col-xl-3 col-xxl-3 mx-auto" style={{ width: "25%" }}>
                                    <a className="logo___" href="#">
                                        <img width="70px" src="./img/Picture1.png" alt="logo img" className="img-fluid" />
                                    </a>
                                    <div className="left___site">
                                        <div className="Overly____div my-4">
                                            <div className="left___text">
                                                <div className="py-5"><br /><br />
                                                    <h3>Explore Console</h3>
                                                    <p>
                                                        Climb leg rub face on everything
                                                        give attitude nap all day for under the bed.
                                                        Chase mice attack feet but rub face on
                                                        everything hopped up.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side */}
                                <div className="col-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mx-auto" style={{ width: "75%" }}>
                                    <div className="right___site">
                                        <div className="main__box">
                                            <h5>Admin Login</h5>
                                            <form action="">
                                                <label htmlFor="Email__">E-mail</label><br />
                                                <span>
                                                    <i className="fas fa-user"></i>
                                                    <input
                                                        id="Email__"
                                                        type="email"
                                                        placeholder="Enter your E-mail"
                                                        value={email}
                                                        onChange={handleInputChange}
                                                    /><br />
                                                </span>

                                                <label htmlFor="pass">Password</label><br />
                                                <span>
                                                    <a>
                                                        <i className="fas fa-ellipsis-h top__dot"></i>
                                                        <i className="fas fa-ellipsis-h bottom__dot"></i>
                                                    </a>
                                                    <input
                                                        id="pass"
                                                        type="password"
                                                        placeholder="Enter your Password"
                                                        value={password}
                                                        onChange={handleInputChange}
                                                    />
                                                </span>
                                                <div className="forget___pass">
                                                    <a href="#">Forgot Password</a>
                                                </div>
                                                <button
                                                    type="button"
                                                    className={`submit__btn ${email !== '' && password !== '' ? 'active__' : ''}`}
                                                    onClick={handleLogin}
                                                >
                                                    Log in
                                                </button>
                                            </form>
                                            <label>Don't have an account? <a className="hyp" href="/register">Register here</a></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 text-center">
                            <img width="30px" src="./img/Picture1.png" alt="" className="img-fluid mx-1" />
                            <a style={{ color: 'rgb(185, 185, 185)', textDecoration: 'none' }} href="www.organizein.com | KPI Dashboard Admin">
                                www.organizein.com | KPI Dashboard Admin
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <ToastContainer />
        </div>
    );
}

export default AdminLogin;
