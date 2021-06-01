// import "./login.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerLogin from "./PartnerLogin";

{
  /* <li className="nav-item">
<Link
  className="nav-Link text-white"
  style={{ marginLeft: "20px" }}
  to="/becomepartner"
>
  Become a partner
</Link>
</li> */
}

class PartnerRegister extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bolder",
            }}
          >
            Benefits of being a Talabat partner
          </div>
          <button
            // onClick={(event) => (window.location.href = "partnerlogin")}
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
            {/* Login */}
            <Link to="/partnerlogin"> Login</Link>
            {/* <a href="/partnerlogin"> Login</a> */}
          </button>
          {/* ************************************************* */}
          <section id="counts" className="counts">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <span data-toggle="counter-up">85</span>
                    <p>Doctors</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                  <div className="count-box">
                    <i className="icofont-patient-bed">
                      {/* <div
                    style={{
                      color: "white",
                      backgroundColor: "#FF5900",
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      textAlign: "center",
                    }}
                  > */}
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
                      {/* </div> */}
                    </i>

                    {/* <span className="counter-up">18</span> */}
                    {/* <span className="dot">Talabat</span> */}

                    {/* *************************************************************** */}

                    {/*  */}
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                  <div className="count-box">
                    <i className="icofont-laboratory"></i>
                    <span data-toggle="counter-up">8</span>
                    <p>Research Labs</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                  <div className="count-box">
                    <i className="icofont-award"></i>
                    <span data-toggle="counter-up">150</span>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* **************************************** */}
          <section id="featured-services" className="featured-services">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="icofont-computer"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Lorem Ipsum</a>
                    </h4>
                    <p className="description">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="icofont-image"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Dolor Sitema</a>
                    </h4>
                    <p className="description">
                      Minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat tarad limino ata
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="icofont-tasks-alt"></i>
                    </div>
                    <h4 className="title">
                      <a href="">Sed ut perspiciatis</a>
                    </h4>
                    <p className="description">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ******************************* */}

          {/* ************************************************ */}
        </div>
        {/* ************************************************* */}
        <Switch>
          <Route path="/partnerlogin" exact component={PartnerLogin}></Route>
        </Switch>
      </Router>
      //**************************************
    );
  }
}
export default PartnerRegister;
