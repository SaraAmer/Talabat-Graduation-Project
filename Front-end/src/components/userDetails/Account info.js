import React from 'react';
import './Account.css';
import Savedaddr from './Savedaddr';
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
	 this.state={
		  _id: this.props.match.params._id,
		 firstName:"",
		 lastName:"",
		 email:"",
		 date0fBirtg:"",
		 gender:""}
    
  }
  handleChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
 }

   changeColor=(e)=> {
 
    this.setState({gender:e.target.value});
	// console.log(e.target.value);
    //  console.log("gender of male:"+this.state.gender);
  }
  
 
  clickSubmit = async(e) => {
        e.preventDefault();
		console.log(e);
		let res = await fetch("http://127.0.0.1:8000/user/profile/60d214425f913b3f0ded19f6", {
      	method: "PUT",
     	 headers: {
        "Content-Type": "application/json",
      	},
		   body: JSON.stringify({
        //key and value from form
       
        email: this.state.email,
		firstName:this.state.firstName,
		lastName:this.state.lastName,
		
		date0fBirtg:this.state.date0fBirth,
		gender:this.state.gender
      }),
    });
    
  };


    render() {


        return (
		<Router>
			<div className="container" id="big"  style={{width:"1000px"}}>
				<div className="card mb-3  border-2 " style={{maxWidth:" 540px;"}}>
					<div className=" border-bottom "><h3 className="card-title p-4">My Account</h3>
					</div>
					{/* <div><h1>Gender:{this.state.gender}</h1> </div> */}
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
								<form  >
								    <div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">Email</label>
										<div  className="col-sm-5">
										 <input type="text"  className="form-control" placeholder="email@gmail.com" disabled name="email" value={this.state.email}  onChange={this.handleChange}/>
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
										  <input type="text"  className="form-control " placeholder="First name" name="firstName" value={this.state.firstName}  onChange={this.handleChange}/>
										</div>
									</div>
									<div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">Last Name</label>
										<div  className="col-sm-5">
										  <input type="text"  className="form-control " placeholder="last name" name="lastName" value={this.state.lastName}  onChange={this.handleChange}/>

										</div>
									</div>
									<div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">Gender</label>
										<div  className="col-sm-5">
										    <div  className=" form-inline btn-group" role="group">
												<div class="form-check disabled">
												<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="male" style=
												{{opacity: 0}} onChange={this.changeColor}/>	
												</div>
											    <label  for="exampleRadios3" type="btn" className=" btn border" id={this.state.gender=="male"?'active':'inactive'}>Male
											    </label>
											 
											
											   	<label  for="exampleRadios4" type="btn"  className=" btn border" id={this.state.gender=="female"?'active':'inactive'} >Female
											  	</label>
												<div class="form-check disabled">
											  	<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="female" style=
												{{opacity: 0}} onChange={this.changeColor}/>
												
											</div>
										</div>
										</div>
									</div>
									<div  className="form-group row p-2">
										<label   className="col-sm-2 col-form-label text-muted">Date of birth </label>
										<div  className="col-sm-5">
											<input type="date"   className="form-control" name="dateOfBirth" value={this.state.dateOfBirth}   onChange={this.handleChange}/>
											</div>
											</div>
									<div  className="form-group row p-2">
								        
										<div  className="col-sm-5">
											 <input  className="form-check-input " type="checkbox" value="1" id="invalidCheck1" /> <label  className="form-check-label text-muted" for="invalidCheck1"> Subscribe to our Newsletter</label>
										</div>
									</div>
									<div  className="form-group row p-2">
								        
										<div  className="col-sm-5">
											 <input  className="form-check-input" type="checkbox" value="2" id="invalidCheck2" /> <label  className="form-check-label text-muted" for="invalidCheck2"> Subscribe to our SMS</label>
										
										</div>
										<div className="col-md-5">
										<button type="button" onClick={this.clickSubmit} className="btn btn-success" data-toggle="modal" data-target="#staticBackdrop" >Update</button></div>
									</div>
										{/* hena el button kan submit */}
						        </form>
					
							</div>
						</div>
				    </div>
				</div>
				<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
						
						<div class="modal-body">
							Your information was updated successfully
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-success" data-dismiss="modal">OK</button>
						
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
									<label className="col-sm-3 col-form-label"for="exampleInputPassword" style={{fontSize:"12px"}}>Current Password</label>
									<div  className="col-sm-5">
									<input type="password"  className="form-control" id="exampleInputPassword"placeholder="current password"/>
								</div>
								</div>
								<div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label"for="exampleInputEmail2"style={{fontSize:"12px"}}>New Email </label>
									<div  className="col-sm-6">
									<input type="email"  className="form-control" id="exampleInputEmail2"  placeholder="New Email"/>
									</div>
								  </div>
								  <div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label"for="exampleInputEmail3"style={{fontSize:"12px"}}>Retype Email</label>
									<div  className="col-sm-6">
									<input type="email"  className="form-control" id="exampleInputEmail3" placeholder="Retype Email"/>
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
									<label className="col-sm-3 col-form-label" for="exampleInputPassword2"style={{fontSize:"12px"}}>New Password</label>
									<div  className="col-sm-6">
									<input type="password"  className="form-control" id="exampleInputPassword2"placeholder="new password"/>
								</div>
								</div>
								  <div  className="form-group row p-2">
									<label className="col-sm-3 col-form-label" for="exampleInputPassword3"style={{fontSize:"12px"}}>Re-type New password</label>
									<div  className="col-sm-6">
									<input type="password"  className="form-control" id="exampleInputPassword3"placeholder="Re-type New password"/>
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