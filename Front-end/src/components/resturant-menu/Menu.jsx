import React from 'react';

import { Router, Route, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { NavLink } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import { BiPlus } from "react-icons/bi";
import {BiMinus } from "react-icons/bi";
import {BiMinusCircle}  from "react-icons/bi";
import {useState, useEffect} from 'react';
import axios from 'axios';

import {
     Link,
    useParams
  } from "react-router-dom"
import { data } from 'jquery';
import CartItem from './CartItem';

function Menu(props){
     const ID = localStorage["userId"];
    const [restaurant, setRestaurant]=useState([]);
    const [LS, setLS] = useState([]);
    const [food, setFood]=useState([]);
    let { resId } = useParams();
    console.log(resId);
    const history = createHashHistory();
    const [cartValues, setCartValues] = useState([]); 
    const [cart, setCart] = useState([]); 
    const [count, setCount] = useState(); 
    const decrease = (e)=>{
        const newCount = count - 1;
        setCount(newCount)
    
        //setCartValues({count: count - 1 });
    }
    const  increase = (e)=>{
        const newCount = count + 1;
        setCount(newCount)
    }

 const addToSummary=(food)=>{
 

    console.log(food.name);
    console.log(food.price);
    console.log(food.restaurant);
    console.log(food._id);

    
  
        let updatedCart = food;
        cart.push(updatedCart);
  
    cart.map(e =>{
        console.log("Mye");
        console.log(e);
    });
    console.log("Length");
    console.log(cart.length);
  if(!localStorage[ID]){
    localStorage.setItem(ID, JSON.stringify(cart));
  }
    localStorage[ID] = JSON.stringify(cart);
   

}
   
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
<div className="row">
<div className="col-7">
 
    {props.food.map(f =>{
    return(
       <div className="container row">
          <div onClick={()=>{addToSummary(f)}}  className="col-3">
            <div className="card" style={{display:"inline-block", height: '300px' ,width: '300px' , marginRight: '15px', cursor:"pointer"}}>
              <img className="card-img-top" src={`http://localhost:8000/${f.img}`}  alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">{f.name}</h5>
                <p class="card-text">{f.price}</p>
              </div>
            </div>
            </div>
          </div> ); } )}
  </div>
<div className="col-5 ">

   <div className="card m-2" style={{width: "22rem"}}>
       <div className="card-body">
       {cart.length> 0? cart.map((prod) => {
                            return (<div>
                                <CartItem
                                    cart={prod}
                                />
                                </div>
                                );
           }):<div>empty card</div>}
           <div className=" row" style={{fontSize:"12px"}}> 
               <label className="col-8 text-muted" >Subtotal</label>
               <div className="col-4">
                   <div  className="text-muted"style={{marginLeft:"20px"}} >EGP 
                   </div>
               </div>
           </div>
           <div className=" row" style={{fontSize:"15px"}}> 
               <label className="col-8 " >Service Charge</label>
               <div className="col-4">
                   <div style={{marginLeft:"20px"}} >EGP 
                   </div>
               </div>
           </div>
           <div className=" row" style={{fontSize:"18px"}}> 
               <label className="col-7" >Total Amount</label>
               <div className="col-5">
                   <div style={{marginLeft:"20px"}} >EGP
                   </div>
               </div>
               
               <Link to="/checkout" type="btn"  className="btn btn-success text-white" onClick={addToSummary}>PROCEED TO CHECKOUT</Link>
           </div>
           </div>
         					
       </div>
</div>  
</div>


 )
}

export default Menu;