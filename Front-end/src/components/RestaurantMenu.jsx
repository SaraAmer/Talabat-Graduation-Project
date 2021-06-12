import React from 'react';
import { FaRegSmile} from 'react-icons/fa';
import {FaCcVisa, FaCcMastercard} from 'react-icons/fa';
import {IoIosChatbubbles, IoIosCash} from 'react-icons/io';
import {MdRestaurantMenu} from 'react-icons/md';
import {AiFillWechat, AiFillInfoCircle} from 'react-icons/ai';
import { Router, Route, Switch } from 'react-router';
import Menu from './resturant-menu/Menu';
import Review from './resturant-menu/review';
import Info from './resturant-menu/Info';
import { createHashHistory } from 'history';
import { Link } from 'react-router-dom';
function RestaurantMenu() {
    const history = createHashHistory();
    //var isActive = this.context.router.route.location.pathname === this.props.to;
    //var className = isActive ? 'active' : '';
return(
    <div className="restaurant-menu">
        <div className="restaurant-info">
        <div className="row">
            <div className="col-lg-5 col-md-7 col-sm-9">
            <div className="img-container">
            <img src="https://images.deliveryhero.io/image/otlob/restaurants/logo_636996632671251135.jpg?width=180" alt="" srcset="" />
            </div>
            <div className="img-info">
                <h3>Holmes</h3>
                <p>in Elseouf Egypt</p>
                <p>Burgers</p>
                <p>Min. order: EGP 15.00</p>
            </div>
            </div>
            <div className="col-lg-5 col-md-3 col-sm-3"></div>
            <div className="col-lg-2 col-md-7 col-sm-9">
                <div className="status">
                    <p>Busy</p>
                    <p> <FaRegSmile/> very good </p>
                    <span className="visa"> <FaCcVisa/></span>
       <span className="master-card">  <FaCcMastercard /></span>
       <span className="cash"><IoIosCash/></span>
                </div>
            </div>
        </div>
        </div>
        <div className="menu-and-review-and-info">
        <Router history = {history}>
  
 
            <div className="row">
                <div className="col-3">
                <Link activeClassName="active" to="menu">
               
               <span> <MdRestaurantMenu/> Menu</span>
                </Link>
               
                
              </div>
                <div className="col-3"> 
                <div className="item">
                <Link to="review" >
                <span> <AiFillWechat/> Review</span>
                </Link>
                 </div>
                </div>
                <div className="col-3">
                <div className="item">
                <Link to="info" >
                <span> <AiFillInfoCircle/> Info</span>
                </Link>
                
                </div>
                 </div>
            </div>
            <Switch>
         <Route path = "/menu" component = {Menu} />
         <Route path = "/review" component = {Review} />
         <Route path = "/info" component = {Info} />
         </Switch>
            </Router>
        </div>
      
    </div>
);
}

export default RestaurantMenu;