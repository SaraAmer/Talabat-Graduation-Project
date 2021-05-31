import React from 'react'
import Accountinfo from './Account info'
 import GoogleMap from 'google-map-react';
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
	 constructor() {
    super();
	this._handleClick = this._handleClick.bind(this);
    
  }
  

   _handleClick=()=> {
    
	   alert("female")
   
  }


    render() {
        return (
		<Router>
			<div className="container">
				<div className="card mb-3  border-2 " style={{maxWidth:" 540px;"}}>
					<div className=" border-bottom "><h3 className="card-title p-4">My Account</h3>
					</div>
					<div className="row g-0">
						<div className="col-md-3">
							<div className="card border-0 " style={{width: "18rem",borderBottom:"none",borderTop:"none"}}>
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
						<div className="col-md-9 border">
							<div className="card-body ">
								<button type="button" className="btn btn-success"  style={{marginLeft:"400px",marginTop:"100px"}} data-toggle="modal" data-target="#exampleModal3">
								Add Address
								</button>
					
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
							
							<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal4">Confirm 
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
					    <div className="modal-body">
							...
					    </div>
					    <div className="modal-footer">
							
							<button type="button" className="btn btn-primary" >Save Address
							</button>
						</div>
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