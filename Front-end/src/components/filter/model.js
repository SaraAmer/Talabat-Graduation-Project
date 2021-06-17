import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ShowAllModel extends React.Component {
  render() {
    return (
      <div
        className="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                All Cuisines
              </h5>

              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                style={{
                  float: "right",
                }}
              ></button>
            </div>
            <div className="row">
              {/* ************************************ */}
              <div className="col-3">
                {/* ******************************** */}
                <div
                  style={{
                    padding: "10px",
                  }}
                ></div>
                {/* ******************************* */}

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    All
                  </label>
                </div>
                {/* ***************************** */}
              </div>
              {/********************************col-3 ************************************************/}
              <div className="col-3">
                {/* ******************************** */}
                <div
                  style={{
                    padding: "10px",
                  }}
                ></div>
                {/* ******************************* */}

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    All
                  </label>
                </div>
                {/* ***************************** */}
              </div>
              {/********************************col-3 ************************************************/}
              <div className="col-3">
                {/* ******************************** */}
                <div
                  style={{
                    padding: "10px",
                  }}
                ></div>
                {/* ******************************* */}

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    All
                  </label>
                </div>
                {/* ***************************** */}
              </div>
              {/* *********************************col-3*************** */}
              <div className="col-3">
                {/* ******************************** */}
                <div
                  style={{
                    padding: "10px",
                  }}
                ></div>
                {/* ******************************* */}

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    All
                  </label>
                </div>
                {/* ***************************** */}
              </div>
              {/* ****************************************************** */}
              {/* ********* */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ShowAllModel;
