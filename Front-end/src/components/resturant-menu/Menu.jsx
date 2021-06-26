import React from 'react';

import { Router, Route, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { NavLink } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

function Menu(props){
  const history = createHashHistory();
  console.log("MENUUUUUUU");
  console.log(props.food);
    return(
    <div className="container row">
     {props.food.map(f =>{
       return(
         <div className="col-2">
         <div className="card" style={{display:"inline-block", height: '300px', marginRight: '15px', cursor:"pointer"}}>
    <img className="card-img-top" src={`http://localhost:8000/${f.img}`}  alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{f.name}</h5>
      <p class="card-text">{f.price}</p>
    </div>
  </div>
         </div>

       );

     } )}

  </div>
    );
}

export default Menu;