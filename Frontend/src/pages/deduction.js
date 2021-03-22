import React from "react";
import Sidebar from "./sidebar";

export default function Deduction() {
  return (
    <div className="deduction">
      <Sidebar />

      {/* Navbar */}

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Deduction Table</h1>
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
                                    <thead>
                                      <tr>
                                        <th>Deduction No.</th>
                                        <th>Inventory Id</th>
                                        <th>Item Name</th>
                                        <th>Item Category</th>
                                        <th>Inventory Location</th>
                                        <th>Date</th>
                                        <th>Description</th>
                                      </tr>
                                    </thead>

                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>Mr.Samantha</td>
                                        <td>09/02/2005</td>
                                        <td>Description</td>
                                      </tr>

                                      <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>Mr.Samantha</td>
                                        <td>09/02/2005</td>
                                        <td>Description</td>
                                      </tr>
                                      <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>Mr.Samantha</td>
                                        <td>09/02/2005</td>
                                        <td>Description</td>
                                      </tr>
                                      <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>Mr.Samantha</td>
                                        <td>09/02/2005</td>
                                        <td>Description</td>
                                      </tr>

                                      <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>Mr.Channa</td>
                                        <td>03/04/2009</td>
                                        <td>Description</td>
                                      </tr>

                                      <tr>
                                        <td>3</td>
                                        <td>6</td>
                                        <td>CPU</td>
                                        <td>Computer - Dekstop</td>
                                        <td>Mr.Dimuthu</td>
                                        <td>09/02/2005</td>
                                        <td>Description</td>
                                      </tr>

                                      <tr>
                                        <td>4</td>
                                        <td>10</td>
                                        <td>Computer - Laptop</td>
                                        <td>Computer - Laptop</td>
                                        <td>Mr.Channa</td>
                                        <td>03/04/2009</td>
                                        <td>
                                          Description
                                          DescriptionDescriptionDescriptionDescription
                                        </td>
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
