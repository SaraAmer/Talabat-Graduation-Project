import React from 'react'
import { ImOffice } from "react-icons/im";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";
import M from "materialize-css";
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
     this.state = {
        mobile:'',
        landing:'',
        addressTitle:'',
        street:'',
        building:'',
        floor:'',
        apartmentN:'',
        assitionalDirect:'',
        country: '',
        region: '',
        gender:'' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  saveAddr = async (e) => {
    // console.log("MOBile");
    // console.log(this.state.mobile);
    //   console.log(this.state. landing)
    //     console.log(this.state.street)
    //     console.log( this.state.country)
    //     console.log(this.state.region)
    //     console.log(this.state.floor)
    //     console.log(this.state.building)
    //     console.log(this.state.apartmentN)
    //     console.log(this.state.addressTitle)
    //     console.log(this.state.assitionalDirect)
    //     console.log(this.state.type)



    let res = await fetch(
      `http://127.0.0.1:8000/user/address`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //key and value from form
        userId: localStorage["userId"],
        mobile: this.state.mobile,
        landing: this.state. landing,
        street: this.state.street,
        country: this.state.country,
        region: this.state.region,
        floor: this.state.floor,
        building: this.state.building,
        apartmentN: this.state.apartmentN,
        addressTitle: this.state.addressTitle,
        assitionalDirect: this.state.assitionalDirect,
        type: this.state.type,
        lang: 122,
        att: 132
        }),
      }
    );
    let resJson = await res.json();
    console.log(resJson.error);
    console.log(resJson.message);
  

  };
   handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  bordercolor=(e)=>{
  this.setState({type:e.target.value});
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
								<input type="phone"  className="form-control" placeholder="Mobile Number" name="mobile" value={this.state.mobile} onChange={this.handleChange}/>
							</div>
							<div  className="form-group col-md-6">
								<label for="inputPassword4">Landing Number</label>
								<input type="text"  className="form-control" id="Landing" placeholder="Landing Number(optional)"  name="landing" value={this.state.landing} onChange={this.handleChange}/>
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
                            
                            
                              <label  for="exampleRadios1" type="btn"  className=" btn border" id={this.state.type=="House"?'active':'inactive'} ><i className="bi bi-house-door"></i>House
                              </label>
                              
                              	<label  for="exampleRadios2" type="btn"  className=" btn border" id={this.state.type=="Apartment"?'active':'inactive'} ><HiOutlineOfficeBuilding/>Apartment
                                </label>
                                <label  for="exampleRadios3" type="btn"   className=" btn border" id={this.state.type=="Office"?'active':'inactive'} ><ImOffice/>Office
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
                          <input type="text" style={{height:"60px"}} className="form-control" id="inputAddress" placeholder="Addess Title(optional)" name="addressTitle" value={this.state.addressTitle}onChange={this.handleChange}/>
                        </div>
                      </div>	
                      <div className="row">
                        <div  className="form-group  col-md-6 mb-1">
                          <input type="text"  className="form-control" id="Street" placeholder="Street" name="street" value={this.state.street} onChange={this.handleChange}/>
                        </div>
                        <div  className="form-group col-md-6 mb-1">
                          <input type="text"  className="form-control" id="building" placeholder="Building" name="building" value={this.state.building} onChange={this.handleChange}/>
                        </div>
                      </div>
                     
          
                      <div className="row">
                  
                        <div  className="form-group col-md-6 mb-1">
                          <input type="text"  className="form-control" id="Floor" placeholder="Floor" name="floor" value={this.state.floor} onChange={this.handleChange}/>
                        </div>
                        <div  className="form-group col-md-6 mb-1">
                           <input type="text"  className="form-control" id="Apartment" placeholder="Apartment No"name="apartmentN" value={this.state.apartmentN} onChange={this.handleChange}/>
                        </div>
                      </div>	
                      <div  className="form-group  col-md-6 mb-1">
                        <input type="text"  className="form-control" id="inputAddress2" placeholder="Assitional Directions(optional)" name="assitionalDirect" value={this.state.assitionalDirect} onChange={this.handleChange}/>
                      </div>
                      <div className="d-flex justify-content-end">
										<button onClick={this.saveAddr} type="button" data-toggle="modal" className="btn btn-primary " data-dismiss="modal" onClick={this.saveAddr}>Save Address
										</button>
									</div>
									
							     
                  </form>
                  
                
              </div> 
			      </Route>	
	
			


        );
    }
}
export default Address;