import React from 'react';
import { FcInfo } from "react-icons/fc";
import axios from "axios";

class JoinRequests extends React.Component {
  constructor() {
    super();
    this.state = {
      pendingRestaurants: [],
      refresh: false,
      status:""
    };
  }
  async componentWillMount() {
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
      //console.log(restaurant);
      if (restaurant.status === "pending") {
        // console.log(restaurant.name);
        this.state.pendingRestaurants.push(restaurant);
      }
    });

    this.setState({ pendingRestaurants: this.state.pendingRestaurants });
    console.log(this.state.pendingRestaurants);
  }
  acceptRestaurant = (resId) => {
this.state.status="accepted"
this.setState({status:this.state.status})
const fd = new FormData();
fd.append("status", this.state.status);
axios
  .put("http://127.0.0.1:8000/restaurants/"+resId, fd)
  .then((res) => {
    console.log(res);
  });
 window.location.href = "/JoinRequests";


  };
  deleteRestaurant = (resId) => {
    console.log(resId);
    if (window.confirm("Are you sure?")) {
      fetch("http://127.0.0.1:8000/restaurants/" + resId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }); //end fetch

 window.location.href = "/JoinRequests";
    }//end if
    this.state.refresh = true;
    this.setState({ pendingRestaurants: this.state.pendingRestaurants });
  
  };

  render() {
    return (
      <div class="container">
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
          Join Requests
        </h1>

        {this.state.pendingRestaurants.length > 0 ? (
          this.state.pendingRestaurants.map((restaurant) => {
            return (
              <div className="card w-100" style={{ fontSize: "20px" }}>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="row">
                      <div className="col-5">
                        <img
                          src={`http://localhost:8000/${restaurant.img}`}
                          style={{ width: "120px", height: "120px" }}
                        ></img>

                        <b style={{ paddingTop: "50px" }}>
                          {" "}
                          {restaurant.name}{" "}
                        </b>
                      </div>

                      <div className="col-2" style={{ paddingTop: "45px" }}>
                        <div>
                          <button
                            type="button"
                            class="btn "
                            data-toggle="modal"
                            data-target={`#${restaurant._id}`}
                          >
                            <span style={{ fontSize: "19px" }}>
                              <FcInfo />
                              Details
                            </span>
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
                      </div>

                      <div className="col-3" style={{ paddingTop: "46px" }}>
                        <button
                          class="btn btn-danger"
                          //lessa h3ml implement lel function de
                          onClick={() => this.deleteRestaurant(restaurant._id)}
                          style={{
                            borderRadius: "100px",
                            float: "right",
                            paddingLeft: "35px",
                            paddingRight: "35px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                          }}
                        >
                          Delete
                        </button>
                        <div style={{ marginLeft: "10px" }}>
                          <button
                            class="btn btn-success"
                            onClick={() =>
                              this.acceptRestaurant(restaurant._id)
                            }
                            //lessa h3ml implement lel function de
                            style={{
                              backgroundcolor: "blue",
                              borderRadius: "100px",
                              float: "right",
                              paddingLeft: "35px",
                              paddingRight: "35px",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                          >
                            Accept
                          </button>
                        </div>
                        {/* <a
                          href={`/offer/${this.props.resId}/edit/${singleOffer._id}`}
                        >
                          <AiOutlineEdit />
                        </a> */}

                        <button
                          type="button"
                          class="btn"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          {/* <AiOutlineEdit /> */}
                        </button>
                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  {/* edit {singleOffer.name} */}
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
                                {/* <EditOffer
                                  resId={this.props.resId}
                                  offerId={singleOffer._id}
                                /> */}
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1
            style={{ marginTop: "50px", color: "grey", marginBottom: "100px" }}
          >
            There's not any requests yet
          </h1>
        )}
      </div>
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

export default JoinRequests
