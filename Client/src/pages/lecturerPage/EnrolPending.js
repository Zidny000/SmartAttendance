/*
  All notification
 */

//react
import React, { useState} from "react";
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
  
  const [visible, SetVisible] = useState(false);
  const [selectedNotification, SetSelectedNotification] = useState({});
  const [approve, isApprove] = useState(false);
  const [fetchedLimit] = useState(10);


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
            {/* <Card className="notifications__card">
              {true &&
                notifications.map((notification) => (
                  <Notification
                    key={notification._id}
                    notification={notification}
                    handleApproveRejectButton={handleApproveRejectButton}
                  />
                ))}
              
             
            </Card> */}
            <Modal
              className="notification__modal"
              title={approve ? "Approve Enrolment" : "Reject Enrolment"}
              visible={visible}
              onOk={handleConfirm}
              onCancel={handleCancel}
              okButtonProps={{
                disabled:
                  approveEnrolmentStatus.loading ||
                  rejectEnrolmentStatus.loading,
              }}
              cancelButtonProps={{
                disabled:
                  approveEnrolmentStatus.loading ||
                  rejectEnrolmentStatus.loading,
              }}
            >
              {!rejectEnrolmentStatus.loading &&
              !approveEnrolmentStatus.loading ? (
                <div
                  className={
                    approve
                      ? "notification__approveConfirm"
                      : "notification__rejectConfirm"
                  }
                >
                  <p>
                    Are you sure to {approve ? "ACCEPT" : "REJECT"} the
                    following enrolment?
                  </p>
                  <p>
                    <strong>Title: </strong>
                    {selectedNotification.title}
                  </p>
                  <p>
                    <strong>Body: </strong>
                    {selectedNotification.content}
                  </p>
                </div>
              ) : (
                <Spin tip={approve ? "accepting" : "rejecting"}>
                  <div
                    className={
                      approve
                        ? "notification__approveConfirm"
                        : "notification__rejectConfirm"
                    }
                  >
                    <p>
                      Are you sure to {approve ? "ACCEPT" : "REJECT"} the
                      following enrolment?
                    </p>
                    <p>
                      <strong>Title: </strong>
                      {selectedNotification.title}
                    </p>
                    <p>
                      <strong>Body: </strong>
                      {selectedNotification.content}
                    </p>
                  </div>
                </Spin>
              )}
            </Modal>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
};


