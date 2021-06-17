import React from 'react'
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
class Address extends React.Component {
    render() {
		 const { country, region } = this.state;
        return (
	
	
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
	    
			
			


        );
    }
}
export default Address;