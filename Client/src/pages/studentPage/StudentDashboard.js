import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/react-hooks";


import { Modal, Card, Button, Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Course from "./Course";
import "./StudentDashboard.css";

export default () => {
 
  const [selectedCourse, SetSelectedCourse] = useState({});
  const [fetchedLimit] = useState(10);
  const [visible, SetVisible] = useState(false);
  const [fetchedAllDone, SetFetchedAllDone] = useState(false);
 
  
  const showModal = () => {
    SetVisible(true);
  };

  const handleAccess = (course) => {
    SetSelectedCourse(course);
    SetVisible(true);
  };

  const handleDelete = (course) => {
    SetSelectedCourse(course);
    SetVisible(true);
  };

  const handleOk = (e) => {
    SetVisible(false);
  };

  const handleCancel = (e) => {
    SetVisible(false);
  };


  return (
    <Card className="studentDashboard__card">
      <Space direction="vertical" className="studentDashboard__space">
        <h1>Total Enrolled Course: {3}</h1>
        <br />
      
        <Course />
        <Course />
        <Course />
        
        {/* {courses && (
          <Modal
            title="Withdraw Course"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Delete"
          >
            <p>Are you sure to withdraw the following course?</p>
            <p>
              <strong>Course ID</strong>: {selectedCourse._id}
            </p>
            <p>
              <strong>Particular</strong>:{" "}
              {selectedCourse.code +
                "-" +
                selectedCourse.name +
                " (" +
                selectedCourse.session +
                ")"}
            </p>
          </Modal>
        )} */}

      
      </Space>
    </Card>
  );
};
