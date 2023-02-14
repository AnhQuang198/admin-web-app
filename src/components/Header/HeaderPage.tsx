import React, { useEffect, useState } from "react";
import { BellOutlined } from "@ant-design/icons";
import { Popover, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { isLogout } from "../../utils/Common";
import { useCallApi } from "../../utils/hooks/useCallApi";
import userApi from "../../api/userApi";
import { NotiObject, useGetNotification } from "../../utils/hooks/useGetNotification";

function HeaderPage() {
  const navigation = useNavigate();
  const callApi = useCallApi();
  const { openNotification } = useGetNotification();
  const [fullName, setFullName] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await callApi(() => userApi.me());

      if (response.status === 200) {
        const dataResponse = response.data;
        setFullName(dataResponse.name);
        setAvatarUrl(dataResponse.avatarUrl ? dataResponse.avatarUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBE52Bv_pl8eBacx5vQThQj6qNZFtEqWImQ&usqp=CAU");
      } else {
        const dataError = response.response.data;
        let errorObj: NotiObject = {
          type: "error",
          title: "Có lỗi xảy ra!",
          content: dataError.message,
        };
        openNotification(errorObj);
      }
    } catch(e) {
      console.log(e);
    }
  }

  const logout = () => {
    isLogout();
    navigation("/login");
  };

  return (
    <div className="header">
      <div className="header-content-left"></div>
      <div className="header-content-right">
        <div className="header-content-right-notification">
          <BellOutlined style={{ fontSize: "24px" }} />
        </div>
        <div className="header-content-right-user">
          <Popover
            placement="bottomRight"
            title={
              <div>
                <span>Signed in as:</span>
                <br />
                <span>{fullName}</span>
                <hr />
              </div>
            }
            content={
              <div>
                <Button style={{ width: "100%", marginBottom: "10px" }}>
                  <Link to="/profile">Your profile</Link>
                </Button>
                <Button
                  style={{ width: "100%", color: "red" }}
                  onClick={logout}
                >
                  Sign out
                </Button>
              </div>
            }
          >
            <img
              alt="user"
              src={avatarUrl}
            />
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
