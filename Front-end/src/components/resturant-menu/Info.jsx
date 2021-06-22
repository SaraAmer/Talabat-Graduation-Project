import React from 'react';
import {FaCcVisa, FaCcMastercard} from 'react-icons/fa';
import {IoIosChatbubbles, IoIosCash} from 'react-icons/io';

function Info(props){
    return(
        <div className="info"  style={{textAlign:"left", padding:10}}>
            <h5>{props.name}</h5>
            <table class="table" style={{textAlign:"left"}}>
  <tbody>
  <tr></tr>
    <tr>
     
      <td>Minimum Order Amount</td>
      <td>EGP {props.minOrder}</td>
    </tr>
    <tr>
    
      <td>Working Hours</td>
      <td>{props.workingHours}</td>
    </tr>
    <tr>
     
      <td>Delivery Time</td>
      <td>{props.deliveryTime}</td>
    </tr>
    <tr>
    
    <td>Delivery Fee</td>
    <td>EGP {props.deliveryFee}</td>
  </tr>
  <tr>
    
    <td>Pre-Order</td>
    <td>{props.preOrder}</td>
  </tr>
  <tr>
    
    <td>Payment</td>
    <td>
    <span className="visa"> <FaCcVisa/></span>
       <span className="master-card">  <FaCcMastercard /></span>
       <span className="cash"><IoIosCash/></span>

    </td>
  </tr>
  <tr>
    
    <td>Rating</td>
    <td>{props.rating}</td>
  </tr>
  <tr>
    
    <td>Cuisines</td>
    <td>{props.cuisines}</td>
  </tr>
  </tbody>
</table>
        </div>
    );
}

export default Info;