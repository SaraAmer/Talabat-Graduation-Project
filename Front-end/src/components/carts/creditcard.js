import React, { useState } from "react";
import Cards from "react-credit-cards";

import "react-credit-cards/es/styles-compiled.css"; 
class CreditCards extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

 
  
  handleInputChange = (e) => {
    
    this.setstate({

    })
   
  }
render(){
    return (  <div id="PaymentForm">   
          
                 <form action="">
                
                     <label for="cc-number">Credit card number</label> 
                      <input     
                        type="number"     
                        name="number"     
                        placeholder="Card Number"     
                           class="form-control"    
                        onChange={this.handleInputChange}    
                     />  	
                     <div class="invalid-feedback">
							Credit card number is required
							</div>
                     
                     <label for="cc-expiration">Card expiry date</label> 
                     <input     
                        type="date"     
                        name="expiry"       
                        placeholder="Expire Date" 
                        class="form-control"    
                        onChange={this.handleInputChange}    
                      />  
                     <div class="invalid-feedback">
								Expiration date required
							</div> 
                     <label for="cc-cvv">card verification value</label>     
                     <input     
                        type="number"     
                        name="cvc"     
                        placeholder="CVC"
                           class="form-control"         
                        onChange={this.handleInputChange}    
                     />    
                     <div class="invalid-feedback">
							Security code required
							</div>
                     
                    
                 </form>  
          
             </div> 
  );
      }}; 
export default CreditCards;