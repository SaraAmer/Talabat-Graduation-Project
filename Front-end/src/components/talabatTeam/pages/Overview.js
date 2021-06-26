import React from 'react'
import DashboardNavbar from "./DashboardNavbar.js";
import Chart from "react-apexcharts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Clients from "./Clients.js";
import BannedRestaurants from "./BannedRestaurants";
import Restaurant from "./Restaurant.js";
class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsDonut: {},
      seriesDonut: [44, 55, 41, 17, 15],
      labelsDonut: ["A", "B", "C", "D", "E"],
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }
  render() {
    return (
      <div>

          <div class="container">
            <br></br>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: " center",
              }}
            >
              <div className="app">
                <div className="row">
                  <div className="mixed-chart">
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="bar"
                      width="500"
                    />
                  </div>
                </div>
              </div>

              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
              />
              <div className="donut">
                <Chart
                  options={this.state.optionsDonut}
                  series={this.state.seriesDonut}
                  type="donut"
                  width="380"
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Overview;
