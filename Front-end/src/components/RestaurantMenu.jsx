import React, {useState, useEffect} from 'react';
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
import { NavLink } from 'react-router-dom';
import FetchRestaurant from './fetchRestaurant';
import axios from 'axios';
import Cart from './carts/cart';
import {
   
    useParams
  } from "react-router-dom"
function RestaurantMenu() {
    const [restaurant, setRestaurant]=useState([]);
    const [food, setFood]=useState([]);
    let { resId } = useParams();
    console.log(resId);
    const history = createHashHistory();


    
//   useEffect(() => {
   
//     fetch(`http://localhost:8000/restaurant/${resId}/food`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Success ", data);
//         setFood(data);
//       })
//       .catch((error) => {
//         console.log("Error", error);
//       });
//   }, []);
useEffect(() => {
    const fetchData = async () => {
      const fetchedFood = await axios(`http://localhost:8000/restaurant/${resId}/food`);
      const fetchedRestaurant = await axios(
        `http://localhost:8000/restaurants/${resId}`
      );
        setFood(fetchedFood.data.food);
        setRestaurant(fetchedRestaurant.data.restaurant);

     
    };

    fetchData();
  }, []);
console.log(food.food);
console.log(restaurant.restaurant);
return(
    <div className="restaurant-menu">
        <div className="restaurant-info">
        <div className="row">
            <div className="col-lg-5 col-md-7 col-sm-9">
            <div className="img-container">
            <img  src={`http://localhost:8000/${restaurant.img}`}  alt="" srcset="" />
            </div>
            <div className="img-info">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.address? restaurant.address.street : "" }</p>
                <p>{restaurant.cusine}</p>
                <p>Min order: {restaurant.minOrderAmount} EG</p>
            </div>
            </div>
            <div className="col-lg-5 col-md-3 col-sm-3"></div>
            <div className="col-lg-2 col-md-7 col-sm-9">
                <div className="status">
                    <p>Busy</p>
                    <p> <FaRegSmile/> {restaurant.rate} </p>
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
                <NavLink activeClassName="active" to="menu">
               
               <span> <MdRestaurantMenu/> Menu</span>
                </NavLink>
               
                
              </div>
                <div className="col-2"> 
                <div className="item">
                <NavLink to="review" >
                <span> <AiFillWechat/> Review</span>
                </NavLink>
                 </div>
                </div>
                <div className="col-3">
                <div className="item">
                <NavLink to="info" >
                <span> <AiFillInfoCircle/> Info</span>
                </NavLink>
                
                </div>
                 </div>
                 <div className="col-4">
 
                 {/* <div>
			 
             <span  className="m-2 h5" style={{color:'#FF5900'}}>Your Cart</span>
             <div className="card" style={{width: "22rem"}}>
                 <div className="card-body">
                 { count> 0? products.map((prod) => {
                     return (<div>
                     <h6 className="card-subtitle m-2 text-muted">{prod.store}</h6>
                     <div  className=" card-body bg-light border" >
                         <div  className="input-group"  style={{width: "30rem"}}>
                             <span  className="input-group-btn">
                                 <button type="button"   onClick={decrease}className="btn btn-sm border"  data-type="minus" data-field="quant[1]">
                                     <span style={{color:'#FF5900'}}><BiMinus/>
                                     </span>
                                 </button>
                             </span>
                             <p></p>
                             <input type="text" name="quant[1]" className="input-number" value={count} min="0" max="10" style={{width:"20px"}}/>
                             <span  className="input-group-btn">
                                 <button type="button"  onClick={increase}className="btn btn-sm border" data-type="plus" data-field="quant[1]">
                                 <span style={{color:'#FF5900'}}><BiPlus/>
                                 </span>
                                 </button>
                             </span>
                             <div style={{marginLeft:"20px"}} >offers
                             </div>
                             <div  className="text-muted"style={{marginLeft:"20px"}} >{prod.subtotal*count}
                             </div>
                             <div className="hovers" style={{marginLeft:"70px"}} onClick={() => {if(window.confirm('Delete the item?')){state.count=0;}}}><BiMinusCircle/>
                             </div>
                         </div>
                     </div>
                     <div className=" row" style={{fontSize:"12px"}}> 
                         <label className="col-8 text-muted" >Subtotal</label>
                         <div className="col-4">
                             <div  className="text-muted"style={{marginLeft:"20px"}} >EGP {prod.subtotal*count}
                             </div>
                         </div>
                     </div>
                     <div className=" row" style={{fontSize:"15px"}}> 
                         <label className="col-8 " >Service Charge</label>
                         <div className="col-4">
                             <div style={{marginLeft:"20px"}} >EGP {prod.service}
                             </div>
                         </div>
                     </div>
                     <div className=" row" style={{fontSize:"18px"}}> 
                         <label className="col-7" >Total Amount</label>
                         <div className="col-5">
                             <div style={{marginLeft:"20px"}} >EGP {prod.service+prod.subtotal*count}
                             </div>
                         </div>
                         
                         <Link to="/checkout" type="btn"  className="btn btn-success " onClick={addToSummary}>PROCEED TO CHECKOUT</Link>
                     </div>
                     </div>
                     );
                     }):<div></div>}					
                 </div>
             </div>
         </div> */}
                 </div>
            </div>
            <Switch>
         <Route path = "/menu" component ={()=> <Menu
             food= {food}
         />} />
         <Route path = "/review" component = {Review} />
         <Route path = "/info" component ={()=>
         <Info
          name={restaurant.name}
          minOrder={restaurant.minOrderAmount}
          workingHours={restaurant.workingHours}
          deliveryFee = {restaurant.vat}
          rating={restaurant.rate}
          cuisines = {restaurant.cusine}
           />} />
         </Switch>
            </Router>
        </div>
      
    </div>
);
}

export default RestaurantMenu;