import React, {useState, useEffect} from 'react'
import RestaurantList from './Restaurants';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import {GoLocation} from 'react-icons/go' ;
import {MdMyLocation} from 'react-icons/md';
import {AiFillStar, AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai';
import {IoIosChatbubbles, IoIosCash} from 'react-icons/io';
import {FaCcVisa, FaCcMastercard, FaRegSmile} from 'react-icons/fa';
import bg from '../../images/brandpage-bg.jpg';
import axios from 'axios';
import {
 
    useParams
  } from "react-router-dom";
function RestaurantDetails(props) {
    let {restId} = useParams();
    console.log("use params");
    console.log(restId);
    const [rest, setRest]= useState([]);

    useEffect(() => {
    
      const fetchData = async () => {
        const fetchedRestaurant = await axios(`http://localhost:8000/restaurants/${restId}`);
          setRest(fetchedRestaurant.data.restaurant);
        
       
      };
    
      fetchData();
    }, []);


return(
    <div className="container">
<div className="restaurant-details">
    <div className="restaurant-details-content">
    
            <img src={bg} alt="" srcset="" />

   <div className="header row">
   <div className="col-1"></div>
   <h1 className="col-10 name">{rest.name}</h1>
   <div className="col-1"></div>
   <div className="col-1"></div>
<p className="col-10">{rest.cusine}</p>
<div className="col-1"></div>
<div className="col-1"></div>
<h2 className="col-10">Select your area to see restaurant menu</h2>
<div className="col-1"></div>
   </div>
    <div className="map row">
    <div className="col-lg-2 col-md-4 col-sm-1"></div>
    <div className="col-lg-7 col-md-10 col-sm-10">
    <input className="form-control" type="text" placeholder="Search for area, street name, landmark..." />
      
    <span className="map-location"><MyVerticallyCenteredModal/></span>
    </div>
        <div className="col-lg-3 col-md-5 col-sm-7">
            <a href={`/restaurant/${restId}/food`}  className="btn btn-success" >SHOW MENU ></a>
        </div>
    </div>

    <div className="rating-and-payment row">
    <div className="col-lg-4 col-md-8 col-sm-8" style={{padding: 0}}>
    <span className="rating" >
    <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
    </span>
    
          ({rest.rate} Rating)
       </div>
       <div className="col-lg-4 col-md-8 col-sm-8">
           Reviews 
               <span className="reviews"> <IoIosChatbubbles/></span>
          
       </div>
       <div className="col-lg-4 col-md-8 col-sm-8">
       <span className="visa"> <FaCcVisa/></span>
       <span className="master-card">  <FaCcMastercard /></span>
       <span className="cash"><IoIosCash/></span>

          
           

       </div>

</div>


    </div>

    <div className="more-desc">
        <h3>{rest.name} delivers to you</h3>
        <div className="social-icons">
        <span className="facebook"> <AiFillFacebook/></span>
        <span className="twitter"> <AiFillTwitterSquare/></span>

        </div>
    
        <p>
        Koshry El Sultan is a restaurant located in Egypt, serving a selection of Koshary that delivers across Dokki - El Sudan Street and Moaaskar Al Aamn.

Their best selling dishes are Large Koshary Platter, Medium Koshary Platter and Small Koshary Platter, although they have a variety of dishes and meals to choose from, like Koshary, Koshary and Koshary.

They have been reviewed 0 times by talabat users, with a rating of 0.
        </p>

<div className="restaurant-reviews">
    <div className="title">
        <h4>Koshry El Sultan Reviews (0)</h4>
    </div>
    <div className="review row">
    <div className="item col-lg-3 col-md-6 col-sm-8"> 
      <span className="smile-face"><FaRegSmile/> Good</span>  Order Packaging
    </div>
    <div className="item col-lg-3 col-md-6 col-sm-8">
    <span className="smile-face"><FaRegSmile/> Good</span>
    Value for money</div>
    <div className="item col-lg-3 col-md-6 col-sm-8">
    <span className="smile-face"><FaRegSmile/> Good</span>
    Delivery time</div>
    <div className="item col-lg-3 col-md-6 col-sm-8">
    <span className="smile-face"><FaRegSmile/> Good</span>
    Quality of food</div>

    </div>
    <div className="customers-review">

    <div className="single-review">
    <div className="row">
    <div className="col-lg-2 col-md-4 col-sm-5  review-grade">
        <FaRegSmile/> Good
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 reviewer-name">Mustafa</div>
        <div className="col-lg-6 col-md-2 col-sm-1">

        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 review-date">
            <span>17 April 2020</span>
        </div>
    </div>
    <div className="row">
    <div className="review-content">
            <span>
            Food quality was good compared to the price, The order’s packaging was average
            </span>
        </div>
    </div>
 
    </div>

    <div className="single-review">
    <div className="row">
    <div className="col-lg-2 col-md-4 col-sm-5  review-grade">
        <FaRegSmile/> Good
        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 reviewer-name">Mustafa</div>
        <div className="col-lg-6 col-md-2 col-sm-1">

        </div>
        <div className="col-lg-2 col-md-4 col-sm-5 review-date">
            <span>17 April 2020</span>
        </div>
    </div>
    <div className="row">
    <div className="review-content">
            <span>أخر مرة اجيب منه
            </span>
        </div>
    </div>
 
    </div>


    </div>

</div>

    </div>
</div>


</div>
);
}

export default RestaurantDetails;