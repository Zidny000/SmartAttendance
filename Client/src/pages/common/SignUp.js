import React, { useState} from "react";


import { Layout, Form, Input, Button, Radio, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";


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
    <Layout style={{ minHeight: "100vh" }}>
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
            rules={[
              { required: true, message: "Please input your email!" },
              {
                pattern: /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/,
                message: "Please enter valid email!",
              },
            ]}
          >
            <Input
              name="email"
              placeholder="Enter your email"
              prefix={<MailOutlined />}
              
            />
          </Form.Item>

          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
              {
                pattern: /^([a-zA-Z])*$/,
                message: "Please enter character only!",
              },
              { min: 3, message: "Please enter more than 3 character" },
              {
                whitespace: true,
                message: "Please do not insert whitespace only!",
              },
            ]}
          >
            <Input
              name="firstName"
              placeholder="Enter your first name"
              prefix={<UserOutlined />}
              
            />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
              {
                pattern: /^([a-zA-Z ])*$/,
                message: "Please enter character only!",
              },
              { min: 3, message: "Please enter more than 3 character" },
              {
                whitespace: true,
                message: "Please do not insert whitespace only!",
              },
            ]}
          >
            <Input
              name="lastName"
              placeholder="Enter your last name"
              prefix={<UserOutlined />}
              
            />
          </Form.Item>

          <Form.Item
            label="Staff ID/Matrix No"
            name="cardID"
            rules={[
              { required: true, message: "Please input your staff ID/Matrix No!" },
            ]}
          >
            <Input
              name="cardID"
              placeholder="Enter your staff ID/Matrix No"
              
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Please enter more than 6 character" },
              {
                whitespace: true,
                message: "Please do not insert whitespace only!",
              },
            ]}
          >
            <Input.Password
              name="password"
              placeholder="Enter your password"
              prefix={<LockOutlined />}
              
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password
              name="confirmPassword"
              placeholder="Enter your confirm password"
              prefix={<LockOutlined />}
              
            />
          </Form.Item>
          <Form.Item label="Role" name="userLevel" valuePropName="checked">
            <Radio.Group
              name="userLevel"
              value={0}
              
            >
              <Radio value={0}>Student</Radio>
              <Radio value={1}>Lecturer</Radio>
            </Radio.Group>
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
        <span>Smart Attendance @ {new Date().getFullYear()}</span>
      </Footer>
    </Layout>
  );
};

