import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Register() {
  return (
    <div className="container-fluid register-page">
      <div className="register-page-content">
        <div className="register-page-content-left">
          {/* <Icon name='authentication-bg' type='jpg'/> */}
        </div>
        <div className="register-page-content-right">
          <div className="content-right-header">
            <div className="content-right-title">
              <h2>Create Account</h2>
            </div>
            <div className="content-right-description">
              <span>Welcome to My App</span>
            </div>
          </div>
          <div className="content-right-register-form">
            <div className="register-input-text">
              <input type="text" placeholder="Name" />
            </div>
            <div className="register-input-text">
              <input type="text" placeholder="Email address" />
            </div>
            <div className="register-input-text">
              <input type="password" placeholder="Password" />
            </div>
            <div className="register-input-text">
              <input type="password" placeholder="Re Password" />
            </div>
          </div>
          <button className="btn-register">Register</button>
          <div className="content-right-register">
            <Link to="/login">Back to login page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
