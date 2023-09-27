//react
import React, { useState } from "react";
import { Link } from "react-router-dom";


//antd
import {
  Avatar,
  Layout,
  Form,
  Input,
  Button,
  Breadcrumb,
  Card,
  message,
} from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";



//comp
import Navbar from "../../components/common/Navbar";
import Greeting from "../../components/common/Greeting";
import Footer from "../../components/common/Footer";


//style
import "./Profile.css";

const { Sider, Content } = Layout;

export default () => {

  return (
    <div className="addCourse">
      <Layout className=" layout">
        <Sider collapsible collapsed={false} >
          <Navbar />
        </Sider>
        <Layout>
          <Greeting />
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb__item">
              <Link to="/profile">Profile</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="profile__content">
            <Card className="profile__card">
              <div className="profile__picture__container">
                <Avatar
                  src={'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1695308474~exp=1695309074~hmac=d35e121a12ce3283ea0a6978fdfd62956a424bfb95ccd17defc2e3dac234a146'}
                  size={200}
                  className="profile__picture"
                  icon={<UserOutlined />}
                />
                <label className="profile__picture__label" htmlFor="files">
                  Change Profile Picture
                </label>
                <input
                  className="profile__picture__input"
                  type="file"
                  id="files"
                  onChange={(e) => {
                    const file = e.target.files[0];
                   
                  }}
                  accept="image/x-png,image/gif,image/jpeg"
                />
              </div>

              <Form
                className="profile__form"
                name="basic"
               
                initialValues={{
                  firstName: 'first name',
                  lastName: 'last name',
                  cardID: '123',
                }}
              >
                <Form.Item label="Email" name="email">
                  <Input name="email" defaultValue={'user@gmail.com'} disabled />
                </Form.Item>

                <Form.Item label="Role" name="Role">
                  <Input
                    name="role"
                    defaultValue={`${
                      0 === 0 ? "Student" : "Lecturer"
                    }`}
                    disabled
                  />
                </Form.Item>

                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: "Please input first name!" },
                  ]}
                >
                  <Input name="firstName" placeholder="Enter your first name" />
                </Form.Item>

                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please enter your last name!" },
                  ]}
                >
                  <Input name="lastName" placeholder="Enter your last name" />
                </Form.Item>

                <Form.Item
                  label={0 === 0 ? "Matric Number" : "Staff ID"}
                  name="cardID"
                  rules={[
                    {
                      required: true,
                      message: `Please your ${
                        0 === 0 ? "Matric Number" : "Staff ID"
                      }!`,
                    },
                  ]}
                >
                  <Input
                    name="cardID"
                    placeholder={`Enter your ${
                      0 === 0 ? "Matric Number" : "Staff ID"
                    }`}
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" >
                    Submit {false ? <LoadingOutlined /> : null}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};

