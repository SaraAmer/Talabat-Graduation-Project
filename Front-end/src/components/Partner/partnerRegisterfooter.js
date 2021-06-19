// import "./login.css";
import "./partnerRegister.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerLogin from "../partnerLogin/PartnerLogin";
import PartnerRegisterRest from "./PartnerRegisterRest";
import PartnerRegisterFirst from "./partnerRegisterFirst";

import Success from "./success";
import { Step, Steps } from "react-step-builder";
class PartnerRegisterfooter extends React.Component {
  render() {
    return (
      <Router>
        <div>
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
                    <h4 className="title">
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

          {/* ************************************************** */}

          <section id="services" className="services">
            <div className="container">
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
            className="btn btn-lg btn-block "
            style={{
              textAlign: "center",
              backgroundColor: "#FF5900",
              color: "white",
              marginLeft: "500px",
              borderRadius: "5px",
              width: "300px",
            }}
          >
            <a href="#move">Join Now</a>
          </button>
          {/* ************************************* */}
          <div
            style={{
              padding: "20px",
            }}
          ></div>
          {/* *********For test******* */}

          {/* ************************************ */}

          {/* **************************** */}
        </div>
        {/* ************************************************* */}
        {/* component={PartnerLogin} */}
        {/* ******************* */}
        {/* <Switch></Switch> */}
      </Router>
      //**************************************
    );
  }
}
export default PartnerRegisterfooter;

//
