import React from "react";
import DashboardNavbar from "./DashboardNavbar.js";
import { FcInfo } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaBan } from "react-icons/fa";
import "./Restaurant.css";
import { FcSearch } from "react-icons/fc";
import JoinRequests from "./JoinRequests.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


class BannedRestaurants extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [
        {
          id: "1",
          name: "Cilantro",
          location: "smouha,alexandria",
          img: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/03/ppj07117.jpg",
          joinedIn: "20/6/2020",
          email: "Cilantro@yahoo.com",
        },
      ],
      apiRestaurants: [],
      bannedRestaurants: [],
      loading: false,
      refresh: false,
    };
  }
  viewDetails = (restaurantCopouns) => {
    console.log(restaurantCopouns);
  };

  deleteRes = (resId) => {
    console.log(resId);
    if (window.confirm("Are you sure?")) {
      fetch("http://127.0.0.1:8000/restaurants/" + resId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
    this.state.refresh = true;
    this.setState({ refresh: this.state.refresh });
      window.location.href = "http://localhost:3000/banned-restaurants";
    
  };

  async componentWillMount() {
    this.setState({ loading: true });
    let res = await fetch("http://127.0.0.1:8000/restaurants", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    // console.log(res.err);
    let resJson = await res.json();
    // let myRestaurants = resJson.restaurants;
    //  console.log(resJson.restaurants);
    resJson.restaurants.map((restaurant) => {
      console.log(restaurant);
      if (restaurant.status === "banned") {
        console.log(restaurant.name);
        this.state.bannedRestaurants.push(restaurant);
      }
    });

    this.setState({
      loading: false,
      bannedRestaurants: this.state.bannedRestaurants,
    });
    //console.log(resJson);
  }

  // componentWillMount() {
  //   this.setState({loading:true});
  //     fetch("http://localhost:8000/restaurants")
  //       .then((res) => res.text())
  //       .then((res) => this.setState({ apiRestaurants: res.restaurants ,loading:false}));

  // }
  unbanRestaurant = (resId) => {
    console.log(resId);
    this.state.status = "accepted";
    this.setState({ status: this.state.status });
    const fd = new FormData();
    fd.append("status", this.state.status);
    axios.put("http://127.0.0.1:8000/restaurants/" + resId, fd).then((res) => {
      console.log(res);
    });

    this.setState({
      acceptedRestaurants: this.state.acceptedRestaurants,
    });
             window.location.href = "http://localhost:3000/banned-restaurants";
  };
  render() {
    return (
      <Router>
        <div className="container" >
          {" "}
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
            Banned Restaurants
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: " center",
              color: "rgb(33, 33, 33)",
              backgroundColor: "rgb(246, 246, 246)",
              marginTop: "30px",

              paddingInline: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: "22px",
            }}
          >
            <div>
              <div
                className="input-group rounded"
                style={{ width: 600, marginTop: "15px", float: "right" }}
              >
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search by restaurant name"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />

                <span className="input-group-text border-0" id="search-addon">
                  <FcSearch />
                </span>
              </div>
            </div>
            {/* <div style={{ marginLeft: "100px" }}>
              <a href="/JoinRequests" class="btn text-white btn-danger">
                Go to Banned Restaurants
              </a>
            </div> */}
          </div>
          <div className="row">
            {this.state.bannedRestaurants.length > 0 ? (
              this.state.bannedRestaurants.map((restaurant) => {
                return (
                  <div
                    className="card "
                    style={{
                      width: "290px",
                      marginLeft: "25px",
                      marginRight: "8px",
                      marginTop: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={`http://localhost:8000/${restaurant.img}`}
                      style={{
                        paddingLeft: "0px",
                        paddingRight: "9px",
                        width: "275px",
                        height: "170px",
                      }}
                      alt="Card image cap"
                    ></img>
                    <div
                      className="card-body text-center"
                      style={{ paddingBottom: "0px" }}
                    >
                      <h5 className="card-title text-center">
                        {restaurant.name}
                      </h5>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div>
                            <button
                              type="button"
                              class="btn "
                              data-toggle="modal"
                              data-target={`#${restaurant._id}`}
                            >
                              <FcInfo />
                              Details
                            </button>

                            <div
                              class="modal fade"
                              id={restaurant._id}
                              tabindex="-1"
                              role="dialog"
                              aria-labelledby="exampleModalLongTitle"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5
                                      class="modal-title"
                                      id="exampleModalLongTitle"
                                    >
                                      {restaurant.name} Details
                                    </h5>
                                    <button
                                      type="button"
                                      class="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <ViewDetails res={restaurant} />
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <button
                            className="btn card-link"
                            onClick={() => this.unbanRestaurant(restaurant._id)}
                          >
                            <FaBan /> UnBan Restaurant
                          </button>
                        </li>
                        <li className="list-group-item">
                          <button
                            style={{
                              border: "none",
                              background: "white",
                              color: "blue",
                            }}
                            onClick={() => this.deleteRes(restaurant._id)}
                          >
                            <RiDeleteBin5Line /> Delete Restaurant
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1
                style={{
                  marginTop: "50px",
                  color: "grey",
                  marginBottom: "100px",
                }}
              >
                Loading Restaurants . . .
              </h1>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

class ViewDetails extends React.Component {
  res = this.props.res;
  // constructor(){
  //   super();
  //   console.log(this.res.img)
  // }
  render() {
    return (
      <div style={{ fontSize: "25px" }}>
        <b> {this.res.name} </b>
        <br></br>
        <img
          src={`http://localhost:8000/${this.res.img}`}
          style={{ width: "450px", height: "200px" }}
        />
        <br></br>
        <b>Location:</b> {this.res.address.street}
        <br></br>
        <b>Cusine:</b> {this.res.cusine}
        <br></br>
        <b>Description:</b> {this.res.desc}
        <br></br>
        <b>Website: </b> {this.res.website} <br></br>
        <b>Working hours :</b> {this.res.workingHours}
        <br></br>
        <b>Min order amount :</b> {this.res.minOrderAmount}
        <br></br>
        <b>Payment method:</b>
        {this.res.payment}
        <br></br>
        <b>Service charge:</b> {this.res.serviceCharge}
        <br></br>
        <b>Rate:</b> {this.res.rate}
      </div>
    );
  }
}

export default BannedRestaurants;
