import React, { useState } from 'react';
import './Register.css'; // Assuming you have a corresponding CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
      // Show success toast
      toast.success("Registration successful!");

      // Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate('/login'); // Navigate to the home page after the toast
      }, 500);
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <section className="Wraper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0 col-12 col-xl-12 col-lg-12 col-xxl-12 mx-auto">
              <div className="row" style={{ display: "flex", flexDirection: "row" }}>
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
                      <h5>Register</h5>
                      <form>
                        <label htmlFor="User__">User</label><br />
                        <span>
                          <i className="fas fa-user"></i>
                          <input
                            id="User__"
                            type="text"
                            placeholder="Enter your Name"
                            value={username}
                            onChange={handleInputChange}
                          /><br />
                        </span>

                        <label htmlFor="Email__">E-mail</label><br />
                        <span>
                          <i className="fas fa-envelope"></i>
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
                        <table>
                          <tbody>
                            <tr>
                              <td><input type="checkbox" id="privacy" name="Privacy" checked={privacy} onChange={handleInputChange} /></td>
                              <td>
                                <label htmlFor="privacy">I agree to the <a className="hyp"><u>privacy policy</u></a> and <a className="hyp"><u>terms of use</u></a></label>
                              </td>
                            </tr>
                            <tr>
                              <td><input type="checkbox" id="rcvmail" name="rcvmail" checked={receiveMail} onChange={handleInputChange} /></td>
                              <td>
                                <label htmlFor="rcvmail">I agree to receive emails that will teach me how to generate more traffic and use usersuggest <a className="hyp"><u>(required)</u></a></label>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <input
                          type="button"
                          className={`submit__btn ${isFormValid() ? 'active__' : ''}`}
                          value="Register"
                          onClick={handleRegister}
                        />
                      </form>
                      <label>Already have an account? <a className="hyp" href="/login">Login here</a></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
    </div>
  );
}

export default Register;
