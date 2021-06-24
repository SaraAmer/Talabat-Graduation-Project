import "./partnerlogin.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  setInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  PostData = async (e) => {
    // e.preventDefault();
    //***************73dlo ll restaurant */
    let res = await fetch("http://localhost:8000/user/reset-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //key and value from form
        email: this.state.email,
      }),
    });
    let resJson = await res.json();
    console.log(resJson.error);
    if (typeof resJson.error === "undefined") {
      //save to localstorage
      localStorage.setItem("jwt", resJson.token);
      // localStorage.setItem("user", JSON.stringify(resJson.user));
      M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    } else {
      M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    }
  };

  render() {
    return (
      <div className="mycard">
        <div className="card auth-card input-field">
          <ht2>Talaba</ht2>
          <input
            type="text"
            placeholder="email"
            name="name"
            value={this.state.email}
            onChange={this.setInputValue}
          />
          <button
            className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={() => this.PostData()}
          >
            reset password
          </button>
        </div>
      </div>
    );
  }
}
export default ResetPassword;

// //7def al route bta3 reset-paaword in app.js
// import Reset from '/Reset' //aktb al route sa7

// //******Lw al path reset yro7 l reset in app.js
//   <Route exact path="/reset">
//         <Reset/>
//       </Route>
