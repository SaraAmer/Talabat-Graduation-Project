import React from 'react'
import RestaurantList from './Restaurants';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import {GoLocation} from 'react-icons/go' ;
import {MdMyLocation} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
function RestaurantDetails(props) {


return(
    <div className="container">
<div className="restaurant-details">
<div className="container">
<img className="inner-image" src="https://format-com-cld-res.cloudinary.com/image/private/s--3lZKmA3v--/c_crop,h_579,w_1500,x_0,y_421/c_fill,g_center,h_440,w_1140/fl_keep_iptc.progressive,q_95/v1/3166de8c85cdf32962078bab48f68692/ramen-1.jpg" alt="" />
<img src="https://images.deliveryhero.io/image/otlob/restaurants/logo_636994802561487777.jpg?width=115&height=104" alt="" srcset="" />
<h1 className="name">Delice</h1>
<p>Sandwiches, Pasta, Street Food</p>
<h2>Select your area to see restaurant menu</h2>

<div className="map">
<input className="form-control" type="text" placeholder="Search for area, street name, landmark..." />
<span className="location"><GoLocation /></span>

<MyVerticallyCenteredModal/>
<button className="btn btn-success menu">SHOW MENU <span> > </span></button>

<div className="rating-and-payment justify-content-center">
   <div className="row">
       <div className="col-4" style={{padding: 0}}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          (0 Rating)
       </div>
       <div className="col-4">
           First
       </div>
       <div className="col-4">
           First
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