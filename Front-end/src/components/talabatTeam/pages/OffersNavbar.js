import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import Copouns from "./Copouns";
import Offers from "./Offers";


class OffersNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          text: " Promotions",
          link: "/offers",
        },
        {
          text: "Copouns",
          link: "/copouns",
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
      <div className="container">
        <h1
          style={{
            color: "rgb(33, 33, 33)",
            backgroundColor: "rgb(246, 246, 246)",
            marginTop: "30px",
            marginBottom: "30px",
            paddingInline: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "28px",
            fontFamily: "sans-serif",
            paddingLeft: "50px",
          }}
        >
          Offers
        </h1>
        <Router>
          <nav
            class="navbar navbar-light"
            style={{
              backgroundColor: "#e3f2fd",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
             
            }}
          >
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
                    marginRight: "180px",
                    marginLeft: "180px",
                  }}
                  onClick={() => this.toggleActive(item.text)}
                >
                  {item.text}
                </Link>
              );
            })}
          </nav>

          <Switch>
            <Route path="/offers" exact component={Offers} />
            <Route path="/Copouns" exact component={Copouns} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default OffersNavbar;
