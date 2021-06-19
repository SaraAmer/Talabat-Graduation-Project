import React, {useState} from 'react';
import Title from './restaurants-client/Title';
import Restaurants from './offers/Restaurants'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import PaginationMenu from './offers/pagination';
import restaurantList from '../restaurantList'
import Offers from './offers/offers';
import Coupons from './offers/Coupons';
import { createHashHistory } from 'history';
import { Link, NavLink } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router';

function OffersAndCoupons() {
    const history = createHashHistory();


    return(
        <div className="OffersAndCoupons">
        <div className="content">
        <Title
            name="offers"
        />
           <Router history = {history}>
           <div className="container-fluid" style={{marginTop:10}}>
           <div className="row offers">
            <div className="col-6 promotions">
                
                <NavLink exact  activeClassName="active-nav" to="/">
               
                <h3 style={{color:"black"}} >Promotions</h3>
                </NavLink>
            </div>
            <div className="col-6 coupons">
             
                <NavLink exact activeClassName="active-nav" to="/coupons">
               
                <h3 style={{color:"black"}} >Coupons</h3>
               </NavLink>
            </div>
           
        </div>
           </div>
  

        <Switch>
         <Route exact path = "/" component = {Offers} />
         <Route path = "/coupons" component = {Coupons} />
         
         </Switch>
        </Router>
         
        </div>
        
        </div>
    );
}
export default OffersAndCoupons;