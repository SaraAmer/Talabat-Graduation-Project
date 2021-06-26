import React from 'react'
import Accountinfo from './Account info'
import Myorders from './Myorders';
import Savedcards from "./Savedcards";
import Talabatpay from "./Talabatpay";
import GoogleMap from 'google-map-react';
import Map from "./Map"
import Address from "./Address"
import { ImOffice } from "react-icons/im";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
const mapStyles = {
      width: '100%',
      height: '100%'
    }
    
    const markerStyle = {
      height: '50px',
      width: '50px',
      marginTop: '-50px'
    }
    
    const imgStyle = {
      height: '100%'
    }
    
    
    const Marker = ({ title }) => (
      <div style={markerStyle}>
        <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
        <h3>{title}</h3>
      </div>
    );

		

class Savedaddr extends React.Component {
	
	
   constructor (props) {
    super(props);
	
	this.state={
     address_details:[],
	 _id: this.props.match.params._id,
	}
	}
  

 
 	 async  componentDidMount(){
		let res = await fetch(`http://127.0.0.1:8000/user/address/60d214425f913b3f0ded19f6`, {
      	method: "GET",
     	headers: {
        "Content-Type": "application/json",}
    })
	 .then(res => res.json())
      .then(result => {
        this.setState({
        mobile:result.mobile,
        landing:result.landing,
        addressTitle:result.addressTitle,
        street:result.street,
        building:result.building,
        floor:result.floor,
        apartmentN:result.apartmentN,
        assitionalDirect:result.assitionalDirect,
        country: result.country,
        region: result.region,
        type:result.type
        });
		 });	
   }


    render() {
		 const { country, region } = this.state;
        return (
		<Router>
			<div className="container " style={{width:"1000px"}} >
				<div className="card mb-3  border-2 " style={{maxWidth:" 540px;"}}>
					<div className=" border-bottom "><h3 className="card-title p-4">My Account</h3>
					</div>
					<div className="row g-0">
						<div className="col-md-3 ">
							<div className="card border-bottom-0 " >
								<ul className="list-group list-group-flush" >
									<li className="list-group-item"><Link to="/my-account/summary" ><p style={{color:"black"}}>Account Info </p>
									</Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"#FF5900"}}>Saved Addresses</p></Link>
									</li>
									<li className="list-group-item"><Link to="/my-account/orders"><p style={{color:"black"}}>My Orders </p>
										</Link>
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
							{ this.state.addressDetails >0 ?this.state.addressDetails.map((details) => {
                             return( <div>
								<div style={{float:"right"}}>
								    <a type="button" className="btn" style={{color:"green"}}   data-toggle="modal" data-target="#exampleModal3">
								       <FaPlusCircle/> ADD ADDRESS
									 </a>
								</div>
								<div className="row">
									<div className="col-md-4">
									<p className="text-muted">Address Name</p>
									<p className="text-muted">Address </p>
									<p className="text-muted">Mobile Number</p>
									<p className="text-muted">Landing Number</p>
									</div>
									<div className="col-md-4">
									<p >Building No. {details.building}</p>
									<p className="text-muted">{details.street},{details.building}, {details.floor}, {details.appNo}</p>
									<p className="text-muted">{details.mobile}</p>
									<p className="text-muted">{details.landingNo}</p>
									</div>

					                <div className="col-md-4" style={{float:"right"}}>
											<a type="button" className="btn" onClick={e => window.confirm("Are you sure you wish to clear the page?") }>
											   DELETE
											 </a>
										     
											<a type="button" className="btn" style={{color:"green"}}   data-toggle="modal" data-target="#exampleModal4">
											   EDIT
											 </a>
									</div>	
									
									<div className=" border-bottom ">
									</div>	
					    		</div>
								 	</div>);}):
							
								<div className="text-center">
									<img  style={{height:"100px"}} src="https://www.vskills.in/certification/tutorial/wp-content/uploads/2013/01/geolocation.jpg"></img>
									<p className="text-muted">there are no saved addresses to display</p>
									<button type="button" className="btn btn-success p-2"  data-toggle="modal" data-target="#exampleModal3">
										Add Address
									</button> 
								</div>
						       }
							</div>
						</div>
				    </div>
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
									<Address/>
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
                 <Route path="/my-account/summary" exact component={Accountinfo}>
			    </Route>
			 <Route path="/my-account/orders" exact component={Myorders}>
			</Route>
			 <Route path="/my-account/cards" exact component={Savedcards}>
				</Route>
				 <Route path="/my-account/tlbcredit" exact component={Talabatpay}>
				</Route>
            </Switch>    
        </Router>


        );
    }
}
export default Savedaddr ;