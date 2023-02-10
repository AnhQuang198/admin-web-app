import { Checkbox } from "antd";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCallApi } from "../../utils/hooks/useCallApi";
import { saveTokenAuth, setTimeExpire, setTokenType } from "../../utils/Common";
import "./style.scss";
import authApi from "../../api/authApi";
import {
  NotiObject,
  useGetNotification,
} from "../../utils/hooks/useGetNotification";
import { useTranslation } from "react-i18next";

function Login() {
  const {t} = useTranslation();
  const navigation = useNavigate();
  const callApi = useCallApi();
  const { openNotification, contextHolder } = useGetNotification();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      let data = {
        email: email,
        password: password,
      };
      const response = await callApi(() => authApi.login(data));
      console.log(response);

      if (response.status === 200) {
        const dataResponse = response.data;
        saveTokenAuth(dataResponse.token, dataResponse.refreshToken);
        setTimeExpire(dataResponse.expired);
        setTokenType(dataResponse.tokenType);
        setIsLoading(false);
        // redirect to path when login success
        navigation("/home");
      } else {
        setIsLoading(false);
        const dataError = response.response.data;
        let errorObj: NotiObject = {
          type: "error",
          title: "Đăng nhập thất bại!",
          content: dataError.message,
        };
        openNotification(errorObj);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container-fluid login-page">
      {contextHolder}
      <div className="login-page-content">
        <div className="login-page-content-left">
          {/* <Icon name='authentication-bg' type='jpg'/> */}
        </div>
        <div className="login-page-content-right">
          <div className="content-right-header">
            <div className="content-right-title">
              <h2>{t("auth:login.header")}</h2>
            </div>
            <div className="content-right-description">
              <span>{t("auth:login.subHeader")}</span>
            </div>
          </div>
          <div className="content-right-login-social">
            <button className="btn-login-social">{t("auth:login.button.googleLogin")}</button>
            <button className="btn-login-social">{t("auth:login.button.facebookLogin")}</button>
          </div>
          <div className="content-right-line">
            <hr />
            <span>{t("auth:login.label.or")}</span>
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
                  <Checkbox>{t("auth:login.label.rememberMe")}</Checkbox>
                  <Link to="/forgot-password">{t("auth:login.label.forgotPassword")}</Link>
                </div>
                <button
                  type="submit"
                  className="btn-login"
                  disabled={isLoading}
                >
                  {isLoading ? t("auth:login.button.loading") : t("auth:login.button.login")}
                </button>
              </form>
            )}
          </Formik>
          <div className="content-right-register">
            <span>{t("auth:login.label.registerLabel")}</span>
            <Link to="/register">{t("auth:login.label.register")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
