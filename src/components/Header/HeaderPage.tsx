import React from "react";
import { BellOutlined } from "@ant-design/icons";
import { Popover, Button } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

function HeaderPage() {
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
                <span>
                  Quang Anh Lê
                </span>
                <hr />
              </div>
            }
            content={
              <div>
                <Button style={{ width: "100%", marginBottom: "10px" }}>
                  <Link to="/profile">Your profile</Link>
                </Button>
                <Button style={{ width: "100%", color: "red" }}>
                  Sign out
                </Button>
              </div>
            }
          >
            <img alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBE52Bv_pl8eBacx5vQThQj6qNZFtEqWImQ&usqp=CAU"/>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
