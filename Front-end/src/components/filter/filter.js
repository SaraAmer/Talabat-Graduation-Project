import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RestaurantCard from "./filter4";
import NavFilter from "./filter1";
import CheckFilter from "./filter2";
import CheckFilter2 from "./filter3";
class Filter extends React.Component {
  render() {
    return (
      <div className="container " style={{ width: "1500px" }}>
        <div className="card mb-3 border-2 " style={{ maxWidth: " 540px;" }}>
          <div className="card m-3">
            <div className="card-header"></div>
            {/* ****** */}
            <h2>Restaurants in Salah ElDin Street</h2>
            <div className="row">
              <div className="col-4">
                {/* search */}
                <div className="input-group">
                  <div className="input-group rounded">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span
                      className="input-group-text border-0"
                      id="search-addon"
                    >
                      <i className="bi bi-search"></i>
                    </span>
                  </div>
                </div>
              </div>
              {/* ********** */}
              <div className="col-8">
                {/* sortby */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  {/* ***************************************** */}
                  <NavFilter />
                  {/* ************************* */}
                </nav>
              </div>
              {/* **************** */}
            </div>
            <div className="row">
              <div className="col-4">
                {/* ***************Card************* */}
                <CheckFilter />
                {/* ********************************** */}
                <CheckFilter2 />
                {/* ***********End of Card************************* */}
              </div>
              <div className="col-8">
                <RestaurantCard />
              </div>
            </div>
            {/* ****** */}
          </div>
        </div>
      </div>
    );
  }
}
export default Filter;
