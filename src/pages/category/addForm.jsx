import React from "react";
import { Form, Select, Input } from "antd";
const Item = Form.Item;
/**添加分类的组件 */
export default function AddForm(props) {
  const { form } = props;
  const options = [
    {
      label: "一级分类",
      value: "0",
    },
    {
      label: "电脑",
      value: "1",
    },
    {
      label: "图书",
      value: "2",
    },
  ];
  const addOnFinish = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Form
        name="add"
        form={form}
        onFinish={addOnFinish}
        initialValues={{ category: "0" }}
        layout='vertical'
      >
        <Item
          name="category"
          label='所属分类'
          rules={[
            {
              required: true,
              message: "Please input your Username!",
              validateTrigger: ["onBlur"],
            },
          ]}
        >
          <Select options={options}></Select>
        </Item>
        <Item
          name="inputName"
          label='分类名称'
          rules={[
            {
              required: true,
              message: "Please input your Username!",
              validateTrigger: ["onBlur"],
            },
          ]}
        >
          <Input placeholder="请输入分类名称"></Input>
        </Item>
      </Form>
    </div>
  );
}
