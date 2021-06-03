import React from 'react'
import Savedaddr from './Savedaddr'
import Myorders from './Myorders';
import Savedcards from "./Savedcards";
import Talabatpay from "./Talabatpay";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
 

class Myaccount extends React.Component {
	 constructor(props) {
    super(props);
	this.state={color_black:true}
	this.changeColor = this.changeColor.bind(this);
    
  }
  

   changeColor() {
    //    const newColor=this.state.color=="#FF5900" ? "white":"#FF5900" ;
	   this.setState({color_black: !this.state.color_black})
	  
   
  }


    render() {
		  let bgColor = this.state.color_black ? "white" : "#FF5900"
        return (
		<Router>
			<div className="container" style={{width:"1000px"}}>
				<div className="card mb-3  border-2 " style={{maxWidth:" 540px;"}}>
					<div className=" border-bottom "><h3 className="card-title p-4">My Account</h3>
					</div>
					<div className="row g-0">
						<div className="col-md-3  " >
							<div className="card border-bottom-0" >
								<ul className="list-group list-group-flush" >
									<li className="list-group-item "><Link ><p style={{color:"#FF5900"}}>Account Info </p>
									</Link>
									</li>
									<li className="list-group-item"><a  href="/my-account/savedaddr" ><p style={{color:"black"}}>Saved Addresses</p></a>
									</li>
									<li className="list-group-item"><a href="/my-account/Orders" ><p style={{color:"black"}}>My Orders </p>
										</a>
									</li>
									<li className="list-group-item"><Link to="/my-account/cards"><p style={{color:"black"}}>Saved Cards</p>
										</Link>
									</li>
									<li className="list-group-item"><Link to="/my-account/tlbcredit"><p style={{color:"black"}}>talabat Pay </p>
										</Link>
									</li>
									
								</ul>
							</div>
						</div>
						<div className="col-md-9">
							<div className="card-body ">
								<form>
								    <div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">Email</label>
										<div  className="col-sm-5">
										 <input type="text"  className="form-control" placeholder="email@gmail.com"/>
										 </div>
										 <div  className="col-sm-5">
										 <a type="button" className="btn" style={{color:"green",fontSize:"12px"}}   data-toggle="modal" data-target="#exampleModal1">
								         CHANGE EMAIL 
								          </a>
										   <a type="button" className="btn" style={{color:"green",fontSize:"12px"}}   data-toggle="modal" data-target="#exampleModal2">
								         CHANGE PASSWORD
								          </a>
								              </div>
									</div>
									<div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">First Name</label>
										<div  className="col-sm-5">
										  <input type="text"  className="form-control " placeholder="First name"/>
										</div>
									</div>
									<div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">Last Name</label>
										<div  className="col-sm-5">
										  <input type="text"  className="form-control " placeholder="last name"/>

										</div>
									</div>
									<div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">Gender</label>
										<div  className="col-sm-5">
										    <div  className=" form-inline btn-group" role="group">
											  <button  className="form-control text-muted btn border"  style={{backgroundColor: bgColor}} onClick={this.changeColor}>Male</button>
											  <button  className="form-control text-muted btn border"  style={{backgroundColor: bgColor}} onClick={this.changeColor}>Female</button>
											  
											</div>
											
                                          
                                      

										</div>
									</div>
									<div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">Date of birth </label>
										<div  className="col-sm-5">
											<input type="date"   className="form-control" />
											</div>
											</div>
									<div  className="form-group row p-2">
								        
										<div  className="col-sm-5">
											 <input  className="form-check-input " type="checkbox" value="" id="invalidCheck" /> <label  className="form-check-label text-muted" for="invalidCheck"> Subscribe to our Newsletter</label>
										</div>
									</div>
									<div  className="form-group row p-2">
								        
										<div  className="col-sm-5">
											 <input  className="form-check-input" type="checkbox" value="" id="invalidCheck" /> <label  className="form-check-label text-muted" for="invalidCheck"> Subscribe to our SMS</label>
										
										</div>
										<div className="col-md-5">
										<button type="submit" className="btn btn-success">Update</button></div>
									</div>
									
						        </form>
					
							</div>
						</div>
				    </div>
				</div>
			
			<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header bg-light">
							<h5 className="modal-title" id="exampleModalLabel1" style={{color:"#FF5900"}}>Change Email </h5>
							<button type="button" className=" border-0 close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;
								</span>
							</button>
						</div>
					    <div className="modal-body">
								<div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label"for="exampleInputPassword1" style={{fontSize:"12px"}}>Current Password</label>
									<div  className="col-sm-5">
									<input type="password"  className="form-control" id="exampleInputPassword1"placeholder="current password"/>
								</div>
								</div>
								<div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label"for="exampleInputEmail1"style={{fontSize:"12px"}}>New Email </label>
									<div  className="col-sm-6">
									<input type="email"  className="form-control" id="exampleInputEmail1"  placeholder="New Email"/>
									</div>
								  </div>
								  <div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label"for="exampleInputEmail1"style={{fontSize:"12px"}}>Retype Email</label>
									<div  className="col-sm-6">
									<input type="email"  className="form-control" id="exampleInputEmail1" placeholder="Retype Email"/>
									</div>
								  </div>
						</div>
					    <div className="modal-footer">
							<button type="button" className="btn btn-default border-success text-success" data-dismiss="modal">Close
							</button>
							<button type="button" className="btn btn-success">Submit
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header bg-light">
							<h5 className="modal-title" id="exampleModalLabel2" style={{color:"#FF5900"}}>Change Password</h5>
							<button type="button" className=" border-0 close"  data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;
								</span>
							</button>
						</div>
					    <div className="modal-body">
						
								<div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label" for="exampleInputPassword1"style={{fontSize:"12px"}}>Current Password</label>
									<div  className="col-sm-6">
									<input type="password"  className="form-control" id="exampleInputPassword1"placeholder="current password"/>
								</div>
								</div>
								<div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label" for="exampleInputPassword1"style={{fontSize:"12px"}}>New Password</label>
									<div  className="col-sm-6">
									<input type="password"  className="form-control" id="exampleInputPassword1"placeholder="new password"/>
								</div>
								</div>
								  <div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label" for="exampleInputPassword1"style={{fontSize:"12px"}}>Re-type New password</label>
									<div  className="col-sm-6">
									<input type="password"  className="form-control" id="exampleInputPassword1"placeholder="Re-type New password"/>
								</div>
								</div>
						
					    </div>
					    <div className="modal-footer">
							<button type="button" className="btn btn-default border-success text-success" data-dismiss="modal">Close
							</button>
							<button type="button" className="btn btn-success">Submit
							</button>
						</div>
					</div>
				</div>
			</div>
			</div>
			<Switch>
                <Route path="/my-account/savedaddr" exact component={Savedaddr }>
             	</Route>
			 	<Route path="/my-account/orders" exact component={Myorders}></Route>
				  <Route path="/my-account/cards" exact component={Savedcards}>
				</Route>
				 <Route path="/my-account/tlbcredit" exact component={Talabatpay}>
				</Route>
            </Switch>    
        </Router>


        );
    }
}
export default Myaccount;