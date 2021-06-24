import React from "react";
import Checkout from "../carts/checkout"
import { BiPlus } from "react-icons/bi";
import {BiMinus } from "react-icons/bi";
import {BiMinusCircle}  from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Cart extends React.Component {
	constructor(){
		super();
		this.state={
			products:[{
			store:"Cook Door",		
			subtotal:200,
			service:4,}],
			count:1,
			// cart_items:[],//7isgl fiha 
		
		}

	}
	increase=()=>{
		 
		this.setState({
			count:this.state.count+1,
			products:this.state.products
		})
		// localStorage["cartItems"]=JSON.stringify(this.state.products);
	
	}
	decrease=()=>{
		this.setState({
			count:this.state.count-1,
			products:this.state.products
			
		})
		// localStorage["cartItems"]=JSON.stringify(this.state.products);
	}
	addToSummary=()=>{
	// e.preventDefault()
	 localStorage["cartItems"]=JSON.stringify(this.state.products);
	  localStorage["count"]=JSON.stringify(this.state.count);
	}
	

  render() {
    return (
        <Router>
            <div>
			 
    	        <span  className="m-2 h5" style={{color:'#FF5900'}}>Your Cart</span>
				<div className="card" style={{width: "22rem"}}>
					<div className="card-body">
					{ this.state.count> 0? this.state.products.map((prod) => {
                        return (<div>
						<h6 className="card-subtitle m-2 text-muted">{prod.store}</h6>
						<div  className=" card-body bg-light border" >
							<div  className="input-group"  style={{width: "30rem"}}>
								<span  className="input-group-btn">
									<button type="button"   onClick={this.decrease}className="btn btn-sm border"  data-type="minus" data-field="quant[1]">
									    <span style={{color:'#FF5900'}}><BiMinus/>
									    </span>
									</button>
								</span>
								<p></p>
								<input type="text" name="quant[1]" className="input-number" value={this.state.count} min="0" max="10" style={{width:"20px"}}/>
								<span  className="input-group-btn">
									<button type="button"  onClick={this.increase}className="btn btn-sm border" data-type="plus" data-field="quant[1]">
								    <span style={{color:'#FF5900'}}><BiPlus/>
									</span>
									</button>
								</span>
								<div style={{marginLeft:"20px"}} >offers
								</div>
								<div  className="text-muted"style={{marginLeft:"20px"}} >{prod.subtotal*this.state.count}
								</div>
								<div className="hovers" style={{marginLeft:"70px"}} onClick={() => {if(window.confirm('Delete the item?')){this.state.count=0;}}}><BiMinusCircle/>
								</div>
							</div>
						</div>
						<div className=" row" style={{fontSize:"12px"}}> 
							<label className="col-8 text-muted" >Subtotal</label>
							<div className="col-4">
								<div  className="text-muted"style={{marginLeft:"20px"}} >EGP {prod.subtotal*this.state.count}
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
								<div style={{marginLeft:"20px"}} >EGP {prod.service+prod.subtotal*this.state.count}
								</div>
							</div>
							
							<Link to="/checkout" type="btn"  className="btn btn-success " onClick={this.addToSummary}>PROCEED TO CHECKOUT</Link>
						</div>
						</div>
						);
						}):<div></div>}					
			        </div>
				</div>
            </div>
			<Switch>
                
                 <Route path="/checkout" exact Component={Checkout}>
				</Route>
            </Switch>   
			
		</Router>
    );
  }
}
export default Cart;

							