import React from "react";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";


import Navbar from "../../components/common/Navbar";
import Greeting from "../../components/common/Greeting";
import StudentDashboard from "../studentPage/StudentDashboard";
import LecturerDashboard from "../lecturerPage/LecturerDashboard";

//comp
import Footer from "../../components/common/Footer";

//style
import "./Dashboard.css";

const { Sider, Content } = Layout;

export default (props) => {
  

  return (
    <Layout className="dashboard layout">
      <Sider collapsible collapsed={false} >
        <Navbar />
      </Sider>

      <Layout>
        <Greeting />

        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb__item">
            <Link to="/dashboard">Home</Link>
          </Breadcrumb.Item>
        </Breadcrumb>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ background: "#fff", padding: 24, minHeight: "81vh" }}
          >
            {/* {!user ? (
              <div>Something wrong...</div>
            ) : user.userLevel == 0 ? (
              <StudentDashboard user={user} {...props} />
            ) : user.userLevel == 1 ? (
              <LecturerDashboard user={user} {...props} />
            ) : (
              <div>Something wrong...</div>
            )} */}

            <StudentDashboard  {...props} />

            {/* <LecturerDashboard  {...props} /> */}
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
