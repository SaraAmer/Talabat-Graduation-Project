import React from 'react'
import "./DashboardNavbar.css";
import { Link } from "react-router-dom";
import Clients from "./Clients.js"
import Restaurant from "./Restaurant.js";
import Overview from "./Overview.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class DashboardNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          text: "  Overview",
          link: "/",
        },
        {
          text: "Restaurants",
          link: "/restaurants",
        },
        {
          text: "Clients",
          link: "/clients",
        },
      ],
    };

    
  }

  toggleActive = (text) => {
    this.state.items.forEach((item) => (item.active = false));
    let item = this.state.items.find((x) => x.text == text);
    item.active = !item.active;
    this.setState({ items: this.state.items });
    //this.forceUpdate();
  };
  render() {
    return (
      <Router>
       
    
            <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd",position: "relative",
            zIndex:"2"}}>
              {this.state.items.map((item, i) => {
                return (
                  <Link
                    to={item.link}
                    className=" text-center "
                    key={item.text}
                    style={{
                      fontSize: "30px",
                      borderRadius: "15px",
                      paddingTop: "10px",
                      paddingBottom: "12px",
                      paddingRight: "15px",
                      paddingLeft: "15px",
                      backgroundColor: item.active ? "rgb(6, 11,38)" : "",
                      color: item.active ? "white" : "",
                      marginRight:"150px",
                      marginLeft:"150px"
                    }}
                    onClick={() => this.toggleActive(item.text)}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </nav>
      
       

        <Switch>
          <Route path="/" exact component={Overview} />
          <Route path="/restaurants" exact component={Restaurant} />
          <Route path="/clients" exact component={Clients} />
        </Switch>
      </Router>
    );
  }
}

export default DashboardNavbar;
