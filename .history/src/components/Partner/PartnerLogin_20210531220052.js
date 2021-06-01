import "./partnerlogin.css";
import React, { Component } from "react";

class PartnerLogin extends React.Component {
  render() {
    return (
      // <!-- Background image -->
      <div
        className="bg-image"
        style={{
          backgroundImage:
            "url('https://blog.talabat.com/wp-content/uploads/2020/11/Screenshot-486-e1604302345716.png')",
          height: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontWeight: "bolder",
          }}
        >
          Talabat partner
        </div>
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

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="icofont-patient-bed">
                    <div
                      style={{
                        color: "white",
                        backgroundColor: "#FF5900",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        textAlign: "center",
                      }}
                    >
                      <span
                        style={{
                          // marginTop: "200px",
                          fontSize: "15px",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        talabt
                      </span>
                    </div>
                  </i>

                  {/* <span className="counter-up">18</span> */}
                  {/* <span className="dot">Talabat</span> */}

                  {/* *************************************************************** */}
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form5Example1"
                        className="form-control"
                      />
                      <label className="form-label" for="form5Example1">
                        Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        className="form-control"
                      />
                      <label className="form-label" for="form5Example2">
                        Email address
                      </label>
                    </div>
                  </form>

                  {/*  */}
                  <p>Departments</p>
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
