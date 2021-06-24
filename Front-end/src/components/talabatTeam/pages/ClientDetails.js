import React from 'react'
import './ClientDetails.css'
import DashboardNavbar from "./DashboardNavbar.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class ClientDetails extends React.Component {
    render(){
    return (
      <div>
        {/* <DashboardNavbar /> */}

        <div
          className="container"
          style={{ backgroundImage: "url(/sky.jpg)", width: "800px" }}
        >
          <div>
            <h1 className="text-white ml-3">Client Details</h1>
            {/* 
        <div className="form-group">
          <label>Full Name</label>
          <br></br>
          <span>walaa abdelmonem Elbasha</span>
        </div>
        <div className="form-group">
          <label>User Name</label>
          <br></br>
          <span>walaaElbasha</span>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <br></br>
          <span>walaa.elbasha40@gmail.com</span>
        </div>
        <div className="form-group">
          <label>Saved Addresses</label>
          <br></br>
          <span>Smouha,Alexandria,Egypt</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Back
        </button> */}

            <div className="row d-flex flex-row justify-content-center">
              <div
                className="profile-image col col-lg-6 "
                style={{ paddingLeft: "250px" }}
              >
                <img
                  src="profile.jpeg"
                  style={{ width: "100%", marginTop: "35px" }}
                ></img>
              </div>

              <div className="col col-lg-6">
                <div style={{ marginBottom: "40px" }}>
                  <i className="bi bi-person-circle"></i>

                  <label className="detailsLabel">Full Name</label>
                  <p className="userData" style={{ marginLeft: "15.5px" }}>
                    walaa abdelmonem Elbasha
                  </p>
                </div>
                <div style={{ marginBottom: "40px" }}>
                  <i className="bi bi-person"></i>
                  <label className="detailsLabel">User Name</label>
                  <p className="userData" style={{ marginLeft: "15.5px" }}>
                    walaaElbasha
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "40px" }}>
              <i className="bi bi-envelope-fill"></i>
              <label className="detailsLabel">User Email</label>
              <p className="userData" style={{ marginLeft: "15.5px" }}>
                walaaElbasha@yahoo.com
              </p>
            </div>
            <button className="backButton">Back</button>
          </div>
        </div>
      </div>
    );
}
}   

export default ClientDetails
