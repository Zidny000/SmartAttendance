import React, { useState } from "react";


import { Modal, Card, Space, Button, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Course from "./Course";
import "./LecturerDashboard.css";

export default (props) => {

  const [fetchedLimit] = useState(10);
  const [visible, SetVisible] = useState(false);
  const [selectedCourse, SetSelectedCourse] = useState({});




  return (
    <div id="lecturerDashboard">
      <Card className="lecturerDashboard__card">
        <Space direction="vertical" className="lecturerDashboard__space">
          <h1>
            Total Created Course:{" "}
            {false? (
              <LoadingOutlined />
            ) : (
              3
            )}
          </h1>
          <br />
         
          
          <Course />
          <Course />
          <Course />
         

        
          {/*TODO: Still no very perfect when navigate to other page*/}
         

          {/* {courses && (
            <Modal
              className="lecturerDashboard__modal"
              title="Delete Course"
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
              okButtonProps={{disabled: deleteCourseStatus.loading } }
              cancelButtonProps={{ disabled: deleteCourseStatus.loading }}
              okText="Delete"
            >
              {!deleteCourseStatus.loading ? (
                <div className="lecturerDashboard__deleteConfirm">
                  <p>Are you sure to delete the following course?</p>
                  <p>
                    <strong>Course ID</strong>: {selectedCourse.shortID}
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
                </div>
              ) : (
                <Spin
                  className="lecturerDashboard__deleteLoading"
                  tip="Deleting..."
                >
                  <p>Are you sure to delete the following course?</p>
                  <p>
                    <strong>Course ID</strong>: {selectedCourse.shortID}
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
                </Spin>
              )}
            </Modal>
          )}
          */}
        </Space>
      </Card>
    </div>
  );
};
