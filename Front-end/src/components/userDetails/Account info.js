import React from "react";
import "./Account.css";
import Savedaddr from "./Savedaddr";
import Myorders from "./Myorders";
import Savedcards from "./Savedcards";
import Talabatpay from "./Talabatpay";
import M from "materialize-css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Myaccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: localStorage["userId"],
      firstName: "",
      lastName: "",
      email: "",
      password_confirmation: "",
      password: "",
      gender: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  changeColor = (e) => {
    this.setState({ gender: e.target.value });
    // console.log(e.target.value);
    //  console.log("gender of male:"+this.state.gender);
  };
  async componentDidMount() {
    let res = await fetch(
      `http://127.0.0.1:8000/user/profile/${this.state._id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //   Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          email: result.email,
          firstName: result.firstName,
          lastName: result.lastName,
          gender: result.gender,
        });
      });
  }
  clickUpeEm = async (e) => {
    let res = await fetch(
      `http://127.0.0.1:8000/user/${this.state._id}/changemail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //key and value from form

          email: this.state.email,
          password: this.state.password,
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson.error);
    console.log(resJson.message);

    if (typeof resJson.error === "undefined") {
      localStorage.setItem("jwt", resJson.token);
      M.toast({ html: resJson.message });
    } else {
      M.toast({ html: resJson.error });
    }
  };
  clickUppas = async (e) => {
    let res = await fetch(
      "http://127.0.0.1:8000/user/${this.state._id}/change",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //key and value from form

          password_confirmation: this.state.password_confirmation,
          password: this.state.password,

          current: this.state.current,
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson.error);
    console.log(resJson.message);

    if (typeof resJson.error === "undefined") {
      localStorage.setItem("jwt", resJson.token);
      M.toast({ html: resJson.message });
    } else {
      M.toast({ html: resJson.error });
    }
  };

  clickSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(
      `http://127.0.0.1:8000/user/profile/${this.state._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //key and value from form

          email: this.state.email,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          gender: this.state.gender,
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson.error);
    console.log(resJson.message);

    if (typeof resJson.error === "undefined") {
      localStorage.setItem("jwt", resJson.token);
     // M.toast({ html: resJson.message });
    } else {
      //M.toast({ html: resJson.error });
    }
  };

  render() {
    return (
      <Router>
        <div className="container" id="big" style={{ width: "1000px" }}>
          <div className="card mb-3  border-2 " style={{ maxWidth: " 540px;" }}>
            <div className=" border-bottom ">
              <h3 className="card-title p-4">My Account</h3>
            </div>
            {/* <div><h1>Gender:{this.state.gender}</h1> </div> */}
            <div className="row g-0">
              <div className="col-md-3  ">
                <div className="card border-bottom-0">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item ">
                      <Link>
                        <p style={{ color: "#FF5900" }}>Account Info </p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <a href="/my-account/savedaddr">
                        <p style={{ color: "black" }}>Saved Addresses</p>
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="/my-account/Orders">
                        <p style={{ color: "black" }}>My Orders </p>
                      </a>
                    </li>
                   
                    <li className="list-group-item">
                      <Link to="/my-account/tlbcredit">
                        <p style={{ color: "black" }}>talabat Pay </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card-body ">
                  <form>
                    <div className="form-group row p-2">
                      <label className="col-sm-2 col-form-label text-muted">
                        Email
                      </label>
                      <div className="col-sm-5">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="email@gmail.com"
                          disabled
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="col-sm-5">
                        <a
                          type="button"
                          className="btn"
                          style={{ color: "green", fontSize: "12px" }}
                          data-toggle="modal"
                          data-target="#exampleModal1"
                        >
                          CHANGE EMAIL
                        </a>
                        <a
                          type="button"
                          className="btn"
                          style={{ color: "green", fontSize: "12px" }}
                          data-toggle="modal"
                          data-target="#exampleModal2"
                        >
                          CHANGE PASSWORD
                        </a>
                      </div>
                    </div>
                    <div className="form-group row p-2">
                      <label className="col-sm-2 col-form-label text-muted">
                        First Name
                      </label>
                      <div className="col-sm-5">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="First name"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row p-2">
                      <label className="col-sm-2 col-form-label text-muted">
                        Last Name
                      </label>
                      <div className="col-sm-5">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="last name"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row p-2">
                      <label className="col-sm-2 col-form-label text-muted">
                        Gender
                      </label>
                      <div className="col-sm-5">
                        <div className=" form-inline btn-group" role="group">
                          <div class="form-check disabled">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios3"
                              value="male"
                              style={{ opacity: 0 }}
                              onChange={this.changeColor}
                            />
                          </div>
                          <label
                            for="exampleRadios3"
                            type="btn"
                            className=" btn border"
                            id={
                              this.state.gender == "male"
                                ? "active"
                                : "inactive"
                            }
                          >
                            Male
                          </label>

                          <label
                            for="exampleRadios4"
                            type="btn"
                            className=" btn border"
                            id={
                              this.state.gender == "female"
                                ? "active"
                                : "inactive"
                            }
                          >
                            Female
                          </label>
                          <div class="form-check disabled">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios4"
                              value="female"
                              style={{ opacity: 0 }}
                              onChange={this.changeColor}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div className="form-group row p-2">
                      <div className="col-sm-5">
                        <input
                          className="form-check-input "
                          type="checkbox"
                          value="1"
                          id="invalidCheck1"
                        />{" "}
                        <label
                          className="form-check-label text-muted"
                          for="invalidCheck1"
                        >
                          {" "}
                          Subscribe to our Newsletter
                        </label>
                      </div>
                    </div>
                    <div className="form-group row p-2">
                      <div className="col-sm-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="2"
                          id="invalidCheck2"
                        />{" "}
                        <label
                          className="form-check-label text-muted"
                          for="invalidCheck2"
                        >
                          {" "}
                          Subscribe to our SMS
                        </label>
                      </div>
                      <div className="col-md-5">
                        <button
                          type="button"
                          onClick={this.clickSubmit}
                          className="btn btn-success"
                          data-toggle="modal"
                          data-target="#staticBackdrop"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                    {/* hena el button kan submit */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="staticBackdrop"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  Your information was updated successfully
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-dismiss="modal"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-light">
                  <h5
                    className="modal-title"
                    id="exampleModalLabel1"
                    style={{ color: "#FF5900" }}
                  >
                    Change Email{" "}
                  </h5>
                  <button
                    type="button"
                    className=" border-0 close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group row p-2">
                    <label
                      className="col-sm-3 col-form-label"
                      for="exampleInputPassword"
                      style={{ fontSize: "12px" }}
                    >
                      Current Password
                    </label>
                    <div className="col-sm-5">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        placeholder="current password"
                        name="password"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row p-2">
                    <label
                      className="col-sm-3 col-form-label"
                      for="exampleInputEmail2"
                      style={{ fontSize: "12px" }}
                    >
                      New Email{" "}
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail2"
                        placeholder="New Email"
                        name="email"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default border-success text-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.clickUpeEm}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-light">
                  <h5
                    className="modal-title"
                    id="exampleModalLabel2"
                    style={{ color: "#FF5900" }}
                  >
                    Change Password
                  </h5>
                  <button
                    type="button"
                    className=" border-0 close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group row p-2">
                    <label
                      className="col-sm-3 col-form-label"
                      for="exampleInputPassword1"
                      style={{ fontSize: "12px" }}
                    >
                      Current Password
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="current password"
                        name="current"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row p-2">
                    <label
                      className="col-sm-3 col-form-label"
                      for="exampleInputPassword2"
                      style={{ fontSize: "12px" }}
                    >
                      New Password
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                        placeholder="new password"
                        name="password"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row p-2">
                    <label
                      className="col-sm-3 col-form-label"
                      for="exampleInputPassword3"
                      style={{ fontSize: "12px" }}
                    >
                      Re-type New password
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword3"
                        placeholder="Re-type New password"
                        name="password_confirmation"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default border-success text-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.clickUppas}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route
            path="/my-account/savedaddr"
            exact
            component={Savedaddr}
          ></Route>
          <Route path="/my-account/orders" exact component={Myorders}></Route>
          <Route path="/my-account/cards" exact component={Savedcards}></Route>
          <Route
            path="/my-account/tlbcredit"
            exact
            component={Talabatpay}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
export default Myaccount;
