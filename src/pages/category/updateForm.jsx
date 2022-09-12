import React from "react";
import { Form, Input } from "antd";
const Item = Form.Item;
export default function UpdateForm(props) {
  const { form } = props;
  const updateOnFinish = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Form name="update" form={form} onFinish={updateOnFinish}>
        <Item
          name="category"
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
