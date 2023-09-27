import React, { useContext } from "react";

import { Layout, Form, Input, Button, Checkbox, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";


import HeaderNavbar from "../../components/common/HeaderNavbar";

const { Content, Footer } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 6 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 4 },
};
export default (props) => {
 
  
  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <HeaderNavbar />

      <Content style={{ backgroundColor: "#fff" }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
         
        >
          <br />
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              name="email"
              placeholder="Enter your email"
              prefix={<MailOutlined />}
             
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              name="password"
              placeholder="Enter your password"
              prefix={<LockOutlined />}
              
            />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer
        style={{ backgroundColor: "white", textAlign: "center", width: "100%" }}
      >
        <span>Smart Attendance {new Date().getFullYear()}</span>
      </Footer>
    </Layout>
  );
};

