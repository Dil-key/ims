import React from 'react'
import LASidebar from '../components/LASidebar'

export default function LAEditProfile() {
    return (
        <div className="LAEditProfile">
            <LASidebar />

            <div className="content-wrapper">
        <div className="card card-primary">
          <center>
            <h1>
              <b>Edit Profile</b>
            </h1>

            <hr></hr>
            <div class="col-md-6">
              <form role="form ">
                <div className="card-body ">
                  <div className="form-group">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/professions-46/140/girl__avatar__female__professional__employee-512.png"
                      className="img-circle elevation-2"
                      alt="User Image"
                      height="300"
                      width="300"
                    />
                  </div>

                  <div className="form-group row">
                    <label htmlFor="exampleInputUserName">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUserName"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="form-group row">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group row">
                    <label htmlFor="exampleInputPhoneNo">Phone Number</label>
                    <input
                      type="text"
                      pattern="[0-9]*"
                      maxLength="10"
                      className="form-control"
                      id="exampleInputPhoneNo"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group row">
                    <label htmlFor="exampleInputPosition">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPosition"
                      placeholder="Position"
                    />
                  </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer ">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <hr></hr>
          </center>
        </div>
      </div>
            
        </div>
    )
}
