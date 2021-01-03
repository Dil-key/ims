import React from "react";
import "./lab.css";
import Sidebar from "./sidebar";

export default function Lab05() {
  return (
    <div className="lab05">
      <Sidebar />

      <div className="wrapper">
        {/* Navbar */}

        <div className="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Lab 05</h1>
                </div>
                <div class="col-sm-6"></div>
              </div>
            </div>
          </section>

          <div class="card">
            <div class="card-header">
              <h5>
                Filter : <input type="text" name="position" />
              </h5>
            </div>

            <table id="example1" class="table table-bordered">
              <thead>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
