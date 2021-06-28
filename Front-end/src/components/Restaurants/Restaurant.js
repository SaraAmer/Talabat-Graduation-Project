import React from 'react';
import RestaurantHeader from './Header/Header';
import Menu from './profile/profile'
import Dashboard from "./Dashboard/Dashboard"
import Profile from "./profile/profile"
import Orders from "./orders/orders"
import OrderDetails from "./orders/orderDetails"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
class Restaurant extends React.Component{
    render(){
        return (
          <div >   
   
              <RestaurantHeader/>
             
          </div>
        
        )
    }
}
export default Restaurant