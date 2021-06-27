import React from 'react';
import './Dashboard.css'
import ReactApexChart from "react-apexcharts";
import Orders from "../orders/orders"
class Dashboard extends React.Component{
  

    render()
    {
        return(
            <div>
    
              < Orders/>
            
             
            </div>
         
        )
    }
}
export default Dashboard