// import "./partnerlogin.css";
import React, { Component } from "react";

class Success extends React.Component {
  render() {
    return (
      // **************
      <div>
        {/* ************************************************************************* */}
        <form className="form-row">
          {/* // ******************************************* */}
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6"></div>

              <div className="col-lg-6 col-md-12 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="icofont-patient-bed">
                    {/* <span
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        color: "white",
                        borderRadius: "50%",
                      }}
                    >
                      talabt
                    </span> */}
                  </i>

                  <form>
                    <div className="text-center mb-3">
                      <div className="row mg-btm">
                        <div className="col-md-12"></div>
                        <div></div>
                      </div>
                    </div>
                    {/* <div className="form-outline mb-4 mt-25"> */}
                    <div>
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/toggles-4/200/check_checkmark_done_mark_off_toggle_verified_active-512.png"
                        style={{
                          width: "100px",
                          height: "200px",
                          marginLeft: "50px",
                        }}
                      />
                    </div>

                    <div
                      //   className="col-md-12"
                      style={{
                        textAlign: "center",
                        fontWeight: "bolder",
                      }}
                    >
                      You are one step closer to<br></br> joining talabat!
                    </div>
                    {/* </div> */}

                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "20px",
                        fontWeight: "20px",
                        color: "grey",
                      }}
                    >
                      Our team will come back to you within 3 working days
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0"></div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0"></div>
            </div>
          </div>
        </form>
      </div>

      //*************************
    );
  }
}
export default Success;
