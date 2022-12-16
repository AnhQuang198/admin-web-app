import React from "react";
import { Layout } from "antd";
import HeaderPage from "../../components/Header/HeaderPage";
import FooterPage from "../../components/Footer/FooterPage";
import { Outlet } from "react-router-dom";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
const { Content } = Layout;

function Authentication() {
  return (
    <Layout>
      <LeftMenu />
      <Layout>
        <HeaderPage />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <FooterPage />
      </Layout>
    </Layout>
  );
}

export default Authentication;
