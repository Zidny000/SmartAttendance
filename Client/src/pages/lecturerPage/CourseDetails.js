import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Layout,
  Breadcrumb,
  Avatar,
  Button,
  Card,
  Row,
  Col,
  Divider,
  Form,
  Input,
  Table,
  Tag,
  Space,
  Spin,
  message,
} from "antd";

import { UserOutlined, LoadingOutlined } from "@ant-design/icons";



import Navbar from "../../components/common/Navbar";
import Greeting from "../../components/common/Greeting";

import "./CourseDetails.css";

const { Header, Sider, Content, Footer } = Layout;

export default (props) => {
  const [participants, setParticipants] = useState([
    {
      key: 123,
      firstName: 'Munimah Mahreen',
      lastName: 'Shama',
      profilePictureURL: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1695308474~exp=1695309074~hmac=d35e121a12ce3283ea0a6978fdfd62956a424bfb95ccd17defc2e3dac234a146',
      matricNumber: 20201017,
      warningCount: 0,
    },
    {
      key: 321,
      firstName: 'Eshrat',
      lastName: 'Borna',
      profilePictureURL: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1695308474~exp=1695309074~hmac=d35e121a12ce3283ea0a6978fdfd62956a424bfb95ccd17defc2e3dac234a146',
      matricNumber: 20201017,
      warningCount: 1,
    },
    {
      key: 333,
      firstName: 'Nazmul Hassan',
      lastName: 'Ove',
      profilePictureURL: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1695308474~exp=1695309074~hmac=d35e121a12ce3283ea0a6978fdfd62956a424bfb95ccd17defc2e3dac234a146',
      matricNumber: 20201017,
      warningCount: 2,
    }
  ]);

  const columns = [
    {
      title: <strong>Avatar</strong>,
      dataIndex: "profilePictureURL",
      key: "profilePictureURL",
      render: (imgURL) => (
        <Avatar src={imgURL} size={50} icon={<UserOutlined />} />
      ),
    },
    {
      title: <strong>First Name</strong>,
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => (
        <a style={{ justifyContent: "center", textAlign: "center" }}>{text}</a>
      ),
    },
    {
      title: <strong>Last Name</strong>,
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: <strong>Matric Number</strong>,
      dataIndex: "matricNumber",
      key: "matricNumber",
    },
    {
      title: <strong>Attendance Rate</strong>,
      dataIndex: "attendanceRate",
      key: "attendanceRate",
    },
    {
      title: <strong>Warning Count</strong>,
      dataIndex: "warningCount",
      key: "warningCount",
      render: (text) => (
        <div>
          {/* {obtainStudentWarningStatus.loading && <LoadingOutlined />} */}
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: <strong>Action</strong>,
      key: "action",
      render: (index) => (
        <Space size="middle">
          <Button
            danger
            className="courseDetails__warnBtn"
     
          >
            Warn
          </Button>
          <Button
            danger
            className="courseDetails__kickBtn"
         
          >
            Kick
          </Button>
        </Space>
      ),
    },
  ];



  return (
    <Layout className="courseDetails layout">
      <Sider collapsible collapsed={false} >
        <Navbar />
      </Sider>

      <Layout>
        <Greeting
          firstName={'User'}
          profilePicture={'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1695308474~exp=1695309074~hmac=d35e121a12ce3283ea0a6978fdfd62956a424bfb95ccd17defc2e3dac234a146'}
        />
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb__item">
            <Link to="/dashboard">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb__item">
            <Link
              to={`/course/${0}`}
            >{`Course: ${0}`}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Content style={{ margin: "24px 16px 0" }}>
          <Card className="courseDetails__card">
            {false && <Spin tip="Loading..." />}
            {true && (
              <div className="courseDetails__container">
                <Row className="courseDetails__row">
                  <Col>
                    <Card className="courseDetails__info">
                      <p className="courseDetails__shortID">
                        Unique ID: {'321'}
                      </p>
                      <p>
                        <strong>Code:</strong> {'CSE-322'}
                      </p>
                      <p>
                        <strong>Name:</strong> {'Software Lab'}
                      </p>
                      <p>
                        <strong>Session:</strong> {'Spring-2023'}
                      </p>
                      <p>
                        <strong>Total Participants:</strong>{" "}
                        {5}
                      </p>
                      <Button
                        type="primary"
                        className="courseDetails__takeAttendance"
                      >
                        <Link
                          to={`/course/${0}/takeAttendance`}
                        >
                          Take Attendance
                        </Link>
                      </Button>
                      <br />
                      <br />

                      <Link to={`/course/${0}/history`}>
                        View Attendance History
                      </Link>
                    </Card>
                  </Col>
                </Row>
                <Divider
                  orientation="left"
                  style={{ color: "#333", fontWeight: "normal" }}
                >
                  Participants
                </Divider>
                <Row className="courseDetails__row">
                  <Col>
                    <Form
                   
                      className="courseDetails__addStudentForm"
                    >
                      <Form.Item
                        className="courseDetails__addStudentForm__formItem"
                        label="Student's Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter student's email!",
                          },
                        ]}
                        tip="d"
                      >
                        <Input
                          className="courseDetails__addStudentForm__input"
                          name="email"
                          placeholder="Enter student's email"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          className="courseDetails__addStudentForm__submit"
                          type="primary"
                        
                          htmlType="submit"
                        >
                          Add
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>

                <Row className="courseDetails__row">
                  <Col>{false && <Spin tip="Loading" />}</Col>
                </Row>

                {!false && (
                  <Table
                    columns={columns}
                    style={{ textAlign: "center" }}
                    dataSource={participants}
                  />
                )}
              </div>
            )}
           
          </Card>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <span>Face In @ {new Date().getFullYear()}</span>
        </Footer>
      </Layout>
    </Layout>
  );
};

