import React, { useEffect, useState } from "react";
import { Card, Button, Table, Space, Modal, Form } from "antd";
import { PlusOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "../../api/mock";
import { reqCategorys } from "../../api";
import AddForm from "./addForm";
import UpdateForm from "./updateForm";

export default function Category() {
  useEffect(() => {
    getCategorys(parentId);
  }, []);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [parentId, setParentId] = useState(0);
  const [parentName, setParentName] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(0);
  const [addForm] = Form.useForm();
  const [updateForm] = Form.useForm();

  const showAddModal = () => {
    setIsModalOpen(1);
  };
  const showUpdateModal = (name) => {
    updateForm.setFieldsValue({ category: name || "" });
    setIsModalOpen(2);
  };

  const handleCancel = () => {
    setIsModalOpen(0);
  };

  /**显示指定的一级分类 */
  const showCategorys = () => {
    setParentId(0);
    setParentName("");
    setSubCategory([]);
  };

  const addCategorys = () => {
    addForm.validateFields().then((res) => {
      if (res) setIsModalOpen(0);
    });
  };
  const updateCategorys = () => {
    updateForm.validateFields().then((res) => {
      if (res) setIsModalOpen(0);
    });
  };

  const title =
    parentId === 0 ? (
      <Button type="link">一级分类列表</Button>
    ) : (
      <span>
        <Button type="link" onClick={showCategorys}>
          一级分类列表
        </Button>
        <ArrowRightOutlined />
        <span style={{ marginLeft: "15px" }}>{parentName}</span>
      </span>
    );
  const extra = (
    <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
      添加
    </Button>
  );

  const columns = [
    {
      title: "分类名称",
      dataIndex: "name",
      key: "name",
      with: 100,
    },
    {
      title: "年龄",
      dataIndex: "",
      key: "age",
      render: (text) => (
        <Space size="middle">
          <Button type="link" onClick={() => showUpdateModal(text?.name)}>
            修改分类
          </Button>
          {parentId === 0 ? (
            <Button type="link" onClick={() => showSubCategory(text)}>
              查看子分类
            </Button>
          ) : null}
        </Space>
      ),
    },
  ];
  const pagination = {
    defaultCurrent: 1,
    pageSize: 10,
    total: 0,
    onChange: () => onBaseClick(),
    showQuickJumper: true,
  };

  /**获取一级分类 */
  const getCategorys = async (parentId) => {
    setLoading(true);
    const res = await reqCategorys(parentId);
    const data = res?.data?.data.map(
      ({ id, name, parentId, _v, parentName }) => {
        return {
          key: id,
          name,
          parentId,
          _v,
          parentName,
        };
      }
    );
    setLoading(false);
    const { total } = res.data;
    if (parentId === 0) {
      setDataSource(data);
    } else {
      setSubCategory(data);
    }
    setTotal(total);
  };
  const showSubCategory = (text) => {
    const { parentId, parentName } = text;
    getCategorys(parentId);
    setParentId(parentId);
    setParentName(parentName);
  };

  const onBaseClick = () => {
    getCategorys(parentId);
  };
  return (
    <div>
      <Card title={title} extra={extra} style={{ width: "100%" }}>
        <Table
          loading={loading}
          dataSource={parentId === 0 ? dataSource : subCategory}
          bordered
          columns={columns}
          pagination={{ ...pagination, total }}
        />
      </Card>
      <Modal
        title="添加分类"
        visible={isModalOpen === 1}
        onOk={addCategorys}
        onCancel={handleCancel}
      >
        <AddForm form={addForm}></AddForm>
      </Modal>
      <Modal
        title="更新分类"
        visible={isModalOpen === 2}
        onOk={updateCategorys}
        onCancel={handleCancel}
      >
        <UpdateForm form={updateForm}></UpdateForm>
      </Modal>
    </div>
  );
}
