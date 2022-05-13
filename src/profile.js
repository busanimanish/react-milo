import React from 'react'
import './profile.css';
function Profile() {
    return (
        <div>
        <h2 className='text-center'>Profile</h2>
        <form className='fn'>
          <div className="reg">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              required
            ></input>
          </div>
          <div className="reg">
            <label>Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              required
            ></input>
          </div>
          <div className="reg">
            <label>Website</label>
            <input
              type="text"
              class="form-control"
              placeholder="website.com"
              required
            ></input>
          </div>
          <div className="reg">
            <label>Country</label>
            <input
              type="text"
              class="form-control"
              placeholder="India"
              required
            ></input>
          </div>
        </form>
        <form className='fn'>
          <div className="reg">
            <label>State</label>
            <input
              type="text"
              class="form-control"
              placeholder="Telangana"
              required
            ></input>
          </div>
          <div>
            <label>No.of streamers </label>
            <input
              type="text"
              class="form-control"
              placeholder="5"
              required
            ></input>
          </div>
          <div className="reg">
            <label>Contact Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              required
            ></input>
          </div>
          <div className="con">
            <label>Phone</label>
            <input
              type="text"
              class="form-control"
              placeholder="India"
              required
            ></input>
          </div>
        </form>
        <form className='fn'>
          <div className="reg">
            <label>Designation</label>
            <input
              type="text"
              class="form-control"
              placeholder="Employee"
              required
            ></input>
          </div>
          <div className="reg">
            <label>Experience in years</label>
            <input
              type="text"
              class="form-control"
              placeholder="2"
              required
            ></input>
          </div>
        </form>
        <h2 className='text-center'>Bank Details</h2>
        <form className='fn' >
          <div className="reg">
            <label>Account Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Account number"
              required
            ></input>
          </div>
          <div className="reg">
            <label>Accound holder name</label>
            <input
              type="text"
              class="form-control"
             
              placeholder="name"
              required
            ></input>
          </div>
          <div className="reg">
            <label>IFSC code</label>
            <input
              type="text"
              class="form-control"
              placeholder="IFSC code"
              required
            ></input>
          </div>
          <div className="reg">
            <label>Bank name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Bank name"
              required
            ></input>
          </div>
        </form>
      </div>
    )
}

export default Profile
