import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import { useCallApi } from "../../utils/hooks/useCallApi";
import {
  NotiObject,
  useGetNotification,
} from "../../utils/hooks/useGetNotification";
import { RegisterSchema } from "./RegisterSchema";
import "./style.scss";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const callApi = useCallApi();
  const { openNotification, contextHolder } = useGetNotification();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const register = async (params: RegisterData) => {
    try {
      setIsLoading(true);
      let data: RegisterData = {
        name: params.name,
        email: params.email,
        password: params.password,
        confirmPassword: params.confirmPassword,
      };
      const response = await callApi(() => authApi.register(data));
      let notiObject: NotiObject = {
        type: "success",
        title: "",
        content: "",
      };
      if (response.status === 201) {
        setIsLoading(false);
        notiObject.title = "Đăng ký thành công!";
        notiObject.content =
          "Đăng ký tài khoản thành công. Đang chuyển hướng đến trang đăng nhập!";
        // redirect to path when login success
        navigation("/otp-verify");
      } else {
        setIsLoading(false);
        const dataError = response.response.data;
        notiObject.type = "error";
        notiObject.title = "Đăng ký thất bại!";
        notiObject.content = dataError.message;
      }
      openNotification(notiObject);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container-fluid register-page">
      {contextHolder}
      <div className="register-page-content">
        <div className="register-page-content-left">
          {/* <Icon name='authentication-bg' type='jpg'/> */}
        </div>
        <div className="register-page-content-right">
          <div className="content-right-header">
            <div className="content-right-title">
              <h2>{t("auth:register.header")}</h2>
            </div>
            <div className="content-right-description">
              <span>{t("auth:register.subHeader")}</span>
            </div>
          </div>
          <Formik
            initialValues={{
              name: name,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              setName(values.name);
              setEmail(values.email);
              setPassword(values.password);
              setConfirmPassword(values.confirmPassword);
              register(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="content-right-register-form">
                  <div className="input-validate">
                    <div className="register-input-text">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={values.name}
                      />
                    </div>
                    <div className="validate-error">
                      {errors.name && touched.name && (
                        <span className="validate-error-message">
                          {errors.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="input-validate">
                    <div className="register-input-text">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email address"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                    <div className="validate-error">
                      {errors.email && touched.email && (
                        <span className="validate-error-message">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="input-validate">
                    <div className="register-input-text">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={values.password}
                      />
                    </div>
                    <div className="validate-error">
                      {errors.password && touched.password && (
                        <span className="validate-error-message">
                          {errors.password}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="input-validate">
                    <div className="register-input-text">
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={values.confirmPassword}
                      />
                    </div>
                    <div className="validate-error">
                      {errors.confirmPassword && touched.confirmPassword && (
                        <span className="validate-error-message">
                          {errors.confirmPassword}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-register"
                  disabled={isLoading}
                >
                  {isLoading
                    ? t("auth:register.button.loading")
                    : t("auth:register.button.register")}
                </button>
              </form>
            )}
          </Formik>
          <div className="content-right-register">
            <Link to="/login">{t("auth:register.label.backToLogin")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
