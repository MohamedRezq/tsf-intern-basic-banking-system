import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header } = Layout;
const AppHeader = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header className="header">
        <div className="logo">TSF BANKING SYSTEM</div>
        <Menu theme="dark" mode="horizontal" className="navLinks" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Customers</Menu.Item>
          <Menu.Item key="3">Transfers</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default AppHeader;
