/*
  Specify navbar of user level
*/

//react
import React from "react";
import { Link } from "react-router-dom";

//context


//comp
import LecturerSiderNavbar from "../lecturerComponent/LecturerSiderNavbar";
import StudentSiderNavbar from "../studentComponent/StudentSiderNavbar";

export default () => {
  
  return (
    <>
      <Link to="/testing" style={{fontSize: "50px"}}>Testing</Link>

      {0 == 0 ? <StudentSiderNavbar /> : <LecturerSiderNavbar />}
    </>
  );
};
