import React from "react";
import "./index.scss";
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
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: "商品",
    key: "sub1",
    icon: <MailOutlined />,
    children: [
      {
        label: "品类管理",
        key: "5",
      },
      {
        label: "商品管理",
        key: "6",
      },
    ],
  },
  {
    label: "用户管理",
    key: "2",
    icon: <ContainerOutlined />,
  },
  {
    label: "角色管理",
    key: "3",
    icon: <DesktopOutlined />,
  },
  {
    label: "图形图表",
    key: "sub2",
    icon: <AppstoreOutlined />,
    children: [
      {
        label: "柱状图",
        key: "9",
      },
      {
        label: "柱状图",
        key: "10",
      },
      {
        label: "柱状图",
        key: "sub3",
      },
    ],
  },
];

const items = list.map((item) => {
  const { label, key, icon, children, type } = item;
  return getItem(label, key, icon, children, type);
});
console.log("items", items);

export default function LeftNav() {
  return (
    <div className="left-nav">
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
}
