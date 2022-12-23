import { Checkbox } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Login() {
  return (
    <div className="container-fluid login-page">
      <div className="login-page-content">
        <div className="login-page-content-left">
          {/* <Icon name='authentication-bg' type='jpg'/> */}
        </div>
        <div className="login-page-content-right">
          <div className="content-right-header">
            <div className="content-right-title">
              <h2>Login to Website</h2>
            </div>
            <div className="content-right-description">
              <span>
                Welcome back! login with your data that you entered during
                registration
              </span>
            </div>
          </div>
          <div className="content-right-login-social">
            <button className="btn-login-social">Login with Google</button>
            <button className="btn-login-social">Login with Facebook</button>
          </div>
          <div className="content-right-line">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <div className="content-right-login-form">
            <div className="login-input-text">
              <input type="text" placeholder="Email" />
            </div>
            <div className="login-input-text">
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="content-right-remember-check">
            <Checkbox>Remember me</Checkbox>
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>
          <button className="btn-login">Login</button>
          <div className="content-right-register">
            <span>Dont't have an account?</span>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
