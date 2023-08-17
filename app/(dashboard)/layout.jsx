"use client";
import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useRouter } from "next/navigation";
import { Layout, Space, Menu } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#FFFF",
};

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const siderStyle = {
  backgroundColor: "#fff",
  minHeight: "100vh",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
};
const footerStyle = {
  textAlign: "center",
  color: "black",
  backgroundColor: "#fff",
};

const items = [
  getItem("Home", "/home", <PieChartOutlined />),
  getItem("Members", "/members", <UserOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const layout = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const onClick = (e) => {
    // console.log(e);
    router.push(e.key);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={siderStyle}
      >
        <div className="flex items-center justify-center mb-5 font-bold text-white bg-black h-14">
          LOGO
        </div>
        <Menu
          defaultSelectedKeys={["/home"]}
          mode="inline"
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout>
        <Content style={contentStyle}>{children}</Content>
        <Footer
          className="border-gray-200 border-solid shadow-md"
          style={footerStyle}
        >
          Developed by Issac
        </Footer>
      </Layout>
      <AnimatedCursor />
    </Layout>
  );
};

export default layout;
