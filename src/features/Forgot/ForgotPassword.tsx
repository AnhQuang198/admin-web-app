import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="container-fluid forgot-password-page">
      <div className="forgot-password-page-content">
        <div className="forgot-password-page-content-left">
          {/* <Icon name='authentication-bg' type='jpg'/> */}
        </div>
        <div className="forgot-password-page-content-right">
          <div className="content-right-header">
            <div className="content-right-title">
              <h2>Forgot Password</h2>
            </div>
            <div className="content-right-description">
              <span>Enter your email address to retrieve your password</span>
            </div>
          </div>
          <div className="content-right-forgot-password-form">
            <div className="forgot-password-input-text">
              <input type="text" placeholder="Email address" />
            </div>
          </div>
          <button className="btn-forgot-password">Retrieve Password</button>
          <div className="content-right-forgot-password">
            <Link to="/login">Back to login page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
