import React  from 'react';
import './profile.css'
import Menu from "../menu/menu"
import FoodForm from "../menu/createForm/foodform"
import Branches from "../Branches/branches"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaugh , faCamera} from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import { NavLink } from 'react-router-dom';
class Profile extends React.Component{
    constructor(){
        super();
   
        this.resId = localStorage["resId"];
        this.state = {
          restaurant: [],
            image : "logo_636996632671251135.jpg",
            name : "",
            desc : "",
            cusine : '',
            website : '',
            numberOfBranches : '',
            country : '',
            minOrderAmount  : '',
            workingHours : '',
            serviceCharge  : '',
            vat : ''

        }
     

    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
    update = async () => {
      let res = await fetch(
        `http://127.0.0.1:8000/restaurants/${this.state.restaurant._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            //key and value from form
  
            name : this.state.name , 
            desc : this.state.desc,
            cusine : this.state.cusine,
            website : this.state.website,
            numberOfBranches : this.state.numberOfBranches,
            country : this.state.country,
            minOrderAmount  : this.state.minOrderAmount,
            workingHours : this.state.workingHours,
            serviceCharge  : this.state.serviceCharge,
            vat : this.state.vat
          }),
        }
      );
      let resJson = await res.json();
    };
    async componentWillMount() {
 let res = await fetch( `http://localhost:8000/restaurants/${this.resId}`, {
 method: "GET",
 headers: {
 "Content-Type": "application/json",}
 })
 .then(res => res.json())
 .then(result => {
     this.setState({
         restaurant: result.restaurant
     })
 
 
 });
 
 }

     upload =(e)=>{
       
         let reader = new FileReader();
         
         let file = e.target.files[0]
       
         reader.readAsDataURL(file)
        
         reader.onloadend = () => {
            this.setState({
           
              image: reader.result
            });
          }
      
        
        

    }

    render(){
        return(
            <div id="restaurant-menue">
                <div id="restaurant-Header">
                    <div id="restaurant-Header-logo">
                        <img src={`http://localhost:8000/${this.state.restaurant.img}`} id="restaurant-logo-img"/>  
                      <label htmlFor="myInput">  
                      <FontAwesomeIcon icon={faCamera} color="grey"  id="upload-icon"/>  </label>
                        <input 
                          id="myInput" 
                          type="file" 
                          style={{display:'none'}}
                          onChange={this.upload} /> 
                        
                    </div>
                    <div id="restaurant-Header-name">
                        <div id="restaurant-name">
                          <h3 >{this.state.restaurant.name}</h3>
                   
                          <p>
                          {this.state.restaurant.cusine}
                          </p>
                          <p>
                          Min. order: EGP {this.state.restaurant.minOrderAmount}
                          </p>
                        </div>
                        <div>
                          <p style={{color:"green"}}> OPEN </p>
                          <FontAwesomeIcon icon={faLaugh} color="grey"/>
                          <span>        
                              Very good
                          </span>
                        </div>
                    </div>
                </div>

                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
 Edit Restaurant
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Restaurant</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Name</label>
    <div class="col-sm-10">
      <input name="name" value={this.state.restaurant.name} onChange={this.handleChange}  class="form-control form-control-sm" id="colFormLabelSm" placeholder="name"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Description</label>
    <div class="col-sm-10">
      <input name="desc" value={this.state.restaurant.desc} onChange={this.handleChange}  class="form-control form-control-sm" id="colFormLabelSm" placeholder="description"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Cusine</label>
    <div class="col-sm-10">
      <input name="cusine" onChange={this.handleChange} value={this.state.restaurant.cusine}   class="form-control form-control-sm" id="colFormLabelSm"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Website</label>
    <div class="col-sm-10">
      <input name="website" onChange={this.handleChange} value={this.state.restaurant.website}  class="form-control form-control-sm" id="colFormLabelSm"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Number of Branches</label>
    <div class="col-sm-10">
      <input onChange={this.handleChange} name="numberOfBranches" value={this.state.restaurant.numberOfBranches} class="form-control form-control-sm" id="colFormLabelSm" />
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Min. order Amount</label>
    <div class="col-sm-10">
      <input onChange={this.handleChange} name="minOrderAmount" value={this.state.restaurant.minOrderAmount}  class="form-control form-control-sm" id="colFormLabelSm" />
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Working Hours</label>
    <div class="col-sm-10">
      <input onChange={this.handleChange} name="workingHours" value={this.state.restaurant.workingHours}  class="form-control form-control-sm" id="colFormLabelSm" />
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Service Charge</label>
    <div class="col-sm-10">
      <input onChange={this.handleChange} name="serviceCharge" value={this.state.restaurant.serviceCharge}  class="form-control form-control-sm" id="colFormLabelSm" />
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Vat</label>
    <div class="col-sm-10">
      <input onChange={this.handleChange} name="vat" value={this.state.restaurant.vat}  class="form-control form-control-sm" id="colFormLabelSm" />
          
    </div>
  </div>
    <br/>

  <br/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button onClick={this.update} type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                <Router>
                    <div id="restaurant-menu-nav">
                    
                            <div className="restaurant-menu-nav-item " >
                                
                            <NavLink to="/menu" activeClassName="active" className="profile-nav-item">Menu</NavLink>
                            </div>
                            <div className="restaurant-menu-nav-item">
                            <NavLink to="/Branches" activeClassName="active" className="profile-nav-item">Branches</NavLink>

                            </div>
                            <div className="restaurant-menu-nav-item">
                            <NavLink to="/Offers" activeClassName="active" className="profile-nav-item" >Offers/Cupons</NavLink>

                            </div>
                           
                    
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/menu">
                                    
                                <Menu/>
                            </Route>
                            <Route exact path="/Branches">
                            <Branches/>
                            </Route>
                            <Route exact path="/newFood"><FoodForm/></Route>
                        </Switch>
                    </div>
                </Router>
            
            </div>
        )
    }
    
}
export default Profile