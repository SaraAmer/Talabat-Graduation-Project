// import "./login.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerLogin from "./ PartnerLogin ";

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
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bolder",
            }}
          >
            Benefits of being a Talabat partner
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-block"
            style={{
              textAlign: "center",
              backgroundColor: "#FF5900",
              color: "white",
              marginLeft: "100px",
              borderRadius: "15px",
              width: "300px",
            }}
          >
            <Link to="/partnerlogin"> Login</Link>
          </button>
        </div>
        // **************************************************
        <Switch>
          <Route
            path="/becomepartner"
            exact
            component={PartnerRegister}
          ></Route>
        </Switch>
      </Router>
      //**************************************
    );
  }
}
export default PartnerRegister;
