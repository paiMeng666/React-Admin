import React, { useState, useRef } from "react";
import { Button, Card, Form, Input, InputNumber } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Pictures from "../../component/pictures-wall/pictures";
import { useLocation } from "react-router-dom";
import MyEditor from "../../component/rich-text-edit/rich-text-edit";

/**Product的子路由 */
const { TextArea } = Input;

export default function AddProduct() {
  const [fileList, setFilelist] = useState([]);
  const editor = useRef(null);

  const onFinish = (values) => {
    console.log(fileList);
    console.log(editor.current.getDetail());
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const getImages = (fileList) => {
    setFilelist(fileList);
  };

  const location = useLocation();
  console.log("location", location.state);
  return (
    <div>
      <Card
        title={
          <span>
            <Button type="link" icon={<ArrowLeftOutlined />}>
              {location.state?.isUpdate ? "修改商品" : "添加商品"}
            </Button>
          </span>
        }
        extra={<Button type="primary">More</Button>}
        style={{ width: "100%" }}
      >
        <Form
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 8 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ price: 1 }}
        >
          <Form.Item
            label="商品名称"
            name="name"
            rules={[{ required: true, message: "必须输入商品的名称" }]}
          >
            <Input placeholder="请输入商品名称"></Input>
          </Form.Item>
          <Form.Item
            label="商品描述"
            name="desc"
            rules={[{ required: true, message: "必须输入商品的描述" }]}
          >
            <TextArea placeholder="请输入商品描述" rows={4}></TextArea>
          </Form.Item>
          <Form.Item label="商品价格" name="price">
            <Input
              type="number"
              addonAfter="元"
              placeholder="请输入商品价格"
            ></Input>
          </Form.Item>
          <Form.Item label="商品分类" name="category">
            <InputNumber
              addonAfter="元"
              placeholder="请输入商品价格"
              min={1}
              max={10}
            ></InputNumber>
          </Form.Item>

          <Form.Item label="商品图片" name="pictures">
            <Pictures getImages={getImages}></Pictures>
          </Form.Item>
          <Form.Item
            label="商品详情"
            name="detail"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 20 }}
          >
            <MyEditor ref={editor}></MyEditor>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
