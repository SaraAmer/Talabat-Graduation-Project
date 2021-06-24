import React  from 'react'; 
import Categories from "./categories"
import  MenuBody from "./body"
import "./menu.css"
class Menu extends React.Component{
    constructor(){
        super()
        this.categories=["Salad" , "Best Seller" , "Appatizer"]
    
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