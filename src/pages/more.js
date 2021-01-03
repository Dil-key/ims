import React from 'react'
import Sidebar from './sidebar'

export default function More() {
    return (
        <div className="more">
            <Sidebar/>
             <div className="wrapper">
        {/* Navbar */}

        <div className="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Sub Components of Computer-Laptop</h1>
                </div>
                <div class="col-sm-6"></div>
              </div>
            </div>
          </section>

          <div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-header">
      
        <div className="card-tools">
          <div className="input-group input-group-sm" style={{width: 300}}>
            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
            </div>
          </div>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body table-responsive p-0" style={{height: 400}}>
        <table className="table table-head-fixed text-nowrap table-bordered table-hover">
          <center>
          <thead>
           
              <th >Item Id</th>
              <th >Item Name</th>
              <th >Category</th>
              <th >Quatity</th>
              <th >Value</th>
              <th >Inventory Folio No.</th>
              <th >New Temporary Code</th>
              <th >Serial No.</th>
              <th >Sender</th>
              <th >Entered Date</th>
              <th >Warranty</th>
              <th>Temporary Location</th>
            
           
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td >Computer - Laptop</td>
              <td>Computer - Laptop</td>
              <td>1</td>
              <td>305,080.00</td>
              <td>57</td>
              <td>ITDEOFQCE01</td>
              <td>2CT2D1S</td>
             <td></td>
              <td>31/1/2005</td>
              <td />
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
              <td />
              <td>6/9/2007</td>
              <td />
              <td>Mr.Samantha</td>
              
            </tr>
            <tr>
              <td>3</td>
              <td>Computer - Laptop</td>
              <td>Computer - Laptop</td>
              <td>1</td>
              <td>292,900.00</td>
              <td>57</td>
              <td>ITDEOFQCE02</td>
              <td>17059589H</td>
              <td />
              <td>6/9/2007</td>
              <td />
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
              <td />
              <td>6/9/2007</td>
              <td />
              <td>Mr.Samantha</td>
            
            </tr>
            <tr>
              <td>5</td>
              <td>Computer - Laptop</td>
              <td>Computer - Laptop</td>
              <td>1</td>
              <td>305,080.00</td>
              <td>57</td>
              <td>ITDEOFQCE01</td>
              <td>2CT2D1S</td>
              <td />
              <td>31/1/2005</td>
              <td />
              <td>Mr.Samantha</td>
              
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
              <td />
              <td>31/1/2005</td>
              <td />
              <td>Mr.Samantha</td>
             
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
              <td />
              <td>31/1/2005</td>
              <td />
              <td>Mr.Samantha</td>
             
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
              <td />
              <td>31/1/2005</td>
              <td />
              <td>Mr.Samantha</td>
              
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
{/* /.row */}
{/* /.container-fluid */}
{/* /.content */}

        </div>
      </div>
        </div>
    )
}
