import React from "react";
import { useHistory } from "react-router-dom";
import HODSidebar from "../components/HODSidebar";

export default function HODHome() {
  const history = useHistory();

  const L1 = () => {
    history.push("./HODLab01");
  };

  const L2 = () => {
    history.push("./HODLab02");
  };

  const L3 = () => {
    history.push("./HODLab03");
  };

  const L4 = () => {
    history.push("./HODLab04");
  };

  const L5 = () => {
    history.push("./HODLab05");
  };

  const L6 = () => {
    history.push("./HODLab06");
  };

  const L7 = () => {
    history.push("./HODLab07");
  };

  const L8 = () => {
    history.push("./HODLab08");
  };

  return (
    <div className="content">
      <HODSidebar />

      {/* Navbar */}

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Locations</h1>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="lab01" onClick={L1}>
                  <div className="small-box bg-info">
                    <div className="btn btn-block btn-info ">
                      <h3>Lab 01</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="lab02" onClick={L2}>
                  <div className="small-box bg-info">
                    <div className="btn btn-block btn-info  ">
                      <h3>Lab 02</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./col */}

              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="lab03" onClick={L3}>
                  <div className="small-box bg-info">
                    <div className="btn btn-block btn-info">
                      <h3>Lab 03</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="lab04" onClick={L4}>
                  <div className="small-box bg-info">
                    <div className="btn btn-block btn-info">
                      <h3>Lab 04</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./col */}
            </div>
          </div>
        </section>
        {/* /.content */}

        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="lab05" onClick={L5}>
                  <div className="small-box bg-info">
                    <div className="btn btn-block btn-info">
                      <h3>Lab 05</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="lab06" onClick={L6}>
                  <div className="small-box bg-info">
                    <div className="btn btn-block btn-info">
                      <h3>Lab 06</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="lab07" onClick={L7}>
                  <div className="small-box bg-info">
                    <div className="btn btn-block btn-info ">
                      <h3>Lab 07</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="lab08" onClick={L8}>
                  <div className="small-box bg-info">
                    <div className="btn btn-block btn-info ">
                      <h3>Lab 08</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* ./col */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
