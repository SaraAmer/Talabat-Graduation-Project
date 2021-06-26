import React from 'react'; 
import "./categories.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faTrash } from '@fortawesome/free-solid-svg-icons'
class Categories extends React.Component{
 constructor(){
 super();
 this.categories=[]
 this.resId = localStorage["resId"];
 this.state = {
 display: 'none',
 category:"",
 categories: [],
 }
 }
 async componentWillMount() {
 let res = await fetch(`http://127.0.0.1:8000/restaurant/${this.resId}/category`, {
 method: "GET",
 headers: {
 "Content-Type": "application/json",}
 })
 .then(res => res.json())
 .then(result => {
     this.categories = result.Categories
 this.setState({categories: this.categories 
 , category:""} ) 
 
 });
 
 }
 inputHandler=()=>{
 this.setState({display: this.state.display==="none"?"flex":"none"})
 console.log(this.state.display)
 }
 submitHandler=async(e)=>{
 // e.prevetDefault();
 
 let res = await fetch(`http://127.0.0.1:8000/restaurant/${this.resId}/category`, {
 method: "POST",
 headers: {
 "Content-Type": "application/json",
 },
 body: JSON.stringify({
 
 name: this.state.category,
 
 }),
 }); 
 this.categories.push({name: this.state.category});
 this.setState({categories:  this.categories 
 , category:""} ) 


 }
 deleteItem=async (index)=>{
 console.log("deleted")
 
 let res = await fetch(`http://127.0.0.1:8000/restaurant/category/${this.state.categories[index]._id}`, {
 method: "DELETE",
 headers: {
 "Content-Type": "application/json",}
 })
 .then(res => res.json())
 .then(result => {
 alert("the category deleted successfuly")

 
 });
 this.categories.splice(index,1)
 this.setState({categories:  this.categories 
    , category:""} ) 

 
 }
 render(){
 
 return(
 <div>
 
 <div className="categories-items">
 <h6>
 Categories
 </h6>
 {this.state.categories.map((category , index )=>{
 return (
 <div className="categories-item">
 <div className="category-name">
 <p>
 {category.name}
 
 </p>
 </div>
 <div className="tash-icon">
 <FontAwesomeIcon icon={faTrash} color="red" onClick={()=>this.deleteItem(index)} />
 </div> 
 </div>
 
 )
 })}
 
 <form style={{ display: this.state.display}} onSubmit={this.submitHandler} > 
 <input type="text" style={{width: "100%" ,display: "inline-block"}} value={this.state.category} onChange={(e)=>{this.setState({category: e.target.value})}} />
 
 </form>
 <input type="submit" value="add" className="btn btn-primary btn-sm" style={{display: this.state.display}}onClick={this.submitHandler} />
 <div id="plus-icon">
 
 <FontAwesomeIcon icon={faPlus} color="grey" onClick={this.inputHandler}/>
 </div>
 
 
 </div>
 
 
 </div>
 
 )
}
 
}
export default Categories