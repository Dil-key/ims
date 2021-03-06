import React from 'react'
import { useHistory } from "react-router-dom";

export default function TOsidebar() {

    const history = useHistory();

    const Home = () => {
      history.push("./content");
    };
    const MyPro = () => {
      history.push("./profile");
    };
    const AddItem = () => {
      history.push("./additem");
    };
    const MaintanTable = () => {
      history.push("./maintanance");
    };
    const MaintanForm = () => {
      history.push("./maintananceform");
    };
    const DeductTable = () => {
      history.push("./deduction");
    };
    const DeductForm = () => {
      history.push("./deductionform");
    };
    return (
        <div>
            <div className="sidebar1">
      <aside className="main-sidebar ">
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
                Alexander Pierce
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav class="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item" onClick={Home}>
                <a href="./index2.html" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="link-1">Home </p>
                </a>
              </li>

              <li className="nav-item" onClick={MyPro}>
                <a href="./index2.html" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="link-2">My Profile</p>
                </a>
              </li>
              <li className="nav-item" onClick={AddItem}>
                <a href="./index2.html" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="link-3">Add Items</p>
                </a>
              </li>
              <li className="nav-item" onClick={MaintanTable}>
                <a href="./index2.html" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="link-4">Maintanance Table</p>
                </a>
              </li>
              <li className="nav-item" onClick={MaintanForm}>
                <a href="./index2.html" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="link-5">Maintanance Form</p>
                </a>
              </li>
              <li className="nav-item" onClick={DeductTable}>
                <a href="./index2.html" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="link-6">Deduction Table</p>
                </a>
              </li>
              <li className="nav-item" onClick={DeductForm}>
                <a href="./index2.html" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="link-7">Deduction Form</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div> 
        </div>
    )
}
