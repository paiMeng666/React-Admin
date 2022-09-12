import React from "react";
import { Card, Button, Select, Input, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function ProductHome() {
  const options = [
    {
      label: "按名称搜索",
      value: "1",
    },
    {
      label: "按描述搜索",
      value: "2",
    },
  ];
  const title = (
    <span>
      <Select options={options} defaultValue={"1"}></Select>
      <Input
        placeholder="关键词"
        style={{ width: 200, margin: "0 15px" }}
      ></Input>
      <Button type="primary">搜素</Button>
    </span>
  );
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div>
      <Card
        title={title}
        extra={
          <Button type="primary" icon={<PlusOutlined />}>
            添加分类
          </Button>
        }
        style={{ width: "100%" }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </div>
  );
}
