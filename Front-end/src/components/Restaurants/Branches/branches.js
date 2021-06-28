import React  from 'react'; 
import './branches.css'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";



  class Branches extends React.Component{
    async componentWillMount() {
      let res = await fetch(`http://127.0.0.1:8000/order/restaurant/60d4ae3fa42c3f207c8eda63`, {
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
    
  render()
  {
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

 </tr>
          )
        }))
    
      
   }
   </tbody>
     </table>
      
      
      </div>)
  }}
export default Branches