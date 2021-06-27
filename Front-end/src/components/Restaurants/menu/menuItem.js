import React  from 'react'; 
import Categories from "./categories"
import "./menuItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen , faTrash} from '@fortawesome/free-solid-svg-icons'
class MenuItem extends React.Component{
    constructor(props){
        super()
        this.state={
            resId : localStorage["resId"],
            display: "none",
            food : []
        }
    }
    HandleCategoryItem=()=>{
        this.setState({display: this.state.display=="none"?"":"none"})
       
    }

    deleteItem=async (index)=>{
        console.log("deleted")
        
        let res = await fetch(`http://127.0.0.1:8000/restaurant/food/${this.state.food[index]._id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",}
        })
        .then(res => res.json())
        .then(result => {
        alert("the category deleted successfuly")
        
        
        });
       
        this.setState({food:   this.state.food.splice(index,1)} ) 
       
       
        
        }

    async componentWillMount() {
        console.log("Enter menu item");
 let res = await fetch( `http://localhost:8000/restaurant/${this.state.resId}/food`, {
 method: "GET",
 headers: {
 "Content-Type": "application/json",}
 })
 .then(res => res.json())
 .then(result => {
     this.setState({
         food: result.food
         
     })
     console.log(this.state.food);
 
 });
 
 }

    render(){
        return(
            <div id="menue-category-item">

         
            <div id="categories" onClick={this.HandleCategoryItem}>

                <h4>
                    {this.props.category}
                </h4>
              
          
            </div>
            {this.state.food.length > 0 ? this.state.food.map((f, index) =>{
                return(
                    <div id="item-details" style={{margin: "20px", backgroundColor: '#kcc'}}>
            
            <div>
            <img src={`http://localhost:8000/${f.img}`} id="product-img"/>
            <input id="product-name" value={f.name} readOnly/>
            </div>
            <div>
            <FontAwesomeIcon onClick={()=>this.deleteItem(index)} icon={faTrash} style={{marginRight: "10px"}}/>
            <FontAwesomeIcon icon={faPen} />

            
            
            </div>
        </div>
                );
            }) : <div> No foods in restaurant </div> }

            </div>
            
                     
                    

              
          
            
         
        
        )
        }
}
export default MenuItem