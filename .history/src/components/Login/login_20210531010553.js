import "./login.css";
import React, { Component } from "react";
// #FF5900
class LoginUSer extends React.Component {
  render() {
    return (
      <form>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-google"></i>
        <div className="text-center mb-3">
          <p>Sign up with:</p>

          <div className="row mg-btm">
            <div className="col-md-12">
              <a href="#" class="btn btn-primary btn-block">
                <i className="icon-facebook"></i>    Login with Facebook
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <a href="#" className="btn btn-info btn-block">
                <i className="icon-twitter"></i>    Login with Twitter
              </a>
            </div>
          </div>
        </div>

        <p className="text-center">or:</p>

        {/* <!-- Name input --> */}
        <div className="form-outline mb-4">
          <input type="text" id="registerName" className="form-control" />
          <label className="form-label" for="registerName">
            Name
          </label>
        </div>
        {/* 
      <!-- Username input --> */}
        <div className="form-outline mb-4">
          <input type="text" id="registerUsername" className="form-control" />
          <label className="form-label" for="registerUsername">
            Username
          </label>
        </div>

        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input type="email" id="registerEmail" className="form-control" />
          <label className="form-label" for="registerEmail">
            Email
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
          />
          <label className="form-label" for="registerPassword">
            Password
          </label>
        </div>

        {/* <!-- Repeat Password input --> */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
          />
          <label className="form-label" for="registerRepeatPassword">
            Repeat password
          </label>
        </div>

        {/* <!-- Checkbox --> */}
        <div class="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="registerCheck"
            checked
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" for="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <button
          type="submit"
          className="btn-lg ml-10"
          style={{
            textAlign: "center",
            justifyContent: "center",
            backgroundColor: "#FF5900",
            color: "white",
          }}
        >
          Sign in
        </button>
      </form>
    );
  }
}
export default LoginUSer;
