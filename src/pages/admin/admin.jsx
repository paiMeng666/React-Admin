import React from "react";
import memoryUtils from "../untils/memoryUtils";
import { Redirect } from "react-router-dom";
import { Layout } from "antd";
import LeftNav from "../../component/left-nav/left-nav";
import Header from "../../component/header/header";
import './index.scss'

const { Footer, Sider, Content } = Layout;
/**后台的管理组件 */
export default function Admin() {
  const user = memoryUtils?.user;
  if (!user || !user.userId) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <Layout style={{height:'100%'}}>
      <Sider>
          <LeftNav></LeftNav>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </Layout>
  );
}
