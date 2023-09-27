import React from "react";
import moment from "moment";
import { Card, Button, Space } from "antd";
import { ArrowRightOutlined, DeleteOutlined } from "@ant-design/icons";
import "./Course.css";

function Course() {
  return (
    <Card
      key={123}
      className="course"
      title={"ID: " + 321}
      extra={
        <Space>
          <Button >
            <ArrowRightOutlined />
          </Button>

          <Button
            className="course__deleteBtn"
            style={{ color: "red" }}
           
          >
            <DeleteOutlined />
          </Button>
        </Space>
      }
      bordered={false}
    >
      <p>
        <strong>Course Code</strong>: {'CSE-322'}
      </p>
      <p>
        <strong>Course Name</strong>: {'Software Lab'}
      </p>
      <p>
        <strong>Course Session</strong>: {'Spring-2023'}
      </p>
      <p>
        <strong>Course Host</strong>:{" "}
        {'Fahad' + " " + "Ahmed"}
      </p>
      <p>
        <strong>Created At</strong>: {'22/09/2024'}
      </p>
    </Card>
  );
}

export default Course;
