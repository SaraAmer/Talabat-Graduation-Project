import "./partnerlogin.css";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import M from "materialize-css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewPassword from "./NewPassword";
class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  setInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  PostData = async (e) => {
    // e.preventDefault();
    console.log(this.state.email);

    //***************73dlo ll restaurant */
    let res = await fetch(
      "http://localhost:8000/auth/restaurant/reset-password",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //key and value from form
          email: this.state.email,
        }),
      }
    );

    let resJson = await res.json();
    console.log(resJson.error);
    if (typeof resJson.error === "undefined") {
      //save to localstorage
      localStorage.setItem("jwt", resJson.token);
      // localStorage.setItem("user", JSON.stringify(resJson.user));

      M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    } else {
      M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    }
  };

  render() {
    return (
      <Router>
        <div className="mycard">
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

                      {/*********submit button ********/}
                      <button
                        type="submit"
                        className="btn  btn-block"
                        style={{
                          textAlign: "center",
                          backgroundColor: "#FF5900",
                          color: "white",
                          width: "150px",
                        }}
                        onClick={(e) => this.PostData(e)}
                      >
                        {/* Reset Password */}
                        <a href="/newpassword">Reset Password</a>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0"></div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0"></div>
              </div>
            </div>
          </section>
        </div>
        <Route exact path="/newpassword">
          <NewPassword />
        </Route>
      </Router>
    );
  }
}
export default ResetPassword;

// //7def al route bta3 reset-paaword in app.js
// import Reset from '/Reset' //aktb al route sa7

// //******Lw al path reset yro7 l reset in app.js
//   <Route exact path="/reset">
//         <Reset/>
//       </Route>
