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

function Menu(props){
     const ID = localStorage["userId"];
    const [restaurant, setRestaurant]=useState([]);
    const [LS, setLS] = useState([]);
    const [cartValues, setCartValues] = useState({
        count: 1,
        products: [
            {
                store:"Cook Door",		
                subtotal:200,
                service:4,
                count:1
            
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
      <div className="row">
          <div className="col-7">
           
              {props.food.map(f =>{
              return(
                 <div className="container row">
                    <div onClick={()=>{props.addToLocalStorage(f)}}  className="col-2">
                      <div className="card" style={{display:"inline-block", height: '300px', marginRight: '15px', cursor:"pointer"}}>
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
                 { cartValues.count> 0? cartValues.products.map((prod) => {
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
                             <input type="text" name="quant[1]" className="input-number" value={cartValues.count} min="0" max="10" style={{width:"20px"}}/>
                             <span  className="input-group-btn">
                                 <button type="button"  onClick={increase}className="btn btn-sm border" data-type="plus" data-field="quant[1]">
                                 <span style={{color:'#FF5900'}}><BiPlus/>
                                 </span>
                                 </button>
                             </span>
                             <div style={{marginLeft:"20px"}} >offers
                             </div>
                             <div  className="text-muted"style={{marginLeft:"20px"}} >{prod.subtotal*cartValues.count}
                             </div>
                             <div className="hovers" style={{marginLeft:"20px"}} onClick={() => {if(window.confirm('Delete the item?')){cartValues.count=0;}}}><BiMinusCircle/>
                             </div>
                         </div>
                     </div>
                     <div className=" row" style={{fontSize:"12px"}}> 
                         <label className="col-8 text-muted" >Subtotal</label>
                         <div className="col-4">
                             <div  className="text-muted"style={{marginLeft:"20px"}} >EGP {prod.subtotal*cartValues.count}
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
                             <div style={{marginLeft:"20px"}} >EGP {prod.service+prod.subtotal*cartValues.count}
                             </div>
                         </div>
                         
                         <Link to="/checkout" type="btn"  className="btn btn-success text-white" onClick={addToSummary}>PROCEED TO CHECKOUT</Link>
                     </div>
                     </div>
                     );
                     }):<div></div>}					
                 </div>
          </div>  
  </div>
  </div>
    );
}

export default Menu;