import React from "react";
import "./foodform.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaugh , faCamera} from '@fortawesome/free-solid-svg-icons'
import Sections  from "./Sections/sections"
import  axios from 'axios';
class FoodForm extends React.Component{
    constructor(props){
        super();
        this.state = {
            img : "logo_636996632671251135.jpg",
            categories:[{name: "fish"}],
            name: "",
            category:"",
            price:0,
            image:"",
            


        }
    }
    upload_food_image =(e)=>{
       
        let reader = new FileReader();
        
        let file = e.target.files[0]
        this.setState({ image: file});
      
        reader.readAsDataURL(file)
       
        reader.onloadend = () => {
           this.setState({
          
             img: reader.result
           });
         }
     
       
       

   }
    setInputValue = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    addSection=async()=>{
    
        const fd=new FormData();
        fd.append("name",this.state.name);
        fd.append("price", this.state.price);
        fd.append("img", this.state.image , this.state.image.name );
        axios.post("http://127.0.0.1:8000/restaurant/60d38c9a0a0a258cbcc0fc60/food",fd)
        .then(res=>{
          console.log(res);
        }); 
    }
    async componentWillMount() {
        let res = await fetch(`http://127.0.0.1:8000/restaurant/60d38c9a0a0a258cbcc0fc60/category`, {
            method: "GET",
            headers: {
          "Content-Type": "application/json",}
      })
       .then(res => res.json())
        .then(result => {
        this.setState({categories: result.Categories }) 
       
        });
      
    }
    render(){
        return (
            <div>
                <form>
                <div id="restaurant-Header-logo">
                        <img  src={this.state.image} id="restaurant-logo-img"/>  
                      <label htmlFor="myInput">  
                      <FontAwesomeIcon icon={faCamera} color="grey"  id="upload-icon"/>  </label>
                        <input 
                          id="myInput" 
                          type="file" 
                          style={{display:'none'}}
                          onChange={this.upload_food_image} /> 
                        
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" name ="name" placeholder="food  Name" value={this.state.name}  onChange={this.setInputValue}/>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="price" placeholder="food price" value={this.state.price}   onChange={this.setInputValue}/>

                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="product Name"/>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="product Name"/>
                    </div>
                   
                  
                </form>
             
                
                <button className="btn btn-success" onClick={this.addSection}>Add Food </button>
                <div>
              
                    </div>
            </div>
        )
    }
}
export default FoodForm 