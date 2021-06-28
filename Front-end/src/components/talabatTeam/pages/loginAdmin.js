import "./LoginAdmin.css";
import React, { Component } from "react";
// var Joi = require("joi-browser");
import M from "materialize-css";
class LoginAdmin extends React.Component {
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
  PostData = (e) => {
    e.preventDefault();
    if (
      this.state.email == "admin@admin.com" &&
      this.state.password == "1234"
    ) {
      M.toast({ html: "Welcome Admin", classes: "#c62828 red darken-3" });
      localStorage.setItem("email", this.state.email);
      //when logout
      //   localStorage.removeItem("email");
    } else {
      M.toast({
        html: "Not a valid Email or password Check it ",
        classes: "#c62828 red darken-3",
      });
    }

    window.location.href = "http://localhost:3000/restaurants";
  };

  render() {
    return (
      <div className="adminbg-images">
        <section className="admincountss">
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
                          Admin Login
                        </div>
                        {/* <div
                          style={{
                            textAlign: "center",
                            marginTop: "20px",
                            fontWeight: "20px",
                            color: "grey",
                          }}
                        >
                         Admin Login
                        </div> */}
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
export default LoginAdmin;
