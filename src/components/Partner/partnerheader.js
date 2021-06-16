// import "./login.css";
import "./partnerRegister.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerLogin from "../partnerLogin/PartnerLogin";
import PartnerRegisterRest from "./PartnerRegisterRest";
import PartnerRegisterFirst from "./partnerRegisterFirst";
import PartnerRegisterfooter from "./partnerRegisterfooter";
import Success from "./success";
import { Step, Steps } from "react-step-builder";
class Partnerheader extends React.Component {
  render() {
    return (
      <Router>
        <div id="move">
          {/* **************Form************* */}
          <div>
            {/* *********Hold header******* */}

            {/* *********************** */}
            <div>
              {/* ***********Button********** */}
              <button
                // onClick={(event) => (window.location.href = "partnerlogin")}
                className="btn btn-lg btn-block"
                id="myButton"
                style={{
                  textAlign: "center",
                  borderColor: "#FF5900",
                  borderStyle: "solid",
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "10px",
                  marginRight: "10px",
                  // borderRadius: "15px",
                  width: "200px",
                  float: "right",
                  border: "5px solid #FF5900",
                }}
              >
                {/* Login */}
                <a href="/partnerlogin">
                  {" "}
                  <p
                    style={{
                      color: "white",
                    }}
                  >
                    Vendor Portal
                  </p>
                </a>
              </button>
              {/* ******************* */}
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  float: "right",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                العربيه
              </div>
              {/* ************************** */}
              <div
                style={{
                  // marginTop: "200px",
                  fontSize: "50px",
                  color: "#FF5900",
                  float: "left",
                  marginLeft: "100px",
                }}
              >
                talabt
              </div>
              {/* ********************* */}
            </div>
            {/* *********************** */}
          </div>
        </div>
      </Router>
    );
  }
}
export default Partnerheader;
