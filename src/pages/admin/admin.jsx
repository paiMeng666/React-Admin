import React from "react";
import {Outlet  } from "react-router-dom";
import { Layout } from "antd";
import LeftNav from "../../component/left-nav/left-nav";
import Header from "../../component/header/header";
import "./index.scss";

const { Footer, Sider, Content } = Layout;
/**后台的管理组件 */
export default function Admin() {
  return (
    <Layout style={{ height: "100%" }}>
      <Sider>
        <LeftNav></LeftNav>
      </Sider>
      <Layout>
        <Header className="header">Header</Header>
        <Content className="content">
        <Outlet />
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </Layout>
  );
}
