import "./login.css";
import React, { Component } from "react";
// #FF5900
var Joi = require("joi-browser");

class LoginUSer extends React.Component {
  // ************************
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
  login =(e)=>{
    e.preventDefault();
    localStorage.setItem("username" , this.state.email);
    window.location.reload();

 
  }
  //***
  sschema = {
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  };

  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.sschema, { abortEarly: false });
    console.log(res);
    if (res.error == null) {
      this.setState({ errors: {} });
      return null;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    this.setState({ errors });
  };

  //********************
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div className="text-center mb-3">
          <div className="row mg-btm">
            <div className="col-md-12">
              <a href="#" class="btn btn-white btn-block">
                  <i class="bi bi-google"></i>  Continue with Google
              </a>
            </div>
          </div>
          {/* style={{ border: "5px solid grey" }} */}
          <div className="row">
            <div className="col-md-12">
              <a href="#" className="btn btn-primary btn-block">
                <i class="bi bi-facebook"></i>  Continue with Facebook
              </a>
            </div>
          </div>
        </div>

        <p className="text-center">OR</p>

        {/* <!-- Email input --> */}
        {/* style={{ borderBottom: "5px solid grey" }} */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="email@gmail.com"
            name="email"
            onChange={this.handelchange}
            value={this.state.email}
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            htmlFor="registerPassword"
            placeholder="password"
            name="password"
            onChange={this.handelchange}
            value={this.state.password}
          />
        </div>
        {/* *********************************************************************************** */}
        {/* <!-- Checkbox --> */}
        <div class="form-check d-flex  mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label  mr-20" for="registerCheck">
            Keep Me logged in
          </label>

          <label
            className="form-check-label "
            htmlFor="registerCheck"
            style={{
              marginLeft: "150px",
            }}
          >
            Forget password?
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <button
          type="submit"
          className="btn btn-lg btn-block"
          style={{
            textAlign: "center",
            backgroundColor: "#FF5900",
            color: "white",
            marginLeft: "100px",
            borderRadius: "15px",
            width: "300px",
            
          }}
          onClick={this.login}
        >
          Login
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          Don't have an account ?{" "}
          <a href="/Register" style={{ color: "#FF5900", display: "inline" }}>
            create an account
          </a>{" "}
        </p>
      </form>
    );
  }
}
export default LoginUSer;
