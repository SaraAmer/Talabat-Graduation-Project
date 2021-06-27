import "./login.css";
import React, { Component } from "react";
// #FF5900
//*****************/
import GoogleLogin from "react-google-login";
import axios from "axios";
/****************** */
import FacebookLogin from "react-facebook-login";
//********* */
import M from "materialize-css";
import { MdLocalParking } from "react-icons/md";
//****** */
var Joi = require("joi-browser");

class LoginUSer extends React.Component {
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
    let res = await fetch("http://localhost:8000/user/login", {
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
    console.log("this.state.email");
    console.log(this.state.email);
    console.log(resJson.error);
    console.log(resJson.message);

    // if (resJson.token) {
    //   localStorage.setItem("jwt", resJson.token);
    //   localStorage.setItem("userId", resJson.userId);

    //   // M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    //   window.location.reload();
    // } else {
    //   // M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    //   // alert("Wrong Email or Password");
    // }

    if (typeof resJson.error === "undefined") {
      //save to localstorage
      localStorage.setItem("jwt", resJson.token);
      // localStorage.setItem("id", resJson.id);
      localStorage.setItem("userId", resJson.userId);
      // localStorage.setItem("user", JSON.stringify(resJson.user));
      // window.location.href = "http://localhost:3000/restaurant/dashboard";
      M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
      // alert(resJson.message);
      window.location.reload();
    } else {
      M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
      // alert(resJson.error);
    }
    // window.location.reload();
  };
  //******************** */
  responseSuccessGoogle = async (response) => {
    console.log(response);
    console.log(response.tokenId);
    let res = await fetch("http://localhost:8000/user/googlelogin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //key and value from form
        tokenId: response.tokenId,
      }),
    });

    let resJson = await res.json();
    // console.log(resJson);
    console.log(resJson.error);
    console.log(resJson.message);

    if (typeof resJson.error === "undefined") {
      localStorage.setItem("jwt", resJson.token);
      M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    } else {
      M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    }
    window.location.reload();
  };
  /******** */
  responseFacebook = async (response) => {
    // console.log(response);
    // console.log(response.accessToken);
    let res = await fetch("http://localhost:8000/user/facebooklogin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //key and value from form
        accessToken: response.accessToken,
        userID: response.userID,
      }),
    });
    console.log(res);
    let resJson = await res.json();
    // alert("")
    console.log(resJson);
    // console.log(resJson.error);
    // console.log(resJson.message);

    if (typeof resJson.error === "undefined") {
      localStorage.setItem("jwt", resJson.token);
      localStorage.setItem("id", resJson.user._id);
      M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    } else {
      M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    }
    window.location.reload();
  };
  //********************
  // responseFacebook = (response) => {
  //   console.log(response);
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:8000/user/facebooklogin",
  //     data: { accessToken: response.accessToken, userID: response.userID },
  //   })
  //     .then((response) => {
  //       //recicve response once
  //       console.log(response);
  //       //response came from backend (re.json)
  //       console.log("facebook login success", response);
  //     })
  //     .catch(function (error) {
  //       throw error;
  //       console.log(error);
  //     });
  // };
  //******************************** */
  render() {
    return (
      <form>
        <div className="text-center mb-3">
          <div className="row mg-btm">
            <div className="col-md-12">
              {/* <a href="#" class="btn btn-white btn-block">
                  <i class="bi bi-google"></i>  Continue with Google
              </a> */}
              <GoogleLogin
                clientId="552706329971-od3cbgpjg950e9pcias0bjkvnq74ipub.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={this.responseSuccessGoogle}
                onFailure={this.responseErrorGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
          {/* style={{ border: "5px solid grey" }} */}

          <div className="row m-4 h-25">
            <div className="col-md-12">
              {/* <a href="#" className="btn btn-primary btn-block">
                <i class="bi bi-facebook"></i>  Continue with Facebook
              </a> */}
              <FacebookLogin
                appId={process.env.FACEBOOKAPP}
                autoLoad={true}
                //if true when open login page it will go to
                // login with facebook and we won't to do this
                callback={this.responseFacebook}
              />
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
            value={this.state.email}
            onChange={this.setInputValue}
            name="email"
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
            value={this.state.password}
            onChange={this.setInputValue}
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
          onClick={(e) => this.PostData(e)}
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
