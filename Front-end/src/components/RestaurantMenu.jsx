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

import {
     Link,
    useParams
  } from "react-router-dom"

function RestaurantMenu() {
    const ID = localStorage["userId"];
    const [restaurant, setRestaurant]=useState([]);
    const [LS, setLS] = useState([]);
    const [cartValues, setCartValues] = useState({
     
        products: [
            {
                store:"",		
                subtotal: 0,
                service: 0,
                count: 0
            
            }
    
        ],
    }); 

   const decrease = (e)=>{
        const newCount = cartValues.count - 1;
        setCartValues({...cartValues, newCount })
    
        //setCartValues({count: count - 1 });
    }
    const  increase = (e)=>{
        const newCount = cartValues.count + 1;
        setCartValues({...cartValues, newCount})
    }
 const addToSummary=(food)=>{

    const yourFood= {
                food,
                userId : localStorage["userId"],
                count: 1,
                resId : food.restaurant
            }

    //has no cart
    console.log("LLLLLLLLLSSSSSSSSSSSS");
    console.log(LS);
    if(LS.length == 0){
        setLS(()=>{
            LS.push(yourFood);
        })
        localStorage.setItem(ID, LS );
    }
    // const s =localStorage["userId"];
    // localStorage.removeItem(s);
    //     const yourFood= {
    //         food,
    //         userId : localStorage["userId"],
    //         count: 1,
    //         resId : food.restaurant
    //     }

    //     const prevLs = localStorage[localStorage["userId"]] ? localStorage[localStorage["userId"]] : [];
    //     console.log("prevLs");
    //     console.log(prevLs);
    //     if(prevLs.length == 0 || prevLs.resId === yourFood.resId ){
    //         prevLs.push(yourFood);
    //         localStorage[localStorage["userId"]]=JSON.stringify(prevLs);
    //         console.log("prevLs[0].restaurant === yourFood.resId ");

    //         console.log(prevLs[0].resId);
    //         console.log(yourFood.resId);

    //     }
    //         else{
    //             //Diferent rest
    //             if(prevLs.resId != yourFood.resId   ){
    //                 const choice =  window.confirm("You must empty your cart First");
    //                 if(choice){
    //                     console.log("choice");
    //                     const s =localStorage["userId"];
    //                     localStorage.removeItem(s);
    //                 }
    
    //             }
             
                   
                    
                

    //         }

        }
       
        
        
    //     console.log(prevLs);
      
    //   localStorage["count"]=JSON.stringify(cartValues.count);
        
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
    if(localStorage["userId"]){
        setLS(()=>{
            LS.push(localStorage.getItem(ID));
        });
    }

    console.log("LS");
    console.log(LS);
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
  
 
            <div className="row ">
                <div className="col-4">
                <NavLink activeClassName="active" to="menu">
               
               <span> <MdRestaurantMenu/> Menu</span>
                </NavLink>
               
                
              </div>
                <div className="col-4"> 
                <div className="item">
                <NavLink to="review" >
                <span> <AiFillWechat/> Review</span>
                </NavLink>
                 </div>
                </div>
                <div className="col-4">
                <div className="item">
                <NavLink to="info" >
                <span> <AiFillInfoCircle/> Info</span>
                </NavLink>
                
                </div>
                 </div>
                 
            </div>
            <Switch>
         <Route path = "/menu" component ={()=> <Menu
             food= {food}
             addToLocalStorage= {addToSummary}
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