import React from 'react';
import RestaurantImg from '../../images/vertical-restaurants.png'
function Card(props){
    return(
        <a href="">
             <div className="card">
        <div className="row">
        <div style={{backgroundColor: props.bgColor}} className="img col-lg-5 col-md-5 col-sm-5">
        <img src={props.img} alt="" />
        </div>
        <div className="heading col-lg-6 col-md-6 col-sm-6">
            <h2>{props.title}</h2>
            <p>
            {props.content}

            </p>
            <a className={props.btnClass} href="">{props.btnText}</a>
        </div>


        </div>
       
          
        </div>
        </a>
       
    );
}
export default Card;
