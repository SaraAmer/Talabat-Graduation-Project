import "./partnerRegister.css";
import React, { Component } from "react";

class PartnerLogin extends React.Component {
  render() {
    return (
      // <!-- Background image -->
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
    );
  }
}
export default PartnerLogin;
