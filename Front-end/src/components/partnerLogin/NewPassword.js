import "./partnerlogin.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PartnerLogin from "./PartnerLogin";
class NewPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
    };
  }
  setInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //token 7y5odo mn al url aw 2li m3molo save fe al database

  PostData = async (e) => {
    // e.preventDefault();
    //75lih llrestaurant
    //get id from local storage
    // token = localStorage.getItem("jwt");
    let res = await fetch(
      "http://localhost:8000/auth/restaurant/new-password",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //key and value from form
          password: this.state.password,
          token: localStorage.getItem("jwt"),
          //bb3t al token 2li 2rato mn al url hna
          // token
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson);
    console.log(resJson.error);
    if (typeof resJson.error === "undefined") {
      //save to localstorage
      //   localStorage.setItem("jwt", resJson.token);
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
                          type="password"
                          id="password"
                          placeholder="new password"
                          className="form-control"
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
                          backgroundColor: "#FF5900",
                          color: "white",
                          width: "150px",
                        }}
                        onClick={(e) => this.PostData(e)}
                      >
                        <a href="/partnerlogin">Update</a>
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
        {/* <Switch>
          <Route path="/resetpassword" exact component={ResetPassword}></Route>
        </Switch> */}
        {/* <Route exact path="/login">
          <PartnerLogin /> */}
        {/* component bta3 login restaurant */}
        {/* </Route> */}
      </Router>
    );
  }
}
export default NewPassword;

// import NewPassword from '/Newpassword' //a7ot al route al sa7

//  <Route path="/reset/:token">
//         <NewPassword />
//       </Route>
