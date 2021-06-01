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
          {/* *************************** */}
          <div>
            {/* ********************* */}
            <button
              // onClick={(event) => (window.location.href = "partnerlogin")}
              className="btn btn-lg btn-block"
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
              <Link to="/partnerlogin"> Login</Link>
              {/* <a href="/partnerlogin"> Login</a> */}
            </button>
            {/* ******************* */}
            <div
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                float: "right",
                marginTop: "10px",
              }}
            >
              العربيه
            </div>
            {/* ************************** */}
          </div>
          {/* *************************** */}
          <div
            style={{
              padding: "30px",
            }}
          ></div>

          {/* ********************* */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bolder",
            }}
            className="fs-3"
          >
            Benefits of being a Talabat partner
          </div>

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
                          borderRadius: "0%",
                          width: "100px",
                          height: "100px",
                          backgroundColor: "#FF5900",
                        }}
                      ></i> */}
                      {/* <img
                        src="https://image.shutterstock.com/image-vector/increasing-revenue-icon-260nw-769004392.jpg"
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "80px",
                          backgroundColor: "#FF5900",
                        }}
                      /> */}
                    </h4>
                    <p className="description">
                      <div
                        style={{
                          FontSize: "40px",
                          textAlign: "center",
                        }}
                        className="fs-4"
                      >
                        Additional revenue stream
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          FontSize: "25px",
                        }}
                      >
                        Get more orders
                      </div>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="icofont-image"></i>
                    </div>
                    <h4 className="title"></h4>
                    <p className="description">
                      <div
                        style={{
                          FontSize: "50px",
                          textAlign: "center",
                        }}
                        className="fs-4"
                      >
                        New customers
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        More visibility through the Talabat platform{" "}
                      </div>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="icofont-tasks-alt"></i>
                    </div>
                    <h4 className="title"></h4>
                    <p className="description">
                      <div
                        style={{
                          FontSize: "50px",
                          textAlign: "center",
                        }}
                        className="fs-4"
                      >
                        Delivery, done
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        No more driver headaches
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ******************************* */}
          <div
            style={{
              padding: "10px",
            }}
          ></div>
          {/* ******************************* */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bolder",
            }}
            className="fs-3"
          >
            Benefits of our own delivery
          </div>

          {/* ************************************************ */}
          {/* <section id="counts" className="counts">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <span data-toggle="counter-up">85</span>
                    <p>Doctors</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-12 mt-5 mt-md-0">
                  <div className="count-box">
                    <span data-toggle="counter-up">8</span>
                    <p>Research Labs</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                  <div className="count-box">
                    <span data-toggle="counter-up">8</span>
                    <p>Research Labs</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                  <div className="count-box">
                    <span data-toggle="counter-up">150</span>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* ************************************************** */}

          <section id="services" className="services">
            <div className="container">
              {/* <div className="section-title">
                <h2>Services</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div> */}

              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon">
                      {/* <i className="icofont-heart-beat"></i> */}
                      <img
                        src="https://image.shutterstock.com/image-vector/increasing-revenue-icon-260nw-769004392.jpg"
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "80px",
                          backgroundColor: "#FF5900",
                        }}
                      />
                    </div>
                    <h4>No hiring headaches</h4>
                    <p>
                      Dont worry about sourcing drivers to deliver your orders.
                      Leave the logistics to us, so you can focus on making
                      great food!
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="icofont-drug"></i>
                    </div>
                    <h4>
                      <a href="">Sed ut perspiciatis</a>
                    </h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="icofont-dna-alt-2"></i>
                    </div>
                    <h4>
                      <a href="">Magni Dolores</a>
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *************************************************** */}
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
