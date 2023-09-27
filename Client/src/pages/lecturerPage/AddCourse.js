import React, { useContext } from "react";
import { Link } from "react-router-dom";


import { Layout, Form, Input, Button, Breadcrumb, Card, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Navbar from "../../components/common/Navbar";
import Greeting from "../../components/common/Greeting";
import "./AddCourse.css";

const { Header, Sider, Content, Footer } = Layout;

export default (props) => {
 
  return (
    <div className="addCourse">
      <Layout className="addCourse layout">
        <Sider collapsible collapsed={false} >
          <Navbar />
        </Sider>
        <Layout>
          <Greeting firstName={'user'} />
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb__item">
              <Link to="/addcourse">Add Course</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="addCourse__content">
            <Card className="addCourse__card">
              <Form
                className="addCourse__form"
                name="basic"
                
              >
                <Form.Item
                  label="Course Code"
                  name="courseCode"
                  rules={[
                    { required: true, message: "Please input course code!" },
                  ]}
                >
                  <Input
                    name="courseCode"
                    placeholder="Enter course code"
                    
                  />
                </Form.Item>

                <Form.Item
                  label="Course Name"
                  name="courseName"
                  rules={[
                    { required: true, message: "Please input course name!" },
                  ]}
                >
                  <Input
                    name="courseName"
                    placeholder="Enter course name"
                    
                  />
                </Form.Item>

                <Form.Item
                  label="Course Session"
                  name="courseSession"
                  rules={[
                    { required: true, message: "Please input course session!" },
                  ]}
                >
                  <Input
                    name="courseSession"
                    placeholder="Enter course session"
                    
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Face In @ {new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

