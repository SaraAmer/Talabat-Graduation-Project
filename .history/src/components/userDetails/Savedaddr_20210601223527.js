import React from 'react'
import Accountinfo from './Account info'
 import GoogleMap from 'google-map-react';
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
	this._handleClick = this._handleClick.bind(this);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }
  

   _handleClick=()=> {
    
	   alert("female")
   
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
									<li className="list-group-item"><Link ><p style={{color:"black"}}>My Orders </p>
										</Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"black"}}>Saved Cards</p>
										</Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"black"}}>talabat Pay </p>
										</Link>
									</li>
									
								</ul>
							</div>
						</div>
						
						<div className="col-md-9">
						    <div className="card-body ">
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
									</div>
									<div className="col-md-4">
									<p >Building No. 333e</p>
									<p className="text-muted">Talaat Harb, 333, 222, 3</p>
									<p className="text-muted">+201056789</p>
									</div>
								
									<div className="col-md-4 d-flex justify-content-end">
											<a type="button" className="btn" style={{color:"green"}}   data-toggle="modal" data-target="#exampleModal4">
											   delete
											 </a>
										     
											<a type="button" className="btn" style={{color:"green"}}   data-toggle="modal" data-target="#exampleModal4">
											   EDIT
											 </a>
									</div>	
									
									<div className=" border-bottom "></div>	
					</div>
								
								{/* <div className="text-center">
									<img  style={{height:"100px"}} src="https://www.vskills.in/certification/tutorial/wp-content/uploads/2013/01/geolocation.jpg"></img>
									<p className="text-muted">there are no saved addresses to display</p>
									<button type="button" className="btn btn-success p-2"  data-toggle="modal" data-target="#exampleModal3">
										Add Address
									</button> 
								</div> */}
						
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
							  <div >
									<GoogleMap
									  style={mapStyles}
									  bootstrapURLKeys={{ key: 'GOOGLE_MAPS_API_KEY' }}
									  center={{ lat: 5.6219868, lng: -0.1733074 }}
									  zoom={14}
									>
									  <Marker
									  title={'Current Location'}
									  lat={5.6219868}
									  lng={-0.1733074}
									>
									  </Marker>
									</GoogleMap>
								 </div>
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
								
									<div  className="row">
										<div  className="form-group col-md-6">
											<label for="inputEmail4">Contact Details</label>
											<input type="phone"  className="form-control" placeholder="Mobile Number"/>
										</div>
										<div  className="form-group col-md-6">
											<label for="inputPassword4">Landing Number</label>
											<input type="text"  className="form-control" id="inputPassword4"placeholder="Landing Number(optional)"/>
										</div>
									</div>
									<div className="row">
									 <label for="inputAddress">Address Details</label>
										<div  className="form-group col-md-6 mb-1">
											
											 <CountryDropdown
											     className="form-control"
												value={country}
												onChange={(val) => this.selectCountry(val)} />
												</div>
										<div  className="form-group col-md-6 mb-1">
											 
											 <RegionDropdown
											 className="form-control"
													country={country}
													value={region}
													onChange={(val) => this.selectRegion(val)} />
										</div>
									</div>
									<div className="row">
										<div  className="form-group col-md-6 mb-1">
											
										    <div  className="col-sm-5">
												<div  className="btn-group">
													<button  className="form-control"><HiOutlineOfficeBuilding/>Apartment</button>
													<button  className="form-control" ><i className="bi bi-house-door"></i>House</button>
													<button  className="form-control" ><ImOffice/>Office</button>
													  
											    </div>
											</div>
									    </div>
										<div  className="form-group col-md-6 mb-1">
											
											<input type="text" style={{height:"60px"}} className="form-control" id="inputAddress" placeholder="Addess Title(optional)"/>
										</div>
									</div>	
									<div className="row">
										<div  className="form-group  col-md-6 mb-1">
						
											<input type="text"  className="form-control" id="inputAddress2" placeholder="Street"/>
										</div>
										 
										<div  className="form-group col-md-6 mb-1">
						
											<input type="text"  className="form-control" id="inputAddress2" placeholder="Building"/>
										</div>
									</div>
									<div className="row">
										<div  className="form-group col-md-6 mb-1">
						
											<input type="text"  className="form-control" id="inputAddress2" placeholder="Floor"/>
										</div>
										<div  className="form-group col-md-6 mb-1">
						
											<input type="text"  className="form-control" id="inputAddress2" placeholder="Apartment No"/>
										</div>
									</div>	
									<div  className="form-group  col-md-6 mb-1">
					
										<input type="text"  className="form-control" id="inputAddress2" placeholder="Assitional Directions(optional)"/>
									</div>
							</div>
							<div className="modal-footer">
								<div className="d-flex justify-content-start">
									<button type="button" data-toggle="modal"  className="btn btn-default border-success text-success"data-target="#exampleModal3" data-dismiss="modal" ><i  className="bi bi-geo-alt"></i>View Map
									</button>
								</div>
								<div className="d-flex justify-content-end">
									<button type="button" data-toggle="modal" className="btn btn-primary " data-dismiss="modal">Save Address
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
            </Switch>    
        </Router>


        );
    }
}
export default Savedaddr ;