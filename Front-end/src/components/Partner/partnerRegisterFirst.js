// import "./login.css";
import "./partnerRegister.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerLogin from "../partnerLogin/PartnerLogin";
import PartnerRegisterRest from "./PartnerRegisterRest";
import Success from "./success";
import { Step, Steps } from "react-step-builder";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import { toast } from "react-toastify";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
var Joi = require("joi-browser");

toast.configure();
// const PartnerRegisterFirst = () => {
class PartnerRegisterFirst extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      storeLocation: "",
      storetype: "",
      mobileNumber: "",
      email: "",
      storeName: "",
      NumberOfBranches: "",
      category: "",
      password: "",
      website: "",
      restaurantAddress: "",
      selectValue: "None",
      cpassword: "",
    };
  }

  handleChange = (e) => {
    this.setState({ selectValue: e.target.value });
    // console.log(`${selectValue}`);
  };

  handleChangestoreLocation = (e) => {
    this.setState({ storeLocation: e.target.value });
    // console.log(`${selectValue}`);
  };

  // selectCountry(val) {
  //   this.setState({ storeLocation: val });
  // }

  setInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //*****************
  // async componentDidMount() {
  //   //fetch all category from database
  //   let res = await fetch("http://127.0.0.1:8000/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       this.setState({
  //         category: result.selectValue,
  //       });
  //     });
  // }
  /****************/

  PostData = async (e) => {
    e.preventDefault();
    // http://localhost:8000/auth/restaurant/signup

    // const myCustomJoi = Joi.extend(require("joi-phone-number"));

    // console.log(
    //   myCustomJoi.string().phoneNumber().validate(this.state.mobileNumber)
    // );

    let res = await fetch("http://localhost:8000/auth/restaurant/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //key da al mwgod hank fe al back and value from form
        // name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        FirstName: this.state.firstName,
        LastName: this.state.lastName,
        storeLocation: this.state.storeLocation,
        MobileNumber: this.state.mobileNumber,
        name: this.state.storeName,
        numberOfBranches: this.state.NumberOfBranches,
        website: this.state.website,
        category: this.state.selectValue,
        cpassword: this.state.cpassword,
      }),
    });
    console.log(`${this.state.selectValue}`);
    console.log(`${this.state.storeLocation}`);
    console.log(`${this.state.storetype}`);
    // restaurantAddress: "",
    // category: this.state.,
    // console.log(
    //   `${FirstName} ${LastName} ${MobileNumber} ${email}  ${password} ${storename} ${numberOfBranches} ${category}`
    // );
    let resJson = await res.json();

    console.log(resJson.error);

    if (resJson.error.message == "Not Found") {
      M.toast({
        html: "Check mail information will revise and we will contact you",
        classes: "#c62828 red darken-3",
      });
    } else {
      if (resJson.error.details[0].message == "undefined") {
        if (typeof resJson.error === "undefined") {
          M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
        }
      } else {
        if (
          resJson.error.details[0].message ==
          '"MobileNumber" with value "012893626" fails to match the required pattern: /^\\d{3}\\d{3}\\d{3}\\d{2}$/'
        ) {
          M.toast({
            html: "Not Valid Mobile number",
            classes: "#c62828 red darken-3",
          });
        } else {
          M.toast({
            html: resJson.error.details[0].message,
            classes: "#c62828 red darken-3",
          });
        }
      }
    }

    //   if (resJson.error.details[0].message == "undefined") {
    //     if (typeof resJson.error === "undefined") {
    //       M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    //     } else {
    //       M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    //     }
    //   } else {
    //     M.toast({
    //       html: resJson.error.details[0].message,
    //       classes: "#c62828 red darken-3",
    //     });
    //   }
    // } else {
    //   M.toast({
    //     html: resJson.error.message,
    //     classes: "#c62828 red darken-3",
    //   });
    // }
    // console.log(resJson.error.details[0].message);
    // console.log(resJson.error.details);
    // if (resJson.error.details[0].message === "undefined") {
    //   if (typeof resJson.error === "undefined") {
    //     M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    //   } else {
    //     M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    //   }
    // }
  };
  render() {
    // const { country } = this.state;

    // var e = document.getElementById("category");

    // var categoryselected = e.value;
    // console.log("{categoryselected}");
    return (
      <form className="form-row" method="POST">
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
            value={this.state.firstName}
            onChange={this.setInputValue}
            name="firstName"
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
            value={this.state.lastName}
            onChange={this.setInputValue}
            name="lastName"
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
          <div>
            <select
              id="inputState"
              id="category"
              value={this.state.storeLocation}
              onChange={(e) => this.handleChangestoreLocation(e)}
              className="form-control"
            >
              <option> --None--</option>
              <option value="Kuwait"> Kuwait</option>
              <option value="KSA">KSA</option>
              <option value="Bahrain">Bahrain</option>
              <option value="UAE" selected="">
                UAE
              </option>
              <option value="Oman" selected="">
                Oman
              </option>
              <option value="Qatar" selected="">
                Qatar
              </option>
              <option value="Jordan" selected="">
                Jordan
              </option>
              <option value="Egypt" selected="">
                Egypt
              </option>
            </select>
            {/* <CountryDropdown
              // value={country}
              name="storeLocation"
              onChange={(val) => this.selectCountry(val)}
              className="form-control "
              value={this.state.storeLocation}
            /> */}
            {/* <RegionDropdown
              country={this.country}
              value={this.region}
              onChange={(val) => this.selectRegion(val)}
            /> */}
          </div>
        </div>
        {/* ************** */}

        {/* ************ */}
        <div className="form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
            htmlFor="phone"
          >
            Mobile Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="mobileNumber"
            className="form-control"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="XXXXXXXXXXXXX"
            value={this.state.mobileNumber}
            onChange={this.setInputValue}
            name="mobileNumber"
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
            value={this.state.email}
            onChange={this.setInputValue}
            name="email"
          />
        </div>
        {/* **************************** */}
        {/* ************************* */}
        {/* <div
          style={{
            padding: "10px",
            margin: "10px",
          }}
        ></div> */}
        {/* *************** *************************/}
        <div className="col form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Store Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Type Your store name"
            value={this.state.storeName}
            onChange={this.setInputValue}
            name="storeName"
          />
        </div>
        {/* // ***************************** */}
        <div className="col form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Number of Branches{" "}
          </label>
          <input
            // type="number"
            type="text"
            className="form-control"
            placeholder="Type Number of Outlet's you have"
            value={this.state.NumberOfBranches}
            onChange={this.setInputValue}
            name="NumberOfBranches"
          />
        </div>
        {/* // ********************* */}
        {/* <div className="form-group ">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            store Location
          </label>

          <select
            id="inputState"
            id="category"
            value={this.state.storetype}
            onChange={(e) => this.handleChangestoreType(e)}
            className="form-control"
          >
            <option> --None--</option>
            <option value="Restaurant"> Restaurant</option>
            <option value="Cofee">Cofee</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Electronics" selected="">
              Electronics
            </option>
          </select>
        </div> */}
        {/* //****************** */}
        <div className="form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Category
          </label>

          <form>
            {/* ****************** */}
            {/* { this.state.category >0 ?this.state.category.map((category) => {

            })} */}
            {/* ******************** */}
            <select
              id="category"
              value={this.state.selectValue}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
            >
              <option> Select value </option>
              <option value="Fast Food"> Fast Food</option>
              <option value="Desserts">Desserts</option>
              <option value="Egyptian">Egyptian</option>
              <option value="Fried Chicken">Fried Chicken</option>
              {/* <option>Chocolate</option>
              <option>Coffee</option> */}
            </select>
          </form>
        </div>
        {/* //************************ */}
        <div className="form-group">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Website / Social media{" "}
          </label>
          <input
            // type="number"
            type="text"
            className="form-control"
            placeholder="www.example.com"
            value={this.state.website}
            onChange={this.setInputValue}
            name="website"
          />
        </div>
        {/* //******************* */}
        {/* <div className="form-group ">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Restaurant Address{" "}
          </label>
          <div class="input-group">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search here......."
              aria-label="Search"
              aria-describedby="search-addon"
            />

            <button type="button" className="btn btn-outline-primary">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div> */}
        {/* ******************** */}
        {/* <div
          style={{
            padding: "10px",
            margin: "10px",
          }}
        ></div> */}
        {/* ********************** */}
        {/* <!-- Password input --> */}
        <label
          className="fs-4"
          style={{
            float: "left",
          }}
        >
          Password
        </label>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            htmlFor="registerPassword"
            placeholder="password"
            name="password"
            // onChange={this.handelchange}
            onChange={this.setInputValue}
            value={this.state.password}
          />
        </div>
        {/* ************************** */}
        {/* <!-- Password input --> */}
        <label
          className="fs-4"
          style={{
            float: "left",
          }}
        >
          Confirm Password
        </label>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="cPassword"
            className="form-control"
            htmlFor="cPassword"
            placeholder="Confirm password"
            name="cpassword"
            // onChange={this.handelchange}
            onChange={this.setInputValue}
            value={this.state.cpassword}
          />
        </div>
        {/* ***************************** */}
        <button
          id="submit"
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
          onClick={(e) => this.PostData(e)}
        >
          Submit
        </button>
        {/* **************** */}

        {/* ************ */}

        {/* ************************** */}
      </form>
    );
  }
}
export default PartnerRegisterFirst;
