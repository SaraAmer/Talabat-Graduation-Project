import React from "react";
import "./foodform.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaugh , faCamera} from '@fortawesome/free-solid-svg-icons'
import Sections  from "./Sections/sections"
class FoodForm extends React.Component{
    constructor(props){
        super();
        this.state = {
            image : "logo_636996632671251135.jpg",
            sections: []


        }
    }
    addSection=()=>{

        this.state.sections.push(<li> hello</li>)
        console.log(this.state.sections)
      
    }

    render(){
        return (
            <div>
                <form>
                    <div>
                        <img  src={this.state.image} id="restaurant-logo-img"/>  
                    </div>
                    <label htmlFor="myInput">  <FontAwesomeIcon icon={faCamera} color="grey"  id="upload-icon"/>  </label>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="product Name"/>
                    </div>
                   
                  
                </form>
                {
                    this.state.sections.map((section)=>{
                       return <div>
                           <Sections/>
                           </div>

                    })
                }
                
                <button className="btn btn-success" onClick={this.addSection}>Add Choice </button>
                <div>
              
                    </div>
            </div>
        )
    }
}
export default FoodForm 