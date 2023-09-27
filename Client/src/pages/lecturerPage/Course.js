import React from "react";
import { Card, Button, Space } from "antd";
import { ArrowRightOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";

import "./Course.css"

export default () => {
  return (
    <Card
      className="course"
      key={124}
      title={"ID: " + 'CSE-322'}
      extra={
        <Space>
          <Button >
            <ArrowRightOutlined />
          </Button>

          <Button className="course__deleteBtn" >
            <DeleteOutlined />
          </Button>
        </Space>
      }
    >
      <p>
        <strong>Course Code</strong>: {'CSE-325'}
      </p>
      <p>
        <strong>Course Name</strong>: {'Software Lab'}
      </p>
      <p>
        <strong>Course Session</strong>: {'Spring-2023'}
      </p>
      <p>
        <strong>Created At</strong>: {'22/09/2023'}
      </p>
    </Card>
  );
};
