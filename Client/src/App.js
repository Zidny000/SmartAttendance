import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/common/Home";
import SignIn from "./pages/common/SignIn";
import SignUp from "./pages/common/SignUp";
import NoFound from "./pages/common/NoFound";
import Profile from "./pages/common/Profile";
import Dashboard from "./pages/common/Dashboard";
import Notifications from "./pages/common/Notifications";
import AddCourse from "./pages/lecturerPage/AddCourse";

import TakeAttendance from "./pages/lecturerPage/TakeAttendance";
import CourseDetails from "./pages/lecturerPage/CourseDetails";

import "./App.css";

function App() {
  return (
   
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/notification" component={Notifications} />
          <Route exact path="/course/:id" component={CourseDetails} />
          <Route exact path="/addcourse" component={AddCourse} />
          
          <Route
            exact
            path="/course/:id/takeattendance"
            component={TakeAttendance}
          />

          <Route component={NoFound} />
        </Switch>
      </Router>
         
  );
}

export default App;
