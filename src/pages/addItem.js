import React from "react";
import Sidebar from "./sidebar";

export default function addItem() {
  return (
    <div className="addItem">
<Sidebar/>

      <div className="wrapper">
        <div className="content-wrapper">
          <div className="row mb-5">

          </div>
          <center>
            <div className="col-md-10">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Add Item</h3>
                </div>
                <form className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputDeductionNo3"
                        className="col-sm-2 col-form-label"
                      >
                        Item No.
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="inputDeductionNo3"
                          placeholder="Item No."
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
                        htmlFor="inputQuantity3"
                        className="col-sm-2 col-form-label"
                      >
                       Quantity
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="inputQuantity3"
                          placeholder="Quantity"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputValue3"
                        className="col-sm-2 col-form-label"
                      >
                        Value
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="inputValue3"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputInventoryFolioNo3"
                        className="col-sm-2 col-form-label"
                      >
                        Inventory Folio No.
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="inputInventoryFolioNo3"
                          placeholder="Inventory Folio No."
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputTemporaryCode3"
                        className="col-sm-2 col-form-label"
                      >
                        New Temporary Code
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputTemporaryCode3"
                          placeholder="New Temporary Code"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputSerialNo3"
                        className="col-sm-2 col-form-label"
                      >
                        Serial No.
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputSerialNo3"
                          placeholder="Serial No."
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputSender3"
                        className="col-sm-2 col-form-label"
                      >
                       Sender
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputSender3"
                          placeholder="Sender"
                        />
                      </div>
                    </div>
                   
                    <div className="form-group row">
                      <label
                        htmlFor="inputDate3"
                        className="col-sm-2 col-form-label"
                      >
                        Entered Date
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
                        htmlFor="inputWarranty3"
                        className="col-sm-2 col-form-label"
                      >
                       Warranty
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputWarranty3"
                          placeholder="Warranty"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputTemporaryLocation3"
                        className="col-sm-2 col-form-label"
                      >
                        Temporary Location
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputTemporaryLocation3"
                          placeholder="Temporary Location"
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
