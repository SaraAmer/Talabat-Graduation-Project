import "./partnerlogin.css";
import React, { Component } from "react";
// var Joi = require("joi-browser");
import M from "materialize-css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ResetPassword from "./ResetPassword";
class PartnerLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  setInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  PostData = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:8000/auth/restaurant/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //key and value from form
        password: this.state.password,
        email: this.state.email,
      }),
    });
    let resJson = await res.json();
    console.log(resJson.error);
    if (typeof resJson.error === "undefined") {
      //save to localstorage
      localStorage.setItem("jwt", resJson.token);
      // localStorage.setItem("id", resJson.id);
      localStorage.setItem("id", resJson.id);
      // localStorage.setItem("user", JSON.stringify(resJson.user));
      // window.location.href = "http://localhost:3000/restaurant/dashboard";
      M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
      window.location.reload();
      // alert(resJson.message);
    } else {
      M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
      // alert(resJson.error);
    }
  };

  render() {
    return (
      <Router>
        <div className="bg-images">
          <section className="countss">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6"></div>

                <div className="col-lg-6 col-md-12 mt-5 mt-md-0">
                  <div className="count-box">
                    <i className="icofont-patient-bed">
                      <span
                        style={{
                          // marginTop: "200px",
                          fontSize: "15px",
                          textAlign: "center",
                          color: "white",
                          borderRadius: "50%",
                        }}
                      >
                        talabt
                      </span>
                    </i>
                    {/* **************************Form ********************************************** */}
                    <form method="POST">
                      <div className="text-center mb-3">
                        <div className="row mg-btm">
                          <div
                            className="col-md-12"
                            style={{
                              textAlign: "center",
                              fontWeight: "bolder",
                            }}
                          >
                            Welcome to the Talabat Portal
                          </div>
                          <div
                            style={{
                              textAlign: "center",
                              marginTop: "20px",
                              fontWeight: "20px",
                              color: "grey",
                            }}
                          >
                            If you’re unable to login or recover your password
                            (link below), please contact your account manager.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4 mt-25">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          placeholder="E-mail"
                          value={this.state.email}
                          onChange={this.setInputValue}
                          name="email"
                        />
                      </div>
                      {/* Password field */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="Password"
                          className="form-control"
                          htmlfor="registerPassword"
                          placeholder="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.setInputValue}
                        />
                      </div>

                      {/*********submit button ********/}
                      <button
                        type="submit"
                        className="btn  btn-block"
                        style={{
                          textAlign: "center",
                          backgroundColor: "#4169e1",
                          color: "white",
                          width: "150px",
                        }}
                        onClick={(e) => this.PostData(e)}
                      >
                        LOGIN
                      </button>

                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          color: "#4169e1",
                          fontSize: "10px",
                          marrginRight: "20px",
                        }}
                      >
                        <a href="/resetpassword">FORGET PASSWORD ?</a>
                      </p>
                    </form>

                    {/*  */}
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0"></div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0"></div>
              </div>
            </div>
          </section>

          {/* ****************************************** */}
          <div
            style={{
              padding: "30px",
            }}
          ></div>
          {/* ***********************************New **************************************************************** */}

          {/* *********************************************** */}
        </div>
        {/* <Switch>
          <Route path="/resetpassword" exact component={ResetPassword}></Route>
        </Switch> */}
        <Route exact path="/resetpassword">
          <ResetPassword />
        </Route>
      </Router>
    );
  }
}
export default PartnerLogin;
