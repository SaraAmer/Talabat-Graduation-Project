import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class CheckFilter extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Filter By</div>
        <div className="card-body">
          <form action="/action_page.php" method="get">
            <input type="checkbox" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1"> Deals and Offers</label>
            <br></br>
            <input type="checkbox" name="vehicle2" value="Car" />
            <label htmlFor="vehicle2"> USe Vouncher Here</label>
            <br></br>
            <input type="checkbox" name="vehicle3" value="Boat" checked />
            <label htmlFor="vehicle3"> Online Payment Available</label>
            <br></br>

            <input type="checkbox" name="vehicle4" value="Boat4" checked />
            <label htmlFor="vehicle3"> Value Meals</label>
            <br></br>

            <input type="checkbox" name="vehicle5" value="Boat5" checked />
            <label htmlFor="vehicle3"> Family Meals</label>
            <br></br>
            <input type="checkbox" name="vehicle6" value="Boat6" checked />
            <label htmlFor="vehicle3">New Restaurants</label>
            <br></br>
            <input type="submit" className="d-none" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default CheckFilter;
