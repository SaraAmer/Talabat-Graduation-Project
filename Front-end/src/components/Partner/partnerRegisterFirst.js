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

toast.configure();
// const PartnerRegisterFirst = () => {
class PartnerRegisterFirst extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      country: "",
      region: "",
    };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  // selectRegion(val) {
  //   this.setState({ region: val });
  // }
  setInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  PostData = async (e) => {
    e.preventDefault();
    // if (
    //   !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //     this.email
    //   )
    // ) {
    //   // toastr.info("Are you the 6 fingered man?");
    //   M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
    //   //************/
    //   /********** */
    //   console.log("invalid email");
    //   // alert("*************invalid email*****************");
    //   return;
    // }

    // http://localhost:8000/auth/restaurant/signup
    let res = await fetch("http://localhost:8000/auth/restaurant/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //key and value from form
        // name: this.state.name,
        password: this.state.password,
        email: this.state.email,
      }),
    });
    let resJson = await res.json();
    console.log(resJson.error);
    if (typeof resJson.error === "undefined") {
      M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    } else {
      M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    }
  };
  // componentWillMount()
  // {
  //   this.
  // }
  // }
  // setInputValue = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  //const [image,setImage] = useState("")
  render() {
    const { country } = this.state;
    // document.getElementById("submit").addEventListener("click", function () {
    //   // alert("button clicked");
    // });

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
            value={this.state.name}
            onChange={this.setInputValue}
            name="name"
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
          {/* <select id="inputState" className="form-control">
            <option> Choose...</option>
            <option>Uzbekistan</option>
            <option>Russia</option>
            <option selected="">United States</option>
            <option>India</option>
            <option>Afganistan</option>
          </select> */}
          <div>
            <CountryDropdown
              value={country}
              name="country"
              onChange={(val) => this.selectCountry(val)}
              className="form-control "
            />
            {/* <RegionDropdown
              country={this.country}
              value={this.region}
              onChange={(val) => this.selectRegion(val)}
            /> */}
          </div>
        </div>
        {/* ************** */}
        {/* <div
          style={{
            padding: "20px",
            margin: "20px",
          }}
        ></div> */}
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
            value={this.state.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={this.setInputValue}
            name="email"
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
          <select id="inpute" className="form-control">
            <option> --None--</option>
            <option>Owner</option>
            <option>Co-Owner</option>
            <option selected="">Manager</option>
            <option>Employee</option>
          </select>
        </div>
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
          />
        </div>
        {/* // ********************* */}
        <div className="form-group ">
          <label
            className="fs-4"
            style={{
              float: "left",
            }}
          >
            Store Type
          </label>
          <select id="inputState" className="form-control">
            <option> --None--</option>
            <option> Restaurant</option>
            <option>Cofee</option>
            <option>Cosmetics</option>
            <option selected="">Electronics</option>
            <option>Entertainment</option>
          </select>
        </div>
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
          <select id="inputState" className="form-control">
            <option> Select value </option>
            <option> Fast Food</option>
            <option>Desserts</option>
            <option>Egyptian</option>
            <option selected="">Fried Chicken</option>
            <option>Chocolate</option>
            <option>Coffee</option>
          </select>
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
          />
        </div>
        {/* //******************* */}
        <div className="form-group ">
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
        </div>
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
            // value={this.state.password}
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
