import React from 'react';
import {FaCcVisa, FaCcMastercard, FaRegSmile} from 'react-icons/fa';

function Review(){
    return(
        <div className="review container" > 
        
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
    );
}

export default Review;