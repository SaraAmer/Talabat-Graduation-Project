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

          {/* **************************************** */}
          <section id="featured-services" className="featured-services">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="icon-box">
                    {/* <div className="icon"></div> */}
                    <h4 className="title">
                      {/* <i
                        class="bi bi-graph-up"
                        style={{
                          borderRadius: "100%",
                          width: "100px",
                          height: "100px",
                          backgroundColor: "#FF5900",
                        }}
                      ></i> */}
                      <img
                        src="revenu.png"
                        style={{
                          borderRadius: "50%",
                          width: "50px",
                          height: "40px",
                          // backgroundColor: "#FF5900",
                        }}
                      />
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
