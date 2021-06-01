// import "./login.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerLogin from "./PartnerLogin";

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
          {/* **************Form************* */}
          <div
            className="bg-image"
            style={
              {
                // backgroundImage:
                //   "url('https://blog.talabat.com/wp-content/uploads/2020/11/Screenshot-486-e1604302345716.png')",
                // height: "100%",
              }
            }
          >
            {/* <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontWeight: "bolder",
          }}
        >
          Welcome to the Talabat Portal
        </div> */}

            <section id="counts" className="counts">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    {/* <div className="count-box">
                  <i className="icofont-doctor-alt"></i>
                  <span data-toggle="counter-up">85</span>
                  <p>Doctors</p>
                </div> */}
                  </div>

                  <div className="col-lg-6 col-md-12 mt-5 mt-md-0">
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

                      <form>
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
                            <div
                              style={{
                                textAlign: "center",
                                marginTop: "20px",
                                fontWeight: "20px",
                                color: "grey",
                              }}
                            >
                              If you’re unable to login or recover your password
                              (link below), please contact your account manager.{" "}
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4 mt-25">
                          <input
                            type="text"
                            id="form5Example1"
                            className="form-control"
                            placeholder="E-mail"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="registerPassword"
                            className="form-control"
                            for="registerPassword"
                            placeholder="password"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn  btn-block"
                          style={{
                            textAlign: "center",
                            backgroundColor: "#4169e1",
                            color: "white",

                            // borderRadius: "15px",
                            width: "150px",
                          }}
                        >
                          LOGIN
                        </button>

                        <p
                          style={{
                            textAlign: "center",
                            marginTop: "20px",
                            color: "#4169e1",
                            fontSize: "10px",
                          }}
                        >
                          FORGET PASSWORD ?
                        </p>
                      </form>

                      {/*  */}
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    {/* <div className="count-box">
                  <i className="icofont-laboratory"></i>
                  <span data-toggle="counter-up">8</span>
                  <p>Research Labs</p>
                </div> */}
                  </div>

                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    {/* <div className="count-box">
                  <i className="icofont-award"></i>
                  <span data-toggle="counter-up">150</span>
                  <p>Awards</p>
                </div> */}
                  </div>
                </div>
              </div>
            </section>
            {/* <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bolder",
        }}
      >
        Talabat partner
      </div> */}
          </div>

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
                      <img
                        src="https://partner.talabat.com/resource/SSUTalabat/assets/images/ic_revenue.png"
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "80px",
                          backgroundColor: "#FF5900",
                          marginLeft: "130px",
                        }}
                      />
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
                      {/* <i className="icofont-image"></i> */}
                      <img
                        src="https://partner.talabat.com/resource/SSUTalabat/assets/images/ic_customers.png"
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "80px",
                          backgroundColor: "#FF5900",
                          marginLeft: "130px",
                        }}
                      />
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
                      {/* <i className="icofont-tasks-alt"></i> */}
                      <img
                        src="https://partner.talabat.com/resource/SSUTalabat/assets/images/ic_delivered.png"
                        style={{
                          borderRadius: "50%",
                          width: "100px",
                          height: "80px",
                          backgroundColor: "#FF5900",
                          marginLeft: "130px",
                        }}
                      />
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
              marginBottom: "20px",
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
                  {/* ************************ */}
                  <div
                    className="card"
                    style={{
                      // width: "100%",
                      height: "300px",
                      borderBottom: "5px solid blue",
                    }}
                  >
                    <img
                      className="card-img-top"
                      // src="image1.png"
                      src="https://partner.talabat.com/resource/SSUTalabat/assets/images/img-hiring@2x.png"
                      alt="Card image cap"
                      style={{
                        width: "100%",
                        height: "150px",
                      }}
                    />
                    <div className="card-body">
                      <h4>
                        <h2 style={{ textAlign: "center" }}>
                          No hiring headaches
                        </h2>
                      </h4>
                      <p>
                        Dont worry about sourcing drivers to deliver your
                        orders. Leave the logistics to us, so you can focus on
                        making great food!
                      </p>
                    </div>
                  </div>
                </div>

                {/* ********************* */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  {/* <div className="icon-box">
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
                  </div> */}

                  <div
                    className="card"
                    style={{
                      // width: "100%",
                      height: "300px",
                      borderBottom: "5px solid blue",
                    }}
                  >
                    <img
                      className="card-img-top"
                      // src="image1.png"
                      src="https://partner.talabat.com/resource/SSUTalabat/assets/images/img-delivery@3x.png"
                      alt="Card image cap"
                      style={{
                        width: "100%",
                        height: "150px",
                      }}
                    />
                    <div className="card-body">
                      <h4>
                        <h2 style={{ textAlign: "center" }}>
                          Sed ut perspiciatis
                        </h2>
                      </h4>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  {/* <div className="icon-box">
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
                  </div> */}

                  <div
                    className="card"
                    style={{
                      // width: "100%",
                      height: "300px",
                      borderBottom: "5px solid blue",
                    }}
                  >
                    <img
                      className="card-img-top"
                      // src="image1.png"
                      src="https://partner.talabat.com/resource/SSUTalabat/assets/images/img-live@2x.png"
                      alt="Card image cap"
                      style={{
                        width: "100%",
                        height: "150px",
                      }}
                    />
                    <div className="card-body">
                      <h4>
                        <h2 style={{ textAlign: "center" }}>Magni Dolores</h2>
                      </h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  *************************************************/}
          <div
            style={{
              padding: "30px",
            }}
          ></div>
          {/* *************************************************** */}

          <div
            style={{
              textAlign: "center",
              fontWeight: "bolder",
            }}
            className="fs-3"
          >
            <img
              src="https://partner.talabat.com/resource/SSUTalabat/assets/images/fleet-new.png"
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "80px",
                // backgroundColor: "#FF5900",
                marginLeft: "150px",
              }}
            />
            Fleet of over 16000 riders and growing
          </div>
          {/*  *************************************************/}
          <div
            style={{
              padding: "30px",
            }}
          ></div>
          {/* ************************************************ */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bolder",
            }}
            className="fs-3"
          >
            How it works?
          </div>
          {/*  *************************************************/}
          <div
            style={{
              padding: "20px",
            }}
          ></div>
          {/*  *************************************************/}
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
                      <img
                        src="https://partner.talabat.com/resource/SSUTalabat/assets/images/order_placed.svg"
                        style={{
                          // borderRadius: "50%",
                          width: "100px",
                          height: "200px",
                          // backgroundColor: "#FF5900",
                          marginLeft: "130px",
                        }}
                      />
                    </h4>
                    <p className="description">
                      <div
                        style={{
                          FontSize: "40px",
                          textAlign: "center",
                        }}
                        className="fs-4"
                      >
                        Order placed
                      </div>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                  <div className="icon-box">
                    <div className="icon">
                      {/* <i className="icofont-image"></i> */}
                      <img
                        src="https://partner.talabat.com/resource/SSUTalabat/assets/images/prep.svg"
                        style={{
                          width: "100px",
                          height: "200px",
                          marginLeft: "130px",
                        }}
                      />
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
                        Prep
                      </div>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      {/* <i className="icofont-tasks-alt"></i> */}
                      <img
                        src="https://partner.talabat.com/resource/SSUTalabat/assets/images/delivered.svg"
                        style={{
                          width: "100px",
                          height: "200px",
                          marginLeft: "130px",
                        }}
                      />
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
                        Delivered
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ************************************ */}

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bolder",
            }}
            className="fs-3"
          >
            Ready to join us?
          </div>
          {/*  *************************************************/}
          <div
            style={{
              padding: "20px",
            }}
          ></div>

          {/* ************************************ */}
          {/* ***** when press on it go to beginning on Page */}
          <button
            type="submit"
            className="btn btn-lg btn-block"
            style={{
              textAlign: "center",
              backgroundColor: "#FF5900",
              color: "white",
              marginLeft: "500px",
              borderRadius: "5px",
              width: "300px",
            }}
          >
            Join Now
          </button>
          {/* ************************************* */}
          <div
            style={{
              padding: "20px",
            }}
          ></div>
          {/* ********************** */}

          {/* ************************************ */}
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
