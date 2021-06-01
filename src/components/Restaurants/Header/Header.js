
import React from 'react';
import "./Header.css";
import Dashboard from "../Dashboard/Dashboard"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

class RestaurantHeader extends React.Component{
    render(){
            return ( 
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light " >
                        <div className="container-fluid ">
                            <label className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </label>
                            <a className="navbar-brand text-white" href="/" ><h1>talabat Partners</h1></a>
                          
                                <div className=" container float-right  d-none d-sm-block">
                            
                                    <ul className="navbar-nav ">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link text-white " aria-current="page" >Orders</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="Partner">Menu</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="#">All Restaurants</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="#" >العربيه </Link>
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
                        <Route path="">
                            <Dashboard/>
                        </Route>
                    </Switch>    

                </Router>
            );
    }
}
export default RestaurantHeader