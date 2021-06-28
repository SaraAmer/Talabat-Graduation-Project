import React  from 'react'; 
import Categories from "./categories"
import "./menuItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen , faTrash} from '@fortawesome/free-solid-svg-icons'
class MenuItem extends React.Component{
    constructor(props){
        super()
        this.state={
            display: "none",
            food:[]
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
     



    }
    async componentWillMount() {
        console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
        let res = await fetch(`http://localhost:8000/restaurant/60d60bcd76b7c03cfed9afe7/food`, {
            method: "GET",
            headers: {
          "Content-Type": "application/json",}
      })
       .then(res => res.json())
        .then(result => {
        this.setState({food: result.food})    
        console.log(result)
       
        });
      
    }

    render(){
        return(
            <div id="menue-category-item">

         
            {/* <div id="categories" onClick={this.HandleCategoryItem}>

                <h4>
                    {this.props.category}
                </h4>
              
          
            </div> */}
            <div id="item-details" >
            
            {this.state.food.map((food , index )=>{
                            return (
                                <div className="categories-item">
                                    <div>
                            <img src={`http://localhost:8000/${food.img}`} id="product-img"/>
            <span>
               
            {food.name}
                </span>
                <span>
               
            {food.price}
                </span>
                <span>
               
               {food.rate}
                   </span>
</div>
                <div>
                <FontAwesomeIcon icon={faTrash} style={{marginRight: "10px"}} onClick={()=>this.deleteItem(index)}  />
                <FontAwesomeIcon icon={faPen} />

                
                
                </div>
            

                                 </div>
                                 


                            )
                        })}

                <div>
              
            

               
            
                </div>
          
            </div>
            </div>
            
                     
                    

              
          
            
         
        
        )
        }
}
export default MenuItem