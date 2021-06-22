import React from 'react';

import { Router, Route, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { NavLink } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

function Menu(){
  const history = createHashHistory();
    return(
        // <div className="menu container">
        // {/* <div className="row">
        //     <div className="side col-lg- col-sm-6 col-md-6">
        //         <div className="title"><h3>Categories</h3></div>
        //         <a href="#most-selling">Most Selling</a>
        //         <a href="#sauces">Sauces</a>
        //         <a href="#beef-burger">Beef Burger</a>
        //         <a href="#little-bites">Little Bites</a>
        //         <a href="#side-items">Side Items</a>
        //         <a href="#beverages">Beverages</a>
        //     </div>
        // </div> */}
        
        // </div>
        <div class="menu container">
            <div>
    <section id="section-1">section 1</section>
    <section id="section-2">section 2</section>
    <section id="section-3">section 3</section>
  </div>
  <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
    <li><a href="#section-1">section 1</a></li>
    <li><a href="#section-2">section 2</a></li>
    <li><a href="#section-3">section 3</a></li>
  </Scrollspy>
</div>
    );
}

export default Menu;