import React from 'react'
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

class Address extends React.Component {
     constructor (props) {
     super(props);
     this.state = { addressDetails:{
        mobile:'',
        landingNo:'',
        add_title:'',
        street:'',
        building:'',
        floor:'',
        appNo:'',
        additional:'',
        country: '',
        region: '',},
        gender:'' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }
  
  saveAddr=()=>{
 
     localStorage["addressdetails"]=JSON.stringify(this.state.addressDetails);
   
  }
  
  bordercolor=(e)=>{
  this.setState({gender:e.target.value});
  }
    render() {
   
		const { country, region } = this.state;
        return (
			<Route>
				<div>
      
					<form>
						<div  className="row">
   
							<div  className="form-group col-md-6">
								<label for="inputEmail4">Contact Details</label>
								<input type="phone"  className="form-control" placeholder="Mobile Number" value={this.state.mobile} onChange={(e)=>this.setState({mobile:e.target.value})}/>
							</div>
							<div  className="form-group col-md-6">
								<label for="inputPassword4">Landing Number</label>
								<input type="text"  className="form-control" id="Landing" placeholder="Landing Number(optional)" value={this.state.landingNo} onChange={(e)=>this.setState({landingNo:e.target.value})}/>
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
                            <div  className=" form-inline btn-group">
                            
                            
                              <label  for="exampleRadios1" type="btn"  className=" btn border" id={this.state.gender=="House"?'active':'inactive'} ><i className="bi bi-house-door"></i>House
                              </label>
                              
                              	<label  for="exampleRadios2" type="btn"  className=" btn border" id={this.state.gender=="Apartment"?'active':'inactive'} ><HiOutlineOfficeBuilding/>Apartment
                                </label>
                                <label  for="exampleRadios3" type="btn"   className=" btn border" id={this.state.gender=="Office"?'active':'inactive'} ><ImOffice/>Office
                                </label>
                                  <div class="form-check disabled">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="House" style=
                              {{opacity: 0}} onChange={this. bordercolor}/></div> 	
                                <div class="form-check disabled">
                                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Apartment" style=
                                {{opacity: 0}} onChange={this. bordercolor}/></div>
                              	
                                <div class="form-check disabled">
                                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Office" style=
                                {{opacity: 0}} onChange={this. bordercolor}/></div>
                              
                            </div>
                          </div>
                        </div>
                        <div  className="form-group col-md-6 mb-1">
                          <input type="text" style={{height:"60px"}} className="form-control" id="inputAddress" placeholder="Addess Title(optional)" onChange={(e)=>this.setState({add_title:e.target.value})}/>
                        </div>
                      </div>	
                      <div className="row">
                        <div  className="form-group  col-md-6 mb-1">
                          <input type="text"  className="form-control" id="Street" placeholder="Street"  onChange={(e)=>this.setState({street:e.target.value})}/>
                        </div>
                        <div  className="form-group col-md-6 mb-1">
                          <input type="text"  className="form-control" id="building" placeholder="Building"  onChange={(e)=>this.setState({building:e.target.value})}/>
                        </div>
                      </div>
                     
          
                      <div className="row">
                  
                        <div  className="form-group col-md-6 mb-1">
                          <input type="text"  className="form-control" id="Floor" placeholder="Floor"  onChange={(e)=>this.setState({floor:e.target.value})}/>
                        </div>
                        <div  className="form-group col-md-6 mb-1">
                           <input type="text"  className="form-control" id="Apartment" placeholder="Apartment No" onChange={(e)=>this.setState({appNo:e.target.value})}/>
                        </div>
                      </div>	
                      <div  className="form-group  col-md-6 mb-1">
                        <input type="text"  className="form-control" id="inputAddress2" placeholder="Assitional Directions(optional)"  onChange={(e)=>this.setState({additional:e.target.value})}/>
                      </div>
                      <div className="d-flex justify-content-end">
										<button type="button" data-toggle="modal" className="btn btn-primary " data-dismiss="modal" onClick={this.saveAddr}>Save Address
										</button>
									</div>
									
							     
                  </form>
                  
                
              </div> 
			      </Route>	
	
			


        );
    }
}
export default Address;