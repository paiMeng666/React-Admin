import React from "react";
import { Form, Select, Input } from "antd";
const Item = Form.Item;
/**添加分类的组件 */
export default function AddForm(props) {
  const { form } = props;
  const options = [
    {
      label: "一级分类",
      value: "A",
    },
    {
      label: "B",
      value: "B",
    },
    {
      label: "C",
      value: "C",
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
        initialValues={{ a: "A" }}
      >
        <Item
          name="a"
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
          name="b"
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
