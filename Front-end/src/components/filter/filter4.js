import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class RestaurantCard extends React.Component {

  constructor(props){
    super();
   // console.log(this.props.restaurant);
  }
  render() {
    return (
     <a href={`/restaurant/${this.props.restaurant._id}/food`}  className="col-4">
  <div className="card" style={{display:"inline-block", height: '300px', marginRight: '15px', cursor:"pointer"}}>
    <img className="card-img-top" src={`http://localhost:8000/${this.props.restaurant.img}`}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{this.props.restaurant.name}</h5>
      <p class="card-text">{this.props.restaurant.desc}</p>
    </div>
  </div>
</a>
    );
  }
}

export default RestaurantCard;
