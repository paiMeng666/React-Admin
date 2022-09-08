import React from "react";
import "./index.scss";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const list = [
  {
    label: "首页",
    key: "home",
    icon: <PieChartOutlined />,
  },
  {
    label: "商品",
    key: "sub1",
    icon: <MailOutlined />,
    children: [
      {
        label: "品类管理",
        key: "category",
      },
      {
        label: "商品管理",
        key: "product",
      },
    ],
  },
  {
    label: "用户管理",
    key: "user",
    icon: <ContainerOutlined />,
  },
  {
    label: "角色管理",
    key: "role",
    icon: <DesktopOutlined />,
  },
  {
    label: "图形图表",
    key: "sub2",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: "柱状图",
        key: "charts/bar",
      },
      {
        label: "饼图",
        key: "charts/pie",
      },
      {
        label: "折线图",
        key: "charts/line",
      },
    ],
  },
];

const items = list.map((item) => {
  const { label, key, icon, children, type } = item;
  return getItem(label, key, icon, children, type);
});

export default function LeftNav(props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="left-nav">
      <Menu
        defaultSelectedKeys={["home"]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={({ key }) => {
          navigate(key);
        }}
      />
    </div>
  );
}
