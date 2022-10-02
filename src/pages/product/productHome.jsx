import React, { useEffect, useState } from "react";
import { Card, Button, Select, Input, Table, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import mockjs from "mockjs";
import { reqProductList } from "../../api/index";
import { useNavigate } from "react-router-dom";

export default function ProductHome() {
  useEffect(() => {
    getProductList();
  }, []);

  const [dataSource, setDataSource] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const navigate = useNavigate();

  const getProductList = () => {
    reqProductList().then((res) => {
      const { data } = res;
      setDataSource(data?.list);
    });
  };

  const searchProduct = () => {
    console.log("searchName", searchName);
    console.log("searchType", searchType);
    getProductList();
  };

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
      <Select
        options={options}
        onChange={(value) => {
          setSearchType(value);
        }}
        defaultValue={"1"}
      ></Select>
      <Input
        placeholder="关键词"
        style={{ width: 200, margin: "0 15px" }}
        onChange={(event) => {
          setSearchName(event.target.value);
        }}
      ></Input>
      <Button type="primary" onClick={searchProduct}>
        搜素
      </Button>
    </span>
  );

  const columns = [
    {
      title: "商品名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "商品描述",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
      render(price) {
        return <span>¥{price}</span>;
      },
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
      with: 150,
      render(text) {
        return (
          <div style={{ textAlign: "center" }}>
            {text === 0 ? (
              <Button style={{ marginBottom: 8 }} type="primary">
                下架
              </Button>
            ) : (
              <Button style={{ marginBottom: 8 }} type="primary">
                上架
              </Button>
            )}
            <div>{text === 0 ? "在售" : "已下架"}</div>
          </div>
        );
      },
    },
    {
      title: "操作",
      dataIndex: "",
      key: "operation",
      with: 150,
      render(product) {
        return (
          <Space>
            <Button
              type="link"
              onClick={() => {
                navigate("detail", { state: product });
              }}
            >
              详情
            </Button>
            <Button
              type="link"
              onClick={() => {
                navigate("add", {
                  state: {
                    product,
                    isUpdate: true,
                  },
                });
              }}
            >
              修改
            </Button>
          </Space>
        );
      },
    },
  ];

  const pagination = {
    defaultCurrent: 1,
    pageSize: 5,
    total: 10,
    showQuickJumper: true,
  };
  return (
    <div>
      <Card
        title={title}
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              navigate("add");
            }}
          >
            添加商品
          </Button>
        }
        style={{ width: "100%" }}
      >
        <Table
          bordered
          rowKey="_id"
          pagination={pagination}
          dataSource={dataSource}
          columns={columns}
        />
      </Card>
    </div>
  );
}
