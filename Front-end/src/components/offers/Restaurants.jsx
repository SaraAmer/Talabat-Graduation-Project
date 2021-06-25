import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import restaurantList from '../../restaurantList';
import Restaurant from './Restaurant';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationMenu from './pagination';

function restaurants(restaurant){

    console.log("RESTAURANTS");
    console.log(props.rests);
    return(

<Restaurant
id={restaurant.id}
name={restaurant.name}
logo={restaurant.img}
desc={restaurant.desc}


/>
      
    );
}
function RestaurantList(props) {
   
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
