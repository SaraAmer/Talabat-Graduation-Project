import "./partnerlogin.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
class NewPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      //   email: "",
      password: "",
    };
  }
  setInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //token 7y5odo mn al url aw 2li m3molo save fe al database
  //const {token} = useParams()
  PostData = async (e) => {
    // e.preventDefault();
    //75lih llrestaurant
    let res = await fetch("http://localhost:8000/user/new-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //key and value from form
        password: this.state.password,
        //bb3t al token 2li 2rato mn al url hna
        // token
      }),
    });
    let resJson = await res.json();
    console.log(resJson.error);
    if (typeof resJson.error === "undefined") {
      //save to localstorage
      //   localStorage.setItem("jwt", resJson.token);
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
          <ht2>Talabat</ht2>
          <input
            type="password"
            placeholder="new password"
            name="password"
            value={this.state.email}
            onChange={this.setInputValue}
          />
          <button
            className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={() => this.PostData()}
          >
            Update password
          </button>
        </div>
      </div>
    );
  }
}
export default NewPassword;

// import NewPassword from '/Newpassword' //a7ot al route al sa7

//  <Route path="/reset/:token">
//         <NewPassword />
//       </Route>
