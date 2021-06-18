import React from 'react'
import DashboardNavbar from "./DashboardNavbar.js";
import { FcInfo } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaBan } from "react-icons/fa";
import './Restaurant.css'

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
        },
        {
          id: "2",
          name: "Starbucks",
          location: "smouha,alexandria",
          img: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/03/sretsis-parlour-02.jpg",
          joinedIn: "20/6/2020",
          email: "Cilantro@yahoo.com",
        },
        {
          id: "4",
          name: "Pick 'N Go",
          location: "smouha,alexandria",
          img: "https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-768x512.jpg",
          joinedIn: "20/6/2020",
          email: "Cilantro@yahoo.com",
        },
        {
          id: "5",
          name: "Cilantro",
          location: "smouha,alexandria",
          img: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/03/ppj07117.jpg",
          joinedIn: "20/6/2020",
          email: "Cilantro@yahoo.com",
        },
        {
          id: "6",
          name: "Cinabbon",
          location: "smouha,alexandria",
          img: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/03/as-is.jpg",
          joinedIn: "20/6/2020",
          email: "Cilantro@yahoo.com",
        },
        {
          id: "7",
          name: "Starbucks",
          location: "smouha,alexandria",  
          img: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/03/sretsis-parlour-02.jpg",
          joinedIn: "20/6/2020",
          email: "Cilantro@yahoo.com",
        },
        {
          id: "8",
          name: "Cinabbon",
          location: "smouha,alexandria",
          img: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/03/as-is.jpg",
          joinedIn: "20/6/2020",
          email: "Cilantro@yahoo.com",
        },
      ],
    };
  }
  viewDetails = (restaurantCopouns) => {
    console.log(restaurantCopouns);

  };
  
  deleteRes = (resId) => {
    console.log(resId)
    
    for (var i = 0; i < this.state.restaurants.length; i++) {
      console.log("inside forloop")
      if (this.state.restaurants[i].id === resId) {
        console.log("found ")
        console.log(this.state.restaurants[i]);
        this.state.restaurants.splice(i, 1);
      }
    }

    this.setState({ restaurants: this.state.restaurants });

  }

  render() {
    return (
      <div className="container">
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
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          {this.state.restaurants.length > 0
            ? this.state.restaurants.map((restaurant) => {
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
                     style={{ paddingLeft: "0px", paddingRight: "0px",width:"235px" ,height:"180px"}}
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
                              data-target={`#${restaurant.id}`}
                            >
                              <FcInfo />
                              Details
                            </button>

                            <div
                              class="modal fade"
                              id={restaurant.id}
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
                          <button style={{border:"none",background:"white",color :"blue"}}    onClick={() =>
                                    this.deleteRes(restaurant.id)
                                  }>
                            <RiDeleteBin5Line /> Delete Restaurant
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })
            : "There's not any restaurants yet"}
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
       
              <b> {this.res.name} </b><br></br>
              <img
                src={this.res.img}
                style={{ width: "450px", height: "200px" }}
              /><br></br>
              <b>Location:</b> {this.res.location}<br></br>
              <b>Email: </b> {this.res.email} <br></br>
              <b>Join Talabat in:</b> {this.res.joinedIn}
      
          </div>
     
    );
  }
}

  export default Restaurant;
