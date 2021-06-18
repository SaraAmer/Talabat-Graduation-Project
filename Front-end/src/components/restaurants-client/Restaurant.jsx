import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import  RestaurantDetails from './RestaurantDetails';
function Restaurant(props) {
  return (
    
      <div className="restaurant col-lg-2 col-md-3 col-sm-5">
      <a style={{display:"inline-block"}}  href={`/restaurants/${props.id}`}>

      <div className="img-container">
      <img src={props.logo} />

      </div>
        <hr />
        <div className="details">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        </div>
       </a>
       <Router>   
 <Switch>
         <Route path="/restaurants/:id" component={RestaurantDetails} />

 </Switch>  
 </Router> 
      </div>
  );
}

export default Restaurant;