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
            "url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg')",
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
      </div>
    );
  }
}
export default PartnerLogin;
