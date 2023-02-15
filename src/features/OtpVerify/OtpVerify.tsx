import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { OTPSchema } from "./OTPSchema";
import { Button } from "antd";
import {
  NotiObject,
  useGetNotification,
} from "../../utils/hooks/useGetNotification";
import { useCallApi } from "../../utils/hooks/useCallApi";
import authApi from "../../api/authApi";
import Icon from "../../components/Icon/Icon";

export interface OtpRequestData {
  email: string;
  otpType: string;
}

export interface OtpVerifyData {
  email: string;
  otp: string;
}

function OtpVerify() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const callApi = useCallApi();
  const location = useLocation();
  const { openNotification, contextHolder } = useGetNotification();
  const [otp, setOtp] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isResendOTP, setIsResendOTP] = useState<boolean>(false);
  const [timeoutResend, setTimeoutResend] = useState<number>(60);

  useEffect(() => {
    if (!isResendOTP) {
      const value = setInterval(() => {
        if (timeoutResend > 1) {
          let subTimeout = timeoutResend - 1;
          setTimeoutResend(subTimeout);
        } else {
          clearInterval(value);
          setTimeoutResend(60);
          setIsResendOTP(true);
        }
      }, 1000);

      return () => clearInterval(value);
    }
  }, [timeoutResend, isResendOTP]);

  const verifyOTP = async (otp: string) => {
    let data: OtpVerifyData = {
      email: location.state.email,
      otp: otp,
    };
    console.log("Data verify", data);
    setIsLoading(true);
    try {
      const response = await callApi(() => authApi.verifyOTP(data));

      if (response.status === 200 || response.status === 201) {
        let notiObject: NotiObject = {
          type: "success",
          title: "Xác thực OTP thành công!",
          content:
            "Xác thực thành công. Đang chuyển hướng đến trang đăng nhập.",
        };
        setIsLoading(false);
        openNotification(notiObject);
        // redirect to path when login success
        navigation("/login");
      } else {
        const dataError = response.response.data;
        let notiObject: NotiObject = {
          type: "error",
          title: "Xác thực OTP thất bại!",
          content: dataError.message,
        };
        setIsLoading(false);
        openNotification(notiObject);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sendOTP = async () => {
    let data: OtpRequestData = {
      email: location.state.email,
      otpType: location.state.otpType,
    };
    console.log("Data send", data);
    setIsResendOTP(false);
    try {
      const response = await callApi(() => authApi.sendOTP(data));
      
      if (response.status === 200 || response.status === 201) {
        let notiObject: NotiObject = {
          type: "success",
          title: "Gửi OTP thành công!",
          content: "OTP đã được gửi đến địa chỉ email: " + location.state.email,
        };
        openNotification(notiObject);
      } else {
        const dataError = response.response.data;
        let notiObject: NotiObject = {
          type: "error",
          title: "Gửi OTP thất bại!",
          content: dataError.message,
        };
        openNotification(notiObject);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container-fluid verify-otp-page">
      {contextHolder}
      <div className="verify-otp-page-content">
        <div className="verify-otp-page-content-left">
          <Icon name='authen-bg' type='jpg'/>
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
              verifyOTP(values.otp);
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
                      {!isResendOTP ? (
                        <div className="verify-otp-resend-second">
                          <span>{timeoutResend}</span>
                        </div>
                      ) : (
                        <div className="verify-otp-resend-button">
                          <Button onClick={sendOTP}>
                            {t("auth:verifyOTP.button.resend")}
                          </Button>
                        </div>
                      )}
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
