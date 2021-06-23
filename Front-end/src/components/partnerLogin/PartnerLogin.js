import "./partnerlogin.css";
import React, { Component } from "react";
var Joi = require("joi-browser");
class PartnerLogin extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  handelchange = (e) => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value;
    this.setState(state);
  };

  handlesubmit = (e) => {
    console.log("submit");
  };
  //***
  // schema = {
  //   email: Joi.string().email().required(),
  //   password: Joi.string()
  //     .regex(/[a-zA-Z0-9]{3,30}/)
  //     .required(),
  // };

  // validate = () => {
  //   const errors = {};
  //   const state = { ...this.state };
  //   delete state.errors;
  //   const res = Joi.validate(state, this.schema, { abortEarly: false });
  //   console.log(res);
  //   if (res.error == null) {
  //     this.setState({ errors: {} });
  //     return null;
  //   }
  //   for (const error of res.error.details) {
  //     errors[error.path] = error.message;
  //   }
  //   this.setState({ errors });
  // };
  /*** */

  render() {
    return (
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
                  <form action="/restaurant/dashboard"  onSubmit={this.handlesubmit}>
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
                        name="email"
                        onChange={this.handelchange}
                        value={this.state.email}
                      />
                    </div>
                    {/* display Error */}
                    {/* {this.state.errors.email && (
                      <div className="alert alert-danger">
                        {" "}
                        {this.state.errors.email}
                      </div>
                    )} */}
                    {/* Password field */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="Password"
                        className="form-control"
                        htmlfor="registerPassword"
                        placeholder="password"
                        name="password"
                        onChange={this.handelchange}
                        value={this.state.password}
                      />
                    </div>
                    {/* display Error  */}
                    {/* {this.state.errors.password && (
                      <div className="alert alert-danger">
                        {" "}
                        {this.state.errors.password}
                      </div>
                    )} */}
                    {/*********submit button ********/}
                    <button
                      type="submit"
                      className="btn  btn-block"
                      style={{
                        textAlign: "center",
                        backgroundColor: "#4169e1",
                        color: "white",

                        // borderRadius: "15px",
                        width: "150px",
                      }}
                    >
                      LOGIN
                    </button>

                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "20px",
                        color: "#4169e1",
                        fontSize: "10px",
                      }}
                    >
                      FORGET PASSWORD ?
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
    );
  }
}
export default PartnerLogin;
