/*
  All notification
 */

//react
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";


//antd
import { Layout, Button, Modal, Breadcrumb, Card, Spin, message } from "antd";

//comp
import Navbar from "../../components/common/Navbar";
import Greeting from "../../components/common/Greeting";
import Notification from "./Notification";
import Footer from "../../components/common/Footer";


//style
import "./Notifications.css";

const { Sider, Content } = Layout;

export default () => {


  const [fetchedLimit] = useState(10);
  const notifications = [
    {
      checked : true,
      title : 'Notification 1',
      content : 'Notification 1 Content'
    },
    {
      checked : true,
      title : 'Notification 2',
      content : 'Notification 2 Content'
    },
    {
      checked : false,
      title : 'Notification 3',
      content : 'Notification 3 Content'
    },
    {
      checked : false,
      title : 'Notification 4',
      content : 'Notification 4 Content'
    }
  ]


  return (
    <div className="notifications">
      <Layout className="notifications layout">
        <Sider collapsible collapsed={false} >
          <Navbar />
        </Sider>
        <Layout>
          <Greeting />
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb__item">
              <Link to="/notification">Notification</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="notifications__content">
            <Card className="notifications__card">
              {notifications &&
                notifications.map((notification) => (
                  <Notification
                    key={notification._id}
                    notification={notification}
                  />
                ))}

            </Card>
           
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};


