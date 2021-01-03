import React from "react";
import Sidebar from "./sidebar";

export default function maintananceform() {
  return (
    <div className="maintananceform">
<Sidebar/>

      <div className="wrapper">
        <div className="content-wrapper">
          <div className="row mb-5">

          </div>
          <center>
            <div className="col-md-8">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Maintanance Form</h3>
                </div>
                <form className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputDeductionNo3"
                        className="col-sm-2 col-form-label"
                      >
                        Maintanance No.
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="inputDeductionNo3"
                          placeholder="Deduction No."
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputInventoryNo3"
                        className="col-sm-2 col-form-label"
                      >
                        Inventory No.
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="inputInventoryNo3"
                          placeholder="Inventory No."
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputItemName3"
                        className="col-sm-2 col-form-label"
                      >
                        Item Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputItemName3"
                          placeholder="Item Name"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputItemCategory3"
                        className="col-sm-2 col-form-label"
                      >
                        Item Category
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputItemCategory3"
                          placeholder="Item Category"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputInventoryLocation3"
                        className="col-sm-2 col-form-label"
                      >
                        Inventory Location
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputInventoryLocation3"
                          placeholder="Inventory Location"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputDate3"
                        className="col-sm-2 col-form-label"
                      >
                        Date
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="date"
                          className="form-control"
                          id="inputDate3"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputDescription3"
                        className="col-sm-2 col-form-label"
                      >
                        Description
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputDescription3"
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                     
           
                      <button
                        type="submit"
                        className="btn btn-primary float-right"
                        
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
