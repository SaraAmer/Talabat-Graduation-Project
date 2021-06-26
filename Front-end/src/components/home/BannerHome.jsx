import React, {useState} from 'react';
import leftBg from '../../images/marshmallow-banner-img-1.png';
import rightBg from '../../images/marshamallow-banner-img-2.png';
import {GoLocation} from 'react-icons/go' ;
import MyVerticallyCenteredModal from '../restaurants-client/MyVerticallyCenteredModal';
function BannerHome(){

    const [add, setAdd] = useState("");
    const changeHandler = e => {
    setAdd(e.target.value);
}




    return(
        <div className="banner-home">
     <div className="row">
            <div className="col-lg-2 col-md-10 col-sm-10">
<img className="leftBg" src={leftBg} alt="" />
            </div>
            <div className="content col-lg-7 col-md-10 col-sm-10">
                <h1>Order food online in Egypt</h1>

<div className="row">
    <div className="col-lg-8 col-md-10 col-sm-10">
    <div className="input-group mb-3 ">
  <span className="input-group-text"><GoLocation /></span>
  <input  onChange={changeHandler}  placeholder="Search for area, street name, landmark..." type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span className="input-group-text"><MyVerticallyCenteredModal/></span>

</div>
    </div>
  
    <div className="col-lg-3 col-md-3 col-sm-3">
    <a href={`/filter/${add}`} className="btn">Let's go</a>

    </div>
</div>
   



            </div>
            <div className="col-lg-3 col-md-10 col-sm-10">
            <img  className="rightBg" src={rightBg} alt="" />
            </div>
        </div>
        </div>
       
    );
}
export default BannerHome;