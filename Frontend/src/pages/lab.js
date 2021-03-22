import React from "react";
import { useHistory } from "react-router-dom";
import "./lab.css";
import Sidebar from "./sidebar";

export default function Lab() {
  const history = useHistory();
  const More = () => {
    history.push("/more");
  };
  return (
    <div className="lab">
      <Sidebar />

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Lab 01</h1>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3"></div>
              {/* /.col */}

              <div className="card">
                {/* /.card-header */}
                <div className="card-body">
                  <div className="tab-content">
                    <div className="active tab-pane" id="activity">
                      {/* Post */}
                      <div className="post">
                        <div className="row">
                          <div className="col-12">
                            <div className="card">
                              <div className="card-header">
                                <div className="card-tools">
                                  <div
                                    className="input-group input-group-sm"
                                    style={{ width: 150 }}
                                  >
                                    <input
                                      type="text"
                                      name="table_search"
                                      className="form-control float-right"
                                      placeholder="Search"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        type="submit"
                                        className="btn btn-default"
                                      >
                                        <i className="fas fa-search" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /.card-header */}
                              <div
                                className="card-body table-responsive p-0"
                                style={{ height: 500 }}
                              >

                              
                                <table className="table table-head-fixed text-nowrap table-bordered table-hover">
                                  <center>
                                    <thead style={{backgroundColor:"grey"}}>
                                      <tr>
                                      <th>Item Id</th>
                                      <th>Item Name</th>
                                      <th>Category</th>
                                      <th>Quatity</th>
                                      <th>Value</th>
                                      <th>Inventory Folio No.</th>
                                      <th>New Temporary Code</th>
                                      <th>Serial No.</th>
                                      <th>Sender</th>
                                      <th>Entered Date</th>
                                      <th>Warranty</th>
                                      <th>Temporary Location</th>
                                      <th>Sub Component</th>
                                      </tr>
                                    </thead>

                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>1</td>
                                        <td>305,080.00</td>
                                        <td>57</td>
                                        <td>ITDEOFQCE01</td>
                                        <td>2CT2D1S</td>
                                        <td></td>
                                        <td>31/1/2005</td>
                                        <td></td>
                                        <td>Mr.Samantha</td>
                                        <td>
                                          {" "}
                                          <button
                                            className="btn btn-primary"
                                            onClick={More}
                                          >
                                            More{" "}
                                          </button>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td>2</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>1</td>
                                        <td>292,900.00</td>
                                        <td>57</td>
                                        <td>ITDEOFQCE02</td>
                                        <td>17059589H</td>
                                        <td></td>
                                        <td>6/9/2007</td>
                                        <td></td>
                                        <td>Mr.Channa</td>
                                        <td></td>
                                      </tr>

                                      <tr>
                                        <td>3</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>1</td>
                                        <td>305,080.00</td>
                                        <td>57</td>
                                        <td>ITDEOFQCE01</td>
                                        <td>2CT2D1S</td>
                                        <td></td>
                                        <td>31/1/2005</td>
                                        <td></td>
                                        <td>Mr.Samantha</td>
                                        <td></td>
                                      </tr>

                                      <tr>
                                        <td>4</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>1</td>
                                        <td>292,900.00</td>
                                        <td>57</td>
                                        <td>ITDEOFQCE02</td>
                                        <td>17059589H</td>
                                        <td></td>
                                        <td>6/9/2007</td>
                                        <td></td>
                                        <td>Mr.Channa</td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </center>
                                </table>
                              </div>
                              {/* /.card-body */}
                            </div>
                            {/* /.card */}
                          </div>
                        </div>

                        {/* /.user-block */}
                      </div>
                      {/* /.post */}
                    </div>
                  </div>
                  {/* /.tab-content */}
                </div>
                {/* /.card-body */}
              </div>
              {/* /.nav-tabs-custom */}
            </div>
            {/* /.col */}

            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}
