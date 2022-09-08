import React, { useEffect, useState } from "react";
import { Card, Button, Table, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../api/mock";
import { reqCategorys } from "../../api";

export default function Category() {
  useEffect(() => {
    getCategorys();
  }, []);
  const title = "一级分类列表";
  const extra = (
    <Button type="primary" icon={<PlusOutlined />}>
      添加
    </Button>
  );
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: "分类名称",
      dataIndex: "name",
      key: "name",
      with:100
    },
    {
      title: "年龄",
      dataIndex: "",
      key: "age",
      render: () => (
        <Space size="middle">
          <a>修改分类</a>
          <a>查看子分类</a>
        </Space>
      ),
    },
  ];
  const pagination = {
    defaultCurrent:1,pageSize:10,total:50,onChange:(current,pageSize)=>onBaseClick(current,pageSize)
  }
  const [total,setTotal] = useState(0)
  /**获取一级分类 */
  const getCategorys = async () => {
    const res = await reqCategorys();
    const data = res?.data?.data.map(({ id, name, parentId, _v }) => {
      return {
        key: id,
        name,
        parentId,
        _v,
      };
    });
    const {total} = res.data
    setDataSource(data);
    setTotal(total)
  };

  const onBaseClick = (current,pageSize)=>{
      getCategorys();
  }
  return (
    <div>
      <Card title={title} extra={extra} style={{ width: "100%" }}>
        <Table dataSource={dataSource} bordered columns={columns} pagination={{...pagination,total}} />
      </Card>
    </div>
  );
}
