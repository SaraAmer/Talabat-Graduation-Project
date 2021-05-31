import React from "react";
import Flag from "react-world-flags";
import Accountinfo from "../userDetails/Account info";
import Savedaddr from "../userDetails/Savedaddr";
import LoginUSer from "../Login/login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav
            className="navbar navbar-expand-md navbar-light"
            style={{
              backgroundColor: "#FF5900",
              fontSize: "18px",
              width: "auto",
              height: "auto",
            }}
          >
            <div className="container-fluid ">
              <label
                className="navbar-toggler  d-md-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </label>
              <Link
                className="navbar-brand text-white "
                style={{
                  paddingLeft: "200px",
                  fontFamily: "'Paytone One', sans-serif",
                }}
              >
                <h1>talabat</h1>
              </Link>

              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav d-md-none">
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white "
                      aria-current="page"
                      style={{ marginLeft: "20px" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn text-white  nav-Link "
                      style={{ marginLeft: "10px" }}
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white "
                      aria-current="page"
                      style={{ marginLeft: "20px" }}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white"
                      style={{ marginLeft: "20px" }}
                    >
                      All Restaurants
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white"
                      style={{ marginLeft: "20px" }}
                    >
                      Become a partner
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white "
                      aria-current="page"
                      style={{ marginLeft: "20px" }}
                    >
                      offers
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className=" container float-right  d-none d-md-block"
                style={{ paddingLeft: "200px" }}
              >
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white "
                      style={{ marginLeft: "20px" }}
                      aria-current="page"
                    >
                      offers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white"
                      style={{ marginLeft: "20px" }}
                    >
                      Become a partner
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white"
                      style={{ marginLeft: "20px" }}
                    >
                      All Restaurants
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-Link text-white"
                      style={{ marginLeft: "20px" }}
                    >
                      العربيه
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <div className="dropdown nav-Link">
                      <Link
                        className="btn"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false "
                      >
                        <Flag code="egy" height="16" width="20" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item">
                            <Flag code="egy" height="16" width="20" />
                            Egypt
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            <Flag code="kwt" height="16" width="20" />
                            kuwait
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            <Flag code="ARE" height="16" width="20" />
                            UAE
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            <Flag code="BHR" height="16" width="20" />
                            Bahraine
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            <Flag code="SAU" height="16" width="20" />
                            KSA
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            <Flag code="QAT" height="16" width="20" />
                            Qatar
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            <Flag code="OMN" height="16" width="20" />
                            Oman
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            <Flag code="JOR" height="16" width="20" />
                            Jordan
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn text-white border-white nav-Link "
                      style={{ marginLeft: "10px" }}
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item ">
                    <div className="dropdown nav-Link ">
                      <Link
                        className="btn text-white "
                        role="button"
                        id="dropdownMenuLink1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false "
                      >
                        My account
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink1"
                        style={{ padding: "20px" }}
                      >
                        <li>
                          <Link className="dropdown-item">
                            <p>
                              <i
                                className="bi bi-credit-card"
                                style={{
                                  color: "#FF5900",
                                  marginRight: "20px",
                                }}
                              ></i>
                              Talbat Pay:EGP 0.00
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            <p>
                              <i
                                className="bi bi-cart3"
                                style={{
                                  color: "#FF5900",
                                  marginRight: "20px",
                                }}
                              ></i>
                              My orders
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/my-account/summary"
                            className="dropdown-item"
                          >
                            <p>
                              <i
                                className="bi bi-person"
                                style={{
                                  color: "#FF5900",
                                  marginRight: "20px",
                                }}
                              ></i>
                              Account info
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/my-account/savedaddr"
                            className="dropdown-item"
                          >
                            <p>
                              <i
                                className="bi bi-map"
                                style={{
                                  color: "#FF5900",
                                  marginRight: "20px",
                                }}
                              ></i>
                              Saved Addresses
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item">
                            {" "}
                            <p>
                              <i
                                className="bi bi-box-arrow-right"
                                style={{
                                  color: "#FF5900",
                                  marginRight: "20px",
                                }}
                              ></i>
                              log out
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                {/* <div className="modal-header"> */}
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  // style={{
                  //   textAlign: "center",
                  // }}
                ></h5>
                {/* <button
                  type="button"
                  className="close"
                  
                  aria-label="Close"
                >

                  <span aria-hidden="true">&times;</span>
                </button> */}
                <button
                  type="button"
                  class="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{
                    float: "right",
                    marginLeft: "450px",
                    paddingTop: "50px",
                  }}
                ></button>
                <p style={{ textAlign: "center" }} class="h2">
                  Login
                </p>
                {/* </div> */}
                <div className="modal-body">
                  <LoginUSer />
                </div>
                {/* <div className="modal-footer"></div> */}
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route
            path="/my-account/summary"
            exact
            component={Accountinfo}
          ></Route>
          <Route
            path="/my-account/savedaddr"
            exact
            component={Savedaddr}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
export default Header;
