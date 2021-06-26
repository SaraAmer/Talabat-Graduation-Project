import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class CheckFilter extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Filter By </div>
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Fast Food
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Desserts
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Egyption
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              {/* Egyption */}
              Fried Chicken
            </label>
          </div>

          {/* <button
          type="button"
          className="btn text-green "
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          // backgroundColor: "red",
          style={{ color: "green" }}
        >
          show All{" "}
        </button> */}
          {/********************** ******** Model */}
          {/* <ShowAllModel /> */}
          {/*********** END of Model */}
        </div>
      </div>
    );
  }
}
export default CheckFilter;
