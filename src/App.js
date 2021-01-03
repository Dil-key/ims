import React from "react";
import Content from "./components/content";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Editprofile from "./pages/editprofile";
import Lab from "./pages/lab";
import lab02 from "./pages/lab02";
import lab03 from "./pages/lab03";
import lab04 from "./pages/lab04";
import lab05 from "./pages/lab05";
import lab06 from "./pages/lab06";
import lab07 from "./pages/lab07";
import lab08 from "./pages/lab08";
import maintanance from "./pages/maintanance";
import addItem from "./pages/addItem";
import deduction from "./pages/deduction";
import "./App.css";
import maintananceform from "./pages/maintainanceform";
import deductionform from "./pages/deductionform";
import lecturer from "./components/lecturer";

import profileForLecturer from "./components/profileForLecturer";
import Editprofileforlecturer from "./components/editprofileforlecturer";
import MenuForLecturer from "./components/menuForLecturer";
import More from "./pages/more";


export default function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/content" component={Content} />
        <Route path="/profile" component={Profile} />
        <Route path="/editprofile" component={Editprofile} />
        <Route path="/lab" component={Lab} />
        <Route path="/lab02" component={lab02} />
        <Route path="/lab03" component={lab03} />
        <Route path="/lab04" component={lab04} />
        <Route path="/lab05" component={lab05} />
        <Route path="/lab06" component={lab06} />
        <Route path="/lab07" component={lab07} />
        <Route path="/lab08" component={lab08} />
        <Route path="/maintanance" component={maintanance} />
        <Route path="/additem" component={addItem} />
        <Route path="/deduction" component={deduction} />
        <Route path="/maintananceform" component={maintananceform} />
        <Route path="/deductionform" component={deductionform} />
        <Route path="/lecturer" component={lecturer} />
        
        <Route path="/menuforlecturer" component={MenuForLecturer} />
        <Route path="/profileforlecturer" component={profileForLecturer} />
        <Route path="/editprofileforlecturer" component={Editprofileforlecturer} />
        <Route path="/more" component={More} />
      </Switch>
    </Router>
  );
}
