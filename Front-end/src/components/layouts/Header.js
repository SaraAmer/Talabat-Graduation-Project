import React from "react";
import "./Header.css";
import Flags from "./flag";
import Accountinfo from "../userDetails/Account info";
import Savedaddr from "../userDetails/Savedaddr";
import Myorders from "../userDetails/Myorders";
import Talabatpay from "../userDetails/Talabatpay";
import Savedcards from "../userDetails/Savedcards";
import Checkout from "../carts/checkout";
import Cart from "../carts/cart";
import LoginUSer from "../Login/login";
import AllRestaurants from "../AllRestaurants";
import RestaurantDetails from "../restaurants-client/RestaurantDetails";
import PartnerLogin from "../partnerLogin/PartnerLogin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import Filter from "../filter/filter";
import Home from "../Home";
import Restaurant from "../Restaurants/Restaurant";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }
  componentDidMount() {
    if (localStorage["userId"]) {
      this.setState({ login: true });
    }
  }
  logout = () => {
    localStorage.removeItem("userId");
    this.setState({ login: false });
    window.location.href = "http://localhost:3000";
  };
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
            <div className="container topnav ">
              <div className="navbar-header inline-block">
                <label
                  className="navbar-toggler d-md-none border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    className="navbar-toggler-icon"
                    style={{ float: "left" }}
                  ></span>
                </label>

                <span className=" d-md-none" style={{ float: "right" }}>
                  {" "}
                  <Flags />
                </span>
                <Link
                  to=""
                  className="navbar-brand text-white "
                  style={{
                    fontFamily: "'Paytone One', sans-serif",
                  }}
                >
                  <span className="d-inline-block align-middle h1 ">
                    talabat
                  </span>
                </Link>
              </div>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav d-md-none ">
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-Link text-white "
                      aria-current="page"
                      style={{ marginLeft: "20px" }}
                    >
                      Home
                    </Link>
                  </li>
                        {!this.state.login?(
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
                  ): ""}
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-Link text-white "
                      aria-current="page"
                      style={{ marginLeft: "20px" }}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/restaurants"
                      className="nav-Link text-white"
                      style={{ marginLeft: "20px" }}
                    >
                      All Restaurants
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/becomepartner"
                      className="nav-Link text-white"
                      style={{ marginLeft: "20px" }}
                    >
                      Become a partner
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-Link text-white "
                      aria-current="page"
                      style={{ marginLeft: "20px" }}
                    >
                      offers
                    </Link>
                  </li>
                   {this.state.login?(
                  <li>
                  
					        <ul className="navbar-nav" >
					          <li className="nav-item dropdown">
						          <a className="nav-link  text-white"  style={{ marginLeft: "20px" }} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						             <strong>Account</strong>
					          	</a>
                       
						          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" style={{backgroundColor:"#FF5900"}}>
						           <li>
                          <Link to="/my-account/tlbcredit"className="dropdown-item">
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
                          <Link to="/my-account/orders" className="dropdown-item">
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
						          <a href="#" className="dropdown-item">
                        <div className="dropdown-divider"></div>
                        <span
                        className="bi bi-box-arrow-right border-0  btn"
                        style={{
                        color: "black",
                       
                        marginRight: "20px",
                        }}
                          onClick={this.logout}
                        > Logout</span>
                       
						          </a>
						        </div>
					        </li>
					       </ul>
                   
                  </li>
                   ): ""}
                </ul>

             </div>
           
             <div
                className="d-none d-md-block"
                
              >

              </div>
              <div className="d-none d-md-block">

                <ul className="navbar-nav  ml-auto">
                  <li className="nav-item">
                    <Link
                      to=""
                      className="nav-Link text-white "
                      style={{ marginLeft: "10px" }}
                      aria-current="page"
                    >
                      offers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/becomepartner"
                      className="nav-Link text-white"
                      style={{ marginLeft: "10px" }}
                      to="/becomepartner"
                    >
                      Become a partner
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/restaurants"
                      className="nav-Link text-white"
                      style={{ marginLeft: "10px" }}
                    >
                      All Restaurants
                    </Link>
                  </li>
                  
                  <li className="nav-item ">
                    <Flags />
                  </li>
                  {!this.state.login ? (
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
                  ) : (
                    ""
                  )}
                  <li className=" nav-item dropdown text-white m-2 ">
                    {this.state.login ? (
                      <p data-toggle="dropdown">
                        <RiShoppingBasket2Fill />{" "}
                      </p>
                    ) : (
                      ""
                    )}

                    <div
                      className=" dropdown-menu "
                      style={{ position: "absolute", right: 0 }}
                    >
                      <Cart />
                    </div>
                  </li>
                  {this.state.login ? (
                    <li className="nav-item  ">
                      <div className="dropdown nav-Link  ">
                        <Link
                          className="btn text-white  "
                          role="button "
                          id="dropdownMenuLink1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false "
                          aria-haspopup="true"
                        >
                          My account
                        </Link>

                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                          style={{ padding: "10px" }}
                        >
                          <li>
                            <Link
                              to="/my-account/tlbcredit"
                              className="dropdown-item"
                            >
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
                            <Link
                              to="/my-account/orders"
                              className="dropdown-item"
                            >
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
                                <button
                                  className="bi bi-box-arrow-right border-0  "
                                  style={{
                                    color: "#FF5900",
                                    marginRight: "20px",
                                  }}
                                  onClick={this.logout}
                                >
                                  {" "}
                                  logout
                                </button>
                              </p>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  ) : (
                    ""
                  )}
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
                {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
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
          <Route path="/" exact component={Home}></Route>

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
          <Route path="/my-account/orders" exact component={Myorders}></Route>
          <Route
            path="/my-account/tlbcredit"
            exact
            component={Talabatpay}
          ></Route>
          {/* <Route
            path="/becomepartner"
            exact
            component={PartnerRegister}
          ></Route> */}
          <Route path="/checkout" exact component={Checkout}></Route>
          <Route path="/my-account/cards" exact component={Savedcards}></Route>

          <Route exact path="/filter">
            <Filter />
          </Route>
          <Route path="/restaurants/:id" exact component={RestaurantDetails} />
          <Route path="/restaurants" component={AllRestaurants} />
          {/* <Route exact path="/restaurant/dashboard">
            <Restaurant />
          </Route> */}
        </Switch>
      </Router>
    );
  }
}
export default Header;
