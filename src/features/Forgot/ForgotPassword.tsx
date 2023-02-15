import React, { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { ForgotPasswordSchema } from "./ForgotPasswordSchema";
import Icon from "../../components/Icon/Icon";

function ForgotPassword() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [email, setEmail] = useState<string>("");

  const forgotPassword = async (email: string) => {
    navigation("/otp-verify", {
      state: {
        email: email,
        otpType: "FORGOT",
      },
    });
  };

  return (
    <div className="container-fluid forgot-password-page">
      <div className="forgot-password-page-content">
        <div className="forgot-password-page-content-left">
          <Icon name='authen-bg' type='jpg'/>
        </div>
        <div className="forgot-password-page-content-right">
          <div className="content-right-header">
            <div className="content-right-title">
              <h2>{t("auth:forgotPassword.header")}</h2>
            </div>
            <div className="content-right-description">
              <span>{t("auth:forgotPassword.subHeader")}</span>
            </div>
          </div>
          <Formik
            initialValues={{
              email: email,
            }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values) => {
              setEmail(values.email);
              forgotPassword(values.email);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="content-right-forgot-password-form">
                  <div className="input-validate">
                    <div className="forgot-password-input-text">
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
                </div>
                <button type="submit" className="btn-forgot-password">
                  {t("auth:forgotPassword.button.forgot")}
                </button>
              </form>
            )}
          </Formik>

          <div className="content-right-forgot-password">
            <Link to="/login">
              {t("auth:forgotPassword.label.backToLogin")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
