import React  from 'react'; 
import Categories from "./categories"
import  MenuBody from "./body"
import "./menu.css"
class Menu extends React.Component{
    constructor(){
        super()
        this.categories=[]
        this.resId = localStorage["resId"];
    
    }
    async componentWillMount() {
 let res = await fetch(`http://127.0.0.1:8000/restaurant/${this.resId}/category`, {
 method: "GET",
 headers: {
 "Content-Type": "application/json",}
 })
 .then(res => res.json())
 .then(result => {
 this.categories  = result.Categories ;
 
 
 });
 
 }

    render(){
        return (
            <div id="restaurant-menue-container" >
                <div id="categories-container">
                    <Categories categories={this.categories} />
                </div>
                <div id="menue-body">
                    <MenuBody categories={this.categories}/>

                </div>
            </div>
        )
    }
}
export default Menu