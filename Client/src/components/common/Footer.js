/*
    footer use
*/

//react
import React from "react";

//antd
import { Layout } from "antd";

const { Footer } = Layout;
export default () => (
  <Footer style={{ textAlign: "center" }}>
    <span>Samrt Attendance @ {new Date().getFullYear()}</span>
  </Footer>
);
