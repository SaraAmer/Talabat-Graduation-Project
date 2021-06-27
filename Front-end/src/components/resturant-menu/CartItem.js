
import React ,{ useState } from 'react';
import { BiPlus } from "react-icons/bi";
import {BiMinus } from "react-icons/bi";
import {BiMinusCircle}  from "react-icons/bi";
function CartItem(props){

  const increase=()=>{
		 
		this.setState({
			count:this.state.count+1,
			products:this.state.products
		})
		// localStorage["cartItems"]=JSON.stringify(this.state.products);
	
	}
const decrease=()=>{
		this.setState({
			count:this.state.count-1,
			products:this.state.products
			
		})
		// localStorage["cartItems"]=JSON.stringify(this.state.products);
	}


    return(
        <div  className=" card-body bg-light border" >
        <div  className="input-group"  style={{width: "30rem"}}>
            <span  className="input-group-btn">
                <button type="button"   onClick={decrease}className="btn btn-sm border"  data-type="minus" data-field="quant[1]">
                    <span style={{color:'#FF5900'}}><BiMinus/>
                    </span>
                </button>
            </span>
            <p></p>
            <input type="text" name="quant[1]" className="input-number"  min="0" max="10" style={{width:"20px"}}/>
            <span  className="input-group-btn">
                <button type="button"  onClick={increase}className="btn btn-sm border" data-type="plus" data-field="quant[1]">
                <span style={{color:'#FF5900'}}><BiPlus/>
                </span>
                </button>
            </span>
            <div style={{marginLeft:"20px"}} >offers
            </div>
            <div  className="text-muted"style={{marginLeft:"20px"}} >
            </div>
            <div className="hovers" style={{marginLeft:"20px"}} ><BiMinusCircle/>
            </div>
        </div>
    </div>
    );
}

export default CartItem;