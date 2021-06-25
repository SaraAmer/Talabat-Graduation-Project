import React  from 'react'; 
import Categories from "./categories"
import "./body.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import MenuItem from "./menuItem"
import FoodForm from "./createForm/foodform"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class MenuBody extends React.Component{
    constructor(props){
        super()
        this.state ={
            categories : props.categories,
         

        }
       
    }

    render(){
        return(
            <div style={{width: "95%"}}>
                <div id="restaurant-search-bar">
                    <input type="text"  id="search-input" onFocus={this.inputFocus} placeholder="Search Menu item"/>
                    <FontAwesomeIcon icon={faSearch} color="grey" id="search-icon"/>
                </div>

              
                    <button className="btn btn-success"  data-toggle="modal" data-target="#exampleModal" style={{marginTop: "10px" , width: "66%"}} >
                        ADD NEW 
                    </button>
                    <MenuItem/>
            
                

                {
                    this.state.categories.map((category)=>{
                        return(
                            <div id="body-menu"> 
                            <MenuItem category={category} />
                            </div>
                        
                        )

                    })
            
                }
                   <div className="modal fade" id="exampleModal" tabindex="-1" role="form" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div class="modal-dialog" role="document" style={{width: "1000px"}}>
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Add New Product </h5>
                                        <button type="button" class="close btn-danger" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <FoodForm/>
                                      
                                    </div>
                            
                                </div>
                            </div>
                    </div> 
        
        
            </div>)
    }


}
export default MenuBody

