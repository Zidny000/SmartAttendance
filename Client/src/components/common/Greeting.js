/*
  Greeting Header
*/

//react
import React from "react";
import { Link } from "react-router-dom";


//antd
import { Layout, Typography } from "antd";
import { BellOutlined, LoadingOutlined } from "@ant-design/icons";

//comp
import ProfileNav from "./ProfileNavbar";

//style
import "./Greeting.css";

const { Header } = Layout;
const { Title } = Typography;

export default () => {
 

  const greetMode = () => {
    let h = new Date().getHours();
    if (h >= 0 && h < 12) return "Morning";
    else if (h >= 12 && h <= 18) return "Afternoon";
    else return "Evening";
  };

  const countNotifications = (c) => {
    if (c !== 0)
      return <small className="greeting__notificationCount">{c}</small>;
  };

  return (
    <Header className="greeting__header">
      <Title className="greeting__title" level={4}>
        Good {greetMode()}, {'User'}
        <div className="greeting__profileNavbar">
          <ProfileNav profilePictureURL={'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1695308474~exp=1695309074~hmac=d35e121a12ce3283ea0a6978fdfd62956a424bfb95ccd17defc2e3dac234a146'} />
        </div>
        <Link
          to="/notification"
          title={`Notification (${0})`}
          
        >
          <div className="greeting__notification">
            <BellOutlined className="greeting__notificationIcon" />
            {false && <LoadingOutlined />}
            {countNotifications(0)}
          </div>
        </Link>
      </Title>
    </Header>
  );
};
