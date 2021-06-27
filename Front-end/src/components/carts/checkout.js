import React from "react";
import "./checkout.css";
import Dates from "./Date";
import Map from "../userDetails/Map"
import Address from "../userDetails/Address"
import CreditCards from "./creditcard";
import { RiVisaLine } from "react-icons/ri";
import { GrAmex } from "react-icons/gr";
import { IoCashOutline } from "react-icons/io5";
import M from "materialize-css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Checkout extends React.Component {

	state={
		content:"",
		address_details:[],
		cart_items:[],
		count:""
		}
	// AddtoDeliveryaddr=(item)=>{
	// 	this.state.deliveryAddress.push(item);//push llitem fy el array 
    //     this.setState({
	// 		deliveryAddress:this.state.deliveryAddress
			
	// 	});
	// 	this.saveToLocalStorage();
	// }
	onClickNow=()=>{
		this.setState({
		content:this.renderNow()});
	}
	onClickLater=()=>{
		this.setState({
		content:this.renderLater()});
	}
	componentDidMount= async()=>{
		if(localStorage["cartItems"]){
			let cartItems=JSON.parse(localStorage["cartItems"]);//8irt el shakl 
			this.setState({cart_items:cartItems})//el array ely ana 3mlah 7ishil el data bt3t el local storage 
			console.log(this.state.cart_items)
		}
		if(localStorage["count"]){
			let count=JSON.parse(localStorage["count"]);
			this.setState({count:count})
			console.log(this.state.count)
		}
		let res = await fetch(`http://127.0.0.1:8000/user/address/${localStorage["userId"]}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then(res => res.json())
                .then(result => {
                    console.log("Result");
                    console.log(result.Addresses);
                    this.setState({
                        address_details: result.Addresses
                    });
                });
		

	}
	clickDelete = async (value) => {
		

    let res = await fetch(
      `http://127.0.0.1:8000/user/address/${value}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
		body: JSON.stringify({
        //key and value from form
        
       
      }),
      }
	 
    );
	 let resJson = await res.json();
    console.log(resJson.error);
    console.log(resJson.message);

    if (typeof resJson.error === "undefined") {
      localStorage.setItem("jwt", resJson.token);
      M.toast({ html: resJson.message });
    } else {
      M.toast({ html: resJson.error });
    }
  };
	
	renderNow(){
		return (
     		 <div >
            	<p className="text-muted"> Please check the date and time below</p>
				 <div className="col-2">
				<button id="btnPreorder" type="button" class="btn form-control dropdown-toggle" ng-disabled="deliveryTimeDisabled" uib-dropdown-toggle="" aria-haspopup="true" aria-expanded="false" disabled="disabled">
                                                 
                 <span  className="ng-scope" >Now</span>
                    &nbsp;<span class="caret m-l"></span>
             	</button>
				 </div>
    		</div>
    ) 
		
	}
	renderLater(){
		return (
		<div>
		<p className="text-muted"> Please check the date and time below</p>
          <Dates/>    
          </div>
		)}

 render() {
    return (
        <Router>
			<div>
				<div className="container " style={{width:"1000px"}} >
					<div className="card mb-3 border-2 " style={{maxWidth:" 540px;"}}>
						<div  className="card m-3">
							<div  className="card-header">
								<div className=" row" > 
										<label className="col-lg-10 " >Order Summary</label>
										<div className="col-lg-2" >
											<div className="text-success" style={{fontSize:"12px"}} >MODIFIY ORDER
											</div>
										</div>
								</div>
								
							</div>
							{this.state.cart_items.length >0 ?this.state.cart_items.map((prod)=>{
								return(
							<div  className="card-body">
								<h5  className="card-title"><div className=" row" > 
										<label className="col-lg-11 " >{prod.store}</label>
										<div className="col-lg-1" >
											<div className="text-danger" style={{fontSize:"12px"}} >OPEN
											</div>
										</div>
								</div></h5>
								<table className="table table-borderless">
								  <thead className="thead-light bg-light">
									<tr className="d-fex">
									  <th className="col-4">item(s)</th>
									  <th className="col-3">Special Request</th>
									  <th className="col-1">Qty</th>
									  <th className="col-2">Price</th>
									<th className="col-2">Total</th>
									</tr>
								  </thead>
								  <tbody>
									<tr>
									  <td>Stuffed Chicken Cheddar Original, Stuffed Chicken Cheddar Original, Grilled Chicken Parmesan Sandwich, Grilled Chicken Parmesan Sandwich, Friskes Fries</td>
									  <td></td>
									  <td>{this.state.count}</td>
									  <td>EGP<span> {prod.subtotal}</span></td>
									  <td>EGP<span> {this.state.count*prod.subtotal}</span></td>
									</tr>
								  </tbody>
								</table>
							
							</div>
							);}):<div></div>
							}
						</div>
					</div>
					{this.state.address_details.length > 0
											 ?
											 (<div>  {this.state.address_details.map((s)=>{
												return( 
					<div className="card mb-3 border-2 " style={{maxWidth:" 540px;"}}>
						<div  className="card m-3">
							<div  className="card-header">
								<div className=" row" > 
										<label className="col-lg-10 " >Delivery Address</label>
										<div className="col-lg-2" >
											
											<a type="button" className="btn" style={{color:"green"}}  value={s._id} onClick={()=>this.clickDelete(s._id)}  data-toggle="modal" data-target="#exampleModal4">
											   Delete
											</a>
											<a type="button" className="btn" style={{color:"green"}}  data-toggle="modal" data-target="#exampleModal3">
											   ADD
											</a>
										</div>
								</div>
								
							</div>
							<div  className="card-body">
								<div className="row">
									<div className="col-md-4">
											<p className="text-muted">Address Name</p>
											<p className="text-muted">Address </p>
											<p className="text-muted">Mobile Number</p>
											<p className="text-muted">Landing Number</p>
									</div>
								
										
												<div className="col-md-4">
												
														<p >Building No. {s.building}</p>
														<p className="text-muted">{s.street},{s.building}, {s.floor}, {s.apartmentN}</p>
														<p className="text-muted"> {s.mobile}</p>
														<p className="text-muted">{s.landing}</p>
												</div>
												
										

					                
								</div>

							</div>
						</div>
					</div>
					);
												})}</div>)										:(<div></div>)}
					
					<div className="card mb-3 border-2 " style={{maxWidth:" 540px;"}}>
						<div  className="card m-3">
							<div  className="card-header">
							<label className="col-lg-10 " >Delivery Time</label>	
							</div>
							<div  className="card-body row">
							   <div className="col-6">
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Now" onClick={this.onClickNow} />
									
										<label className="form-check-label" for="inlineRadio1">Now</label>
									</div>
									<div class="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Pre-order for later" onClick={this.onClickLater}/>
										
										<label className="form-check-label" for="inlineRadio2" >Pre-order for later</label>
									</div>
									<div>{this.state.content}</div>
								</div>
								<div className="panel panel-default col-6">
									<div className="panel-heading">
										<h6 className="panel-title" data-toggle="collapse" data-target="#collapseOne">Add special requests here</h6>
									</div>
										
									<div id="collapseOne" className="panel-collapse collapse">
										<div className="panel-body">
											
												
												<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"placeholder="eg.if you have a food allergy or a request for the driver"></textarea>
											    <p className="text-muted">Do not add chargeable items, as this may cause your order to be cancelled</p>
										</div>
									</div>
								</div>
							
							</div>
						</div>
					</div>
					{this.state.cart_items.length >0 ?this.state.cart_items.map((prod)=>{
								return(
					<div className="card mb-3 border-2 " style={{maxWidth:" 540px;"}}>
						<div  className="card m-3">
							<div  className="card-header">
								<div className=" row" > 
										<label className="col-11 " >Payment Summary</label>
										
								</div>
								
							</div>
							<div  className="card-body">
								<form>
									<div  className="row mb-2">
											<div  className=" form-group col-md-2 border-bottom m-2">
												<input  className="form-control border-0 " type="text" placeholder="Voucher code"/>
											</div>
											<div  className=" form-group col-md-2 m-2">	
												<button type="submit"  className=" btn btn-sm text-success border-success ">REDEEM</button>
											</div>
										
									</div>
								</form>
								<div className="  border-bottom"></div>
									<div  className="row">
								   		<div className="col-6"> 
										   <button className="btn border col-12">
										    	<div class="form-check">
										    	
													 <input class="form-check-input " type="radio"  data-toggle='collapse' data-target='#collapsediv1'  name="inlineRadioOptions4" id="inlineRadio3" value=" creditcard"/>
													<label class="form-check-label" for="inlineRadio3"><RiVisaLine className="me-1 text-primary border"  size={30} /> <GrAmex className="me-1 text-primary border"  size={30} />Debit/Credit Card</label>
												
												</div>
											</button>
											<div id='collapsediv1' className=' card container collapse div1'>
												<div>
													
													<CreditCards/>
													<div className=" col-md-6">
														<img  style={{width:"200px",height:"100px"}}src="data:image/jpeg;base64,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"/>	
														
													</div>
													<div class="form-check col-md-12">
														<input class="form-check-input" type="checkbox" id="gridCheck1" />
														<label class="form-check-label" style={{fontSize:"12px"}} for="gridCheck1">
															For faster and more secure checkout,save your card details
														</label>
                                              		</div>
												</div>
											</div>
											 <button className="btn border col-12 ">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="Cash "/>
													<label class="form-check-label" for="inlineRadio4"><IoCashOutline className="text-warning me-1" size={20}/>Cash</label>
												</div>
											</button>
																						
										</div>
									<div className="col-1"></div>
									<div className="col-5">
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
												<div style={{marginLeft:"20px"}} >EGP {prod.subtotal*this.state.count + prod.service}
												</div>
											</div>
											<Link to="/checkout" type="btn"  className="btn btn-success ">PROCEED TO CHECKOUT</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
						By ordering through Credit Card you agree to the <Link className="text-success"> TERMS AND CONDITIONS</Link></div>
					</div>
						);
									})
										: <div></div>}

				</div>	
				<div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel3">Add New Address</h5>
								<button type="button" className="close border-0" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;
									</span>
								</button>
							</div>
							<div className="modal-body "style={{width:"400px",height:"400px"}}>
								<Map/>
							</div>
							<div className="modal-footer">
								
								<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal4"  data-dismiss="modal">Confirm 
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel4">Add New Address</h5>
								<button type="button" className="close border-0" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;
									</span>
								</button>
							</div>
							<form>
								<div className="modal-body">
									<Address addToDeliveryaddr={this.addToDeliveryaddr}/>
								</div>
								<div className="modal-footer">
									<div className="d-flex justify-content-start">
										<button type="button" data-toggle="modal"  className="btn btn-default border-success text-success"data-target="#exampleModal3" data-dismiss="modal" ><i  className="bi bi-geo-alt"></i>View Map
										</button>
									</div>
									
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Switch>
                
                 <Route path="">
				</Route>
            </Switch>    
			
		</Router>
    );
  }
}
export default Checkout;
