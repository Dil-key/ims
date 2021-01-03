import React from "react";
import "./header.css";

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand ">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />{" "}
          </a>
        </li>
        <li>
          <h5 className="ims">Inventory Management System</h5>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-bell" />
            <span className="badge badge-warning navbar-badge">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">
              3 Notifications
            </span>

            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2" /> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">
              See All Notifications
            </a>
          </div>
        </li>

        <button type="button" className="btn btn-default btn-sm">
          <span className="glyphicon glyphicon-log-out" /> Log out
        </button>
      </ul>
    </nav>
  );
}
