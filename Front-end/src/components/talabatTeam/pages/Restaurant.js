import React from 'react'
import DashboardNavbar from "./DashboardNavbar.js";
import { FcInfo } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaBan } from "react-icons/fa";
import './Restaurant.css';
import { FcSearch } from "react-icons/fc";
class Restaurant extends React.Component {
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
        }
      ],
      apiRestaurants:[],
       loading:false,
       refresh:false
      
    };
  }
  viewDetails = (restaurantCopouns) => {
    console.log(restaurantCopouns);
  };

  deleteRes = (resId) => {
    console.log(resId);
    if (window.confirm('Are you sure?')){
     fetch("http://127.0.0.1:4000/restaurants/" + resId, {
       method: "DELETE",
       headers: {
        'Accept': "application/json",
         "Content-Type": "application/json",
       },
     });
  }
    this.state.refresh=true;
    this.setState({ refresh: this.state.refresh});
  };

  async componentWillMount() {
    this.setState({loading:true});
    let res = await fetch("http://127.0.0.1:4000/restaurants",

     {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    let resJson = await res.json();
    this.setState({ loading: false, apiRestaurants: resJson.restaurants });
    console.log(resJson);
    
  }

  

  
  // componentWillMount() {
  //   this.setState({loading:true});
  //     fetch("http://localhost:4000/restaurants")
  //       .then((res) => res.text())
  //       .then((res) => this.setState({ apiRestaurants: res.restaurants ,loading:false}));

  // }

  render() {
    return (
      <div className="container">
        <h1> {this.state.apiResponse} </h1>
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
        </div>

        <div className="row">
          {!this.state.loading ?
             this.state.apiRestaurants.map((restaurant) => {
                return (
                  <div
                    className="card "
                    style={{
                      width: "260px",
                      marginLeft: "16px",
                      marginRight: "5px",
                      marginTop: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={restaurant.img}
                      style={{
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        width: "235px",
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
                          <div className="text-center">
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
                          <a href="#" className="card-link">
                            <FaBan /> Ban Restaurant
                          </a>
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
          :<h1 style={{marginTop:"50px",color:"grey",marginBottom:"100px"}}>Loading Restaurants . . . </h1>}
        </div>
      </div>
    );
  }
}


class ViewDetails extends React.Component {
  res = this.props.res;
  render() {
    return (
      <div>
        <b> {this.res.name} </b>
        <br></br>
        <img
          src={`/Talabat-Graduation-Project/Back-end/${this.res.img}`}
          style={{ width: "450px", height: "200px" }}
        />
        <br></br>
        <b>Location:</b> {this.res.location}
        <br></br>
        <b>Email: </b> {this.res.email} <br></br>
        <b>Join Talabat in:</b> {this.res.joinedIn}
      </div>
    );
  }
}

  export default Restaurant;
