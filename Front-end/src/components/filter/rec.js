import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RestaurantCard from "./filter4";
import NavFilter from "./filter1";
import CheckFilter from "./filter2";
import CheckFilter2 from "./filter3";
import {
  useParams
} from "react-router-dom";
class Filter extends React.Component {
  constructor(props){
    super();
    this.state = {
      restaurants : [],
      address : ""
    }
    

  }

  async componentDidMount(){
    const queryParams = window.location.href;
    const address = queryParams.split('/')[4];
    this.setState({
      address: address 
    })
	   let res = await fetch(`http://127.0.0.1:8000/restaurants/street/${address}`, {
      	method: "GET",
     	 headers: {
        "Content-Type": "application/json",}
    })
	 .then(res => res.json())
      .then(result => {
        console.log(result.restaurants);
        this.setState({
    restaurants: result.restaurants
        });
      });
 	
 
	
   }
  render() {
    return (
      <div className="container " style={{ width: "1500px" }}>
        <div className="card mb-3 border-2 " style={{ maxWidth: " 540px;" }}>
          <div className="card m-3">
            <div className="card-header"></div>
            {/* ****** */}
            <h2>Restaurants in {this.state.address} Street</h2>
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
              <div className="row" style={{margin: '10px'}}>
           
              {this.state.restaurants.map(rest =>{
                return(
                  <RestaurantCard restaurant = {rest}/>
                );

              })}

              </div>

              
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
