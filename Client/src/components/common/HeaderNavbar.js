/*
  Login Header
*/ 

//react
import React from "react";
import { Link } from "react-router-dom";

//antd
import { Layout, Avatar } from "antd";

//comp
import FrontGateMenu from "./FrontGateMenu";

//style
import "./HeaderNavbar.css";

const { Header } = Layout;

export default () => {

   
  return (
    <div className="headerNavbar">
      <Header>
      <Link to ="/">
        <div className="headerNavbar__logo">
          <Avatar
            className="avatar"
            size="large"
            alt="Face In"
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            onError={(err) => {
              console.log(err);
            }}
          />
          <div className="headerNavbar__text">
            <span className="headerNavbar__text__item">Smart</span>
            <span className="headerNavbar__text__item">Attendance</span>
          </div>
        </div>
        </Link>
        <div className="headerNavbar__menu">
            <FrontGateMenu />
        </div>
      </Header>
    </div>
  );
};
