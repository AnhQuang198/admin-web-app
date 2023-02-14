import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { OTPSchema } from "./OTPSchema";

function OtpVerify() {
  const { t } = useTranslation();
  const [otp, setOtp] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="container-fluid verify-otp-page">
      <div className="verify-otp-page-content">
        <div className="verify-otp-page-content-left">
          {/* <Icon name='authentication-bg' type='jpg'/> */}
        </div>
        <div className="verify-otp-page-content-right">
          <div className="content-right-header">
            <div className="content-right-title">
              <h2>{t("auth:verifyOTP.header")}</h2>
            </div>
            <div className="content-right-description">
              <span>{t("auth:verifyOTP.subHeader")}</span>
            </div>
          </div>
          <Formik
            initialValues={{ otp: otp }}
            validationSchema={OTPSchema}
            onSubmit={(values) => {
              setOtp(values.otp);
              console.log(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="content-right-verify-otp-form">
                  <div className="input-validate">
                    <div className="verify-otp-input-text">
                      <input
                        type="text"
                        name="otp"
                        placeholder="Verification code"
                        onChange={handleChange}
                        value={values.otp}
                      />
                    </div>
                    <div className="validate-error">
                      {errors.otp && touched.otp && (
                        <span className="validate-error-message">
                          {errors.otp}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-verify-otp"
                  disabled={isLoading}
                >
                  {isLoading
                    ? t("auth:verifyOTP.button.loading")
                    : t("auth:verifyOTP.button.verify")}
                </button>
              </form>
            )}
          </Formik>
          <div className="content-right-verify-otp">
            <Link to="/login">{t("auth:verifyOTP.label.backToLogin")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerify;
