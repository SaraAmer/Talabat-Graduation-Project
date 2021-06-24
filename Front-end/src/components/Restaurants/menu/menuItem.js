import React  from 'react'; 
import Categories from "./categories"
import "./menuItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen , faTrash} from '@fortawesome/free-solid-svg-icons'
class MenuItem extends React.Component{
    constructor(props){
        super()
        this.state={
            display: "none"
        }
    }
    HandleCategoryItem=()=>{
        this.setState({display: this.state.display=="none"?"":"none"})
       
    }

    render(){
        return(
            <div id="menue-category-item">

         
            <div id="categories" onClick={this.HandleCategoryItem}>

                <h4>
                    {this.props.category}
                </h4>
              
          
            </div>
            <div id="item-details" style={{display: this.state.display}}>
                <div>
                <img src="ceasar_salad_with_ch_637579706460748196.jpg" id="product-img"/>
                <input id="product-name" value="Chicken Caesar Salad" readOnly/>
            

               
            
                </div>
                <div>
                <FontAwesomeIcon icon={faTrash} style={{marginRight: "10px"}}/>
                <FontAwesomeIcon icon={faPen} />

                
                
                </div>
            </div>
            </div>
            
                     
                    

              
          
            
         
        
        )
        }
}
export default MenuItem