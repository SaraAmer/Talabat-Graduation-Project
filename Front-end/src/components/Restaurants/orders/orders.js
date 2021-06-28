import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OrderDetails from "./orderDetails"

class Orders extends React.Component{

    constructor(){
      super();
      this.state={
        orders:[],
      }
    }
    async componentWillMount() {
      let res = await fetch(`http://127.0.0.1:8000/order/restaurant/${localStorage["restId"]}`, {
          method: "GET",
          headers: {
        "Content-Type": "application/json",}
    })
     .then(res => res.json())
      .then(result => {
      this.setState({ orders: result.Orders }
         )    
     
      });
    
  }
   render(){
    return(<div>
      <table class="table">
      <thead>
      <tr>
      <th scope="col">User name</th>
      <th scope="col">Number</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      </tr>
      </thead>
      <tbody>
        {
        this.state.orders.map((order =>{
          return (
            <tr>
 {/* <th scope="row">2</th>
 <td>{order.user.firstName}</td>
 <td>{order.user.lastName}</td>
 <td>{order.payment}</td>
 <td>{order.user.firstName}</td>
 <td><button>
   Active
   </button></td>
 <td>@fat</td> */}
 </tr>
          )
        }))
    
      
   }
   </tbody>
     </table>
      
      
      </div>)

}}

export default Orders