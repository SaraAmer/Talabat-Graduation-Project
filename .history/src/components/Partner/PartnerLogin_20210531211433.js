// import "./login.css";
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

        <div class="col-lg-3 col-md-6">
          <div class="count-box">
            <i class="icofont-doctor-alt"></i>
            <span data-toggle="counter-up">85</span>
            <p>Doctors</p>
          </div>
        </div>
      </div>
      // <div
      //   style={{
      //     textAlign: "center",
      //     marginTop: "20px",
      //     fontWeight: "bolder",
      //   }}
      // >
      //   Talabat partner
      // </div>
    );
  }
}
export default PartnerLogin;
