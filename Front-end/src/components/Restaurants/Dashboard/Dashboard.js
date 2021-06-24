import React from 'react';
import './Dashboard.css'
import ReactApexChart from "react-apexcharts";
class Dashboard extends React.Component{
    constructor(props){
        super(props);

   
        this.state = {
          
            series: [{
              name: 'Orders',
              data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }],
            options: {
              chart: {
                height: 350,
                type: 'bar',
              },
              plotOptions: {
                bar: {
                  borderRadius: 5,
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function (val) {
                  return val + "%";
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              
              xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'top',
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                }
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              
              },
              title: {
                text: 'Monthly orders in Argentina, 2002',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                  color: '#444',
                  width: "60%" ,
                }
              }
            },
          
          
          };
    }
    render(){
        return(
            <div>
              
                <div id="charts-container">
                    <div id="notes_container">
                        <div className="notes">
                            <h5>Revenue</h5> 
                            <h3>500$</h3>
                        </div>
                            
                        <div className="notes">
                            <h5>Customers</h5> 
                            <h3>500</h3>
                        </div>

                        <div className="notes">
                            <h5>Orders</h5> 
                            <h3>500</h3>
                        </div>

                        <div className="notes">
                            <h5>Growth</h5> 
                            <h3>+ 30.56%</h3>
                        </div>
                    </div>

                    <div id="Chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                    </div>
                </div>
                
            
             
            </div>
         
        )
    }
}
export default Dashboard