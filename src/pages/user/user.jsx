import React,{useState} from "react";
import { Card, Button,Table } from "antd";

export default function Role() {
  const [selectionType, setSelectionType] = useState('checkbox');
  const title = (
    <span>
      <Button type="primary">创建角色</Button>
      <Button type="primary" style={{ marginLeft: 16 }} disabled>
        设置角色权限
      </Button>
    </span>
  );
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      create_time: 32,
      auth_time: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      create_time: 42,
      auth_time: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '角色名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '授权时间',
      dataIndex: 'auth_time',
      key: 'auth_time',
    },
    {
      title: '授权人',
      dataIndex: 'auth_name',
      key: 'auth_name',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === '胡彦祖', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div>
      <Card size="small" title={title} style={{ width: "100%" }}>
      <Table dataSource={dataSource} columns={columns} pagination={{total:50,pageSize:10,defaultCurrent:1}} rowSelection={{
          type: selectionType,
          ...rowSelection,
        }} />;
      </Card>
    </div>
  );
}
