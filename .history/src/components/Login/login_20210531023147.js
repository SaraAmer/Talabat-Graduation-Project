import "./login.css";
import React, { Component } from "react";
// #FF5900
class LoginUSer extends React.Component {
  render() {
    return (
      <form>
        <div className="text-center mb-3">
          <div className="row mg-btm">
            <div className="col-md-12">
              <a href="#" class="btn btn-white btn-block">
                  <i class="bi bi-google"></i>  Continue with Google
              </a>
            </div>
          </div>
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
        <div className="mb-4" style={{ borderBottom: "5px solid grey" }}>
          {/* <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Email"
            for="registerEmail"
            style={{ backgroundColor: "white" }}
          /> */}
          <input
            type="text"
            className="form-control"
            placeholder="email@gmail.com"
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            for="registerPassword"
            placeholder="password"
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
            checked
            style={{
              Color: "#FF5900",
            }}
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label  mr-20" for="registerCheck">
            Keep Me logged in
          </label>

          <label
            className="form-check-label "
            for="registerCheck"
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
          <p style={{ color: "#FF5900", display: "inline" }}>
            create an account
          </p>{" "}
        </p>
      </form>
    );
  }
}
export default LoginUSer;
