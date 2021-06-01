import React from 'react';
import RestaurantHeader from './Header/Header';
class Restaurant extends React.Component{
    render(){
        return (
          <div style=  {{background: "rgb(247, 245, 245)"}} >     
              <RestaurantHeader/>
          </div>
        
        )
    }
}
export default Restaurant