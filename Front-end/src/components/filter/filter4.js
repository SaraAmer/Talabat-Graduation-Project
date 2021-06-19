import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class RestaurantCard extends React.Component {
  render() {
    return (
      <div className="card-body ">
        <div className="card flex-row">
          <img
            src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
            className="card-img-top"
            style={{ width: "20%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Cook Door</h5>
            <p className="card-text text-muted">Fast Food,Seyami,Sandwiches</p>
            <p className="card-text text-muted">
              <i className="bi bi-emoji-smile"></i>Very good
            </p>
            <p className="card-text text-muted">
              within 31 mins Service:4.00 Min:15.00
              {/* <span className="text-danger">cancelled</span> */}
            </p>

            <p className="card-text text-muted">
              Live Tracking{" "}
              <span style={{ marginright: "50px" }}>contactless drop-off</span>
              {/* <span className="text-danger">cancelled</span> */}
            </p>
            <div className=" d-flex justify-content-end">
              <a className="btn border"></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantCard;
