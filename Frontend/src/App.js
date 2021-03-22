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
import LAHome from "./pages/LAHome";
import LAProfile from "./pages/LAProfile";
import LAEditProfile from "./pages/LAEditProfile";
import HODHome from "./pages/HODHome";
import HODProfile from "./pages/HODProfile";
import HODEditProfile from "./pages/HODEditProfile";
import HODSearchItem from "./pages/HODSearchItem";
import HODLab01 from "./pages/HODLab01";
import HODLab02 from "./pages/HODLab02";
import HODLab03 from "./pages/HODLab03";
import HODLab04 from "./pages/HODLab04";
import HODLab05 from "./pages/HODLab05";
import HODLab06 from "./pages/HODLab06";
import HODLab07 from "./pages/HODLab07";
import HODLab08 from "./pages/HODLab08";


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
        <Route path="/LAHome" component={LAHome}/>
        <Route path="/LAProfile" component={LAProfile} />
        <Route path="/LAEditProfile" component={LAEditProfile} />
        <Route path="/HODHome" component={HODHome} />
        <Route path="/HODProfile" component={HODProfile} />
        <Route path="/HODEditProfile" component={HODEditProfile} />
        <Route path="/HODSearchItem" component={HODSearchItem} />
        <Route path="/HODLab01" component={HODLab01} />
        <Route path="/HODLab02" component={HODLab02} />
        <Route path="/HODLab03" component={HODLab03} />
        <Route path="/HODLab04" component={HODLab04} />
        <Route path="/HODLab05" component={HODLab05} />
        <Route path="/HODLab06" component={HODLab06} />
        <Route path="/HODLab07" component={HODLab07} />
        <Route path="/HODLab08" component={HODLab08} />

      </Switch>
    </Router>
  );
}
