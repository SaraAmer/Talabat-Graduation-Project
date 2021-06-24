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
        this.state = {
            image : "logo_636996632671251135.jpg"


        }
     

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
                        <img  src={this.state.image} id="restaurant-logo-img"/>  
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
                          <h3 >Holmas</h3>
                          <p>
                          in El Seyouf , Egypt

                          </p>
                          <p>
                          Burgers
                          </p>
                          <p>
                          Min. order: EGP 15.00
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