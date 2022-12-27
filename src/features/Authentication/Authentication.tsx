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
        <Content>
          <div style={{ padding: 24, minHeight: 800 }}>
            <Outlet />
          </div>
        </Content>
        <FooterPage />
      </Layout>
    </Layout>
  );
}

export default Authentication;
