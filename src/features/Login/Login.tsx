import { Checkbox } from "antd";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import { saveTokenAuth, setTimeExpire } from "../../utils/Common";
import "./style.scss";

function Login() {
  const navigation = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      let data = {
        email: email,
        password: password,
      };
      const response = await authApi.login(data);

      if (response.status === 200) {
        const dataResponse = response.data;
        saveTokenAuth(dataResponse.token, dataResponse.refreshToken);
        setTimeExpire(dataResponse.expired);
        setIsLoading(false);
        // redirect to path when login success
        navigation("/home");
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
          <Formik
            initialValues={{ email: email, password: password }}
            onSubmit={(values) => {
              setEmail(values.email);
              setPassword(values.password);
              login(values.email, values.password);
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="content-right-login-form">
                  <div className="login-input-text">
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Email address"
                    />
                  </div>
                  <div className="login-input-text">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="content-right-remember-check">
                  <Checkbox>Remember me</Checkbox>
                  <Link to="/forgot-password">Forgot your password?</Link>
                </div>
                <button type="submit" className="btn-login" disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Login'}
                </button>
              </form>
            )}
          </Formik>
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
