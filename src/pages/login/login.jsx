import React from "react";
import "./login.scss";
import {useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { reqLogin } from "../../api/index";
import "../../api/mock";
import storgeUntils from "../untils/storgeUntils";

/** 登录的路由组件 */
export default function Login(props) {
  // 如果用户登录，跳转到管理界面
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (value) => {
    const res = await reqLogin(value, "POST");
    if (res.data.success) {
      message.success("登录成功");
      const user = res?.data?.data;
      console.log("user", user);
      storgeUntils.saveUser(user); //保存到本地
      navigate("/")
    } else {
      message.error("登录失败");
    }
  };
  
  return (
    <div className="login">
      <header className="login-header">
        <h1>React项目:后台管理系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登录</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
                validateTrigger: ["onBlur"],
              },
              { min: 4, message: "用户名至少4位" },
              {
                max: 12,
                message: "用户名最多12位",
                validateTrigger: ["onBlur"],
              },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: "用户名必须是英文、数字和下划线",
                validateTrigger: ["onBlur"],
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
                validateTrigger: ["onBlur"],
              },
              { min: 4, message: "密码至少4位" },
              { max: 12, message: "密码最多12位", validateTrigger: ["onBlur"] },
              {
                pattern: /^[a-zA-Z0-9_]+$/,
                message: "密码必须是英文、数字和下划线组成",
                validateTrigger: ["onBlur"],
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
}
