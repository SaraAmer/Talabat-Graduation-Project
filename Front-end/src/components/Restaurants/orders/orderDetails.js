import React from 'react'
import Image from "./ceasar_salad_with_ch_637579706460748196.jpg"
import "./orderDetails.css"


class OrderDetails extends React.Component{
    constructor(){
        super()
        this.state={
            items: ['checken' , 'burger']
        }
    }
    render(){
     let items=   this.state.items.map(()=>{
            return(
                <div className="container" id="order-details-container">
                <img src={Image} id="product-image"/>
                <span id="product-name" >
                Chicken Caesar Salad
                </span> 
                <div id="item-details">
                  <div><strong> Type :</strong> Single </div> 
                   <div><strong> Quantity :</strong> 2</div> 
                   <div> <strong> Combo:</strong> Chips and Coca Can</div> 
                   <div> <strong> Estars:</strong> Katchep Sauce , BBQ Sauce</div> 

                </div>
               
            </div>

            )
        })
        
        return(
            <div>
                 {items}
                 <div id="total">
                     Total: 500 
                 </div>
              

            </div>
           
        
         )
    }
}
export default OrderDetails