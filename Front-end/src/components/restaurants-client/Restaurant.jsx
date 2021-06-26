import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import  RestaurantDetails from './RestaurantDetails';



function Restaurant(props) {
  console.log("hhhhhhhhhhhhhhhhh");
  console.log(props);
  return (
    
      <div className="restaurant col-lg-2 col-md-3 col-sm-5">
      <a style={{display:"inline-block"}}  href={`/restaurants/${props.id}`}>

      <div className="img-container">
      
      <img style={{width: '150px', height: '150px'}} src={`http://localhost:8000/${props.logo}`} />

      </div>
        <hr />
        <div className="details">
        <h2>{props.name}</h2>
        <p>{props.cusine}</p>
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
