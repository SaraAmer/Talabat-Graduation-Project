// import "./login.css";
import "./partnerRegister.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerLogin from "../partnerLogin/PartnerLogin";
import PartnerRegisterRest from "./PartnerRegisterRest";
import Success from "./success";
import { Step, Steps } from "react-step-builder";
class PartnerRegisterFirst extends React.Component {
  render() {
    return (
      <form className="form-row">
        {/* ***** */}
        <div className="col form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            First name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Type Your First Name"
          />
        </div>
        {/* ***** */}
        <div className="col form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Type Your Last Name"
          />
        </div>
        {/* ***** */}
        {/* "form-group col-md-6" */}
        <div className="form-group ">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            store Location
          </label>
          <select id="inputState" className="form-control">
            <option> Choose...</option>
            <option>Uzbekistan</option>
            <option>Russia</option>
            <option selected="">United States</option>
            <option>India</option>
            <option>Afganistan</option>
          </select>
        </div>
        {/* ************ */}
        <div className="form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
            for="phone"
          >
            Mobile Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="+9715XXXXXXXX"
          />
        </div>
        {/* ******************* */}
        <div className="form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="email@gmail.com"
          />
        </div>
        {/* **************************** */}
        <div className="form-group ">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Contact role
          </label>
          <select id="inputState" className="form-control">
            <option> --None--</option>
            <option>Owner</option>
            <option>Co-Owner</option>
            <option selected="">Manager</option>
            <option>Employee</option>
          </select>
        </div>
        {/* ************************* */}
        <div
          style={{
            padding: "10px",
          }}
        ></div>
        {/* *************** */}
        {/* <button
     type="submit"
     className="btn btn-lg btn-block form-control"
     style={{
       textAlign: "center",
       backgroundColor: "#FF5900",
       color: "white",
       marginLeft: "30px",
       borderRadius: "15px",
       width: "150px",
     }}
   >
     Next
   </button> */}

        {/* ************************** */}
      </form>
    );
  }
}
export default PartnerRegisterFirst;
