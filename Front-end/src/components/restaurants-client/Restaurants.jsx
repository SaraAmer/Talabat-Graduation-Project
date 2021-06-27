import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import restaurantList from '../../restaurantList';
import Restaurant from './Restaurant';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationMenu from './pagination';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function restaurants(restaurant){
    return(
//         <div style={{display:"inline-block"}}>
//         <a  href={`/restaurants/${restaurant.id}`}>
//         <Restaurant
//         id={restaurant.id}
//         name={restaurant.name}
//         logo={restaurant.logo}
//         desc={restaurant.desc}
//         />
//         </a>
//      <Router>   
// <Switch>
//         <Route path="/restaurants/:id" component={RestaurantDetails} />

// </Switch>  
// </Router>  
//  </div>
<Restaurant
id={restaurant._id}
name={restaurant.name}
logo={restaurant.img}
cusine={restaurant.cusine}


/>
      
    );
}
function RestaurantList(props) {
   console.log("UN RestaurantList");
   console.log(props.rests);
    // const [rests, setRests]= useState(restaurantList);
    // //setRests(...restaurantList);
    // const [currentPage, setCurrentPage] =useState(1);
    // const [restPerPage, setRestPerPage] =useState(4);


    // const indexOfLastRest = currentPage * restPerPage;
    // const indexOfFirstRest = indexOfLastRest - restPerPage;
    // const currentRests = rests.slice(indexOfFirstRest, indexOfLastRest);
    



  return (
    // <div className="container">
    // <div className="all-restaurants">
    // <div className="content">
    <div className="row justify-content-md-center">
    {props.rests.map(restaurants)}
     {/* </div>
    </div> */}

{/* <div className="pagination justify-content-md-center">
<PaginationMenu
    items={restaurantList.length}
/>

</div> */}
    {/* </div> */}
    
    </div>
  );
}
export default RestaurantList;
