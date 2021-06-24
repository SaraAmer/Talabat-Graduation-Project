
import React from 'react';
import "./Header.css";
import Dashboard from "../Dashboard/Dashboard"
import Profile from "../profile/profile"
import orders from "../orders/orders"
import OrderDetails from "../orders/orderDetails"
import { faPenAlt , faBell , faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Orders from '../orders/orders';

class RestaurantHeader extends React.Component{
    render(){
            return ( 
                <div >
                <Router >
                    <nav className="navbar navbar-expand-lg navbar-light" id ="restaurant-header" >
                        <div className="container-fluid ">
                            <label className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </label>
                            <a className="navbar-brand text-white" href="/restaurant/dashboard" ><h1>talabat Partners</h1></a>
                          
                                <div className=" container float-right  d-none d-sm-block" id="restaurnt-main-nav">
                            
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to="/orders" className="nav-link text-white "  >Orders</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white"  to="/menu" >Profile</Link>
                                        </li>

                                        <li>
                                            <FontAwesomeIcon icon={faBell} color="white" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="notification-drop">
                                                    <a className="dropdown-item" href="#"> <FontAwesomeIcon icon={faPenAlt} className="drop-down-icon" />You Have a New Order</a>
                                                    <a className="dropdown-item" href="#"> <FontAwesomeIcon icon={faCommentAlt} className="drop-down-icon" />You Have a New Review</a>
                                                
                                                </div>
                                        </li>
                                         
                                        <li className="nav-item ">
                                            <div className="dropdown nav-link">  
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <button type="button" className="btn text-white border-white nav-link "  onClick ={this.loginHandler} data-toggle="modal" data-target="#exampleModal">
                                            logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                        
                            </div>
                    </nav>
                    <Switch>
                        <Route exact path="/restaurant/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="/menu">
                            <Profile/>
                        </Route>
                        <Route path="/orders">
                            <Orders/>

                        </Route>
                        <Route exact path="/order/1" >
              <OrderDetails/>

          </Route>
                    </Switch>    

                </Router>
                </div>
            );
    }
}
export default RestaurantHeader