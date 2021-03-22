import React from "react";
import "./LASidebar.css";
import { useHistory } from "react-router-dom";

import { IconContext } from "react-icons";
export default function LASidebar() {
  const history = useHistory();
  const LAHome = () => {
    history.push("./LAHome");
  };
  const LAMyPro = () => {
    history.push("./LAProfile");
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <aside className="main-sidebar">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png"
            alt="campus logo"
            width="50"
            height="50"
          />
          <span className="brand-text font-weight-light">
            <small>Department of IT</small>
          </span>
        </a>
        {/* Sidebar */}

        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://cdn3.iconfinder.com/data/icons/professions-46/140/girl__avatar__female__professional__employee-512.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
              Lab Attendant
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item" onClick={LAHome}>
                <a className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="link-1">Home</p>
                </a>
              </li>
              <li className="nav-item" onClick={LAMyPro}>
                <a className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p className="link-2">My Profile</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </IconContext.Provider>
  );
}
