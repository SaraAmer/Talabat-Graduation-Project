import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavFilter extends React.Component {
  render() {
    return (
      <div
        className="container-fluid"
        // style={{ backgroundColor: "white" }}
      >
        {/* <a className="navbar-brand" href="#">
          Sort By:
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Recommended
            </a>
            <a className="nav-link" href="#">
              Ratings
            </a>
            <a className="nav-link" href="#">
              Newest
            </a>
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              A to Z
            </a>
            <a className="nav-link" href="#">
              Min.Order Amount
            </a>
            <a className="nav-link" href="#">
              Fastest Delivery
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}
export default NavFilter;
