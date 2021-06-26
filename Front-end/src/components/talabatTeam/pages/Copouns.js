import React from "react";
import { FcInfo } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaBan } from "react-icons/fa";
import "./Offers.css";
import { GrAdd } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { FcSearch } from "react-icons/fc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NewCopoun from "./NewCopoun";
import { AiOutlineEdit } from "react-icons/ai";
//import EditCopoun from "./EditCopoun.js";

class Copouns extends React.Component {
  constructor() {
    super();
    this.state = {
      currentRestaurantId: "",
     
      apiRestaurants: [],
      copouns: [],
    };
  }
  setCurrrentResId = (resID) => {
    console.log(resID);

    this.setState({
      currentRestaurantId: resID,
    });
    console.log(this.state.currentRestaurantId);
  };

  async componentWillMount() {
    this.setState({ loading: true });
    let res = await fetch(
      "http://127.0.0.1:8000/restaurants",

      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    let resJson = await res.json();
    this.setState({ loading: false, apiRestaurants: resJson.restaurants });
    console.log(resJson);
  
  }


  render() {
    return (
      <Router>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: " center",
              color: "rgb(33, 33, 33)",
              backgroundColor: "rgb(246, 246, 246)",
              marginTop: "5px",
              marginBottom: "15px",
              paddingInline: "20px",
              fontSize: "18px",
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
                  placeholder="Search for a restaurant"
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
            {this.state.apiRestaurants.length > 0
              ? this.state.apiRestaurants.map((restaurant) => {
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
                            <div className="text-center">
                              {/*                          
                            <button type="button" class="btn" data-toggle="modal" data-target={`#${restaurant.id}`}><FcInfo />
                              Copouns</button> */}
                              <button
                                type="button"
                                class="btn "
                                data-toggle="modal"
                                data-target={`#${restaurant._id}`}
                                // onClick={() => this.resCopounss(restaurant._id)}
                              >
                                <FcInfo />
                                Copouns
                              </button>

                              {/* <div class="modal fade "  id={restaurant.id} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg"> */}

                              <div
                                class="modal fade"
                                id={restaurant._id}
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLongTitle"
                                aria-hidden="true"
                              >
                                <div
                                  class="modal-dialog modal-xl"
                                  role="document"
                                  //style={{ zIndex: "70" }}
                                >
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5
                                        class="modal-title"
                                        id="exampleModalLongTitle"
                                      >
                                        {restaurant.name} Copouns
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
                                      <ViewCopouns resId={restaurant._id} />
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
                            <a
                              className="card-link"
                              onClick={() =>
                                this.setCurrrentResId(restaurant._id)
                              }
                              href={`/new-copoun/${this.state.currentRestaurantId}`}
                            >
                              <GrAdd />
                              Add new copoun
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })
              : "There's not any copouns yet"}
          </div>
        </div>
        <Switch>
          <Route
            path={`/new-copoun/${this.state.currentRestaurantId}`}
            component={NewCopoun}
          />
        </Switch>
      </Router>
    );
  }
}

class ViewCopouns extends React.Component {
  constructor() {
    super();
    this.state = {
      copouns: [],
      refresh:false
    };
  }

  async componentDidMount() {
    console.log("component did mount");
    let res = await fetch(
      "http://127.0.0.1:8000/restaurants/copoun/"+this.props.resId,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    let resJson = await res.json();
    this.setState({ copouns: resJson.Copouns });
    console.log(this.state.copouns);
  }
  removeSelected = (copounId) => {
    console.log(copounId);
    if (window.confirm("Are you sure?")) {
      fetch("http://127.0.0.1:8000/restaurants/copoun/singleCopoun/"+ copounId, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
    this.state.refresh = true;
    this.setState({ refresh: this.state.refresh });
  };
  render() {
    return (
      <div>
        {this.state.copouns.length > 0
          ? this.state.copouns.map((singleCopoun) => {
              return (
                <div>
                  <h1
                    style={{
                      color: "rgb(33, 33, 33)",
                      backgroundColor: "rgb(246, 246, 246)",
                      marginBottom: "10px",
                      paddingInline: "20px",
                      paddingBottom: "10px",
                      fontSize: "18px",
                      fontFamily: "sans-serif",
                      alignContent: "left  ",
                    }}
                  >
                    <div className="row">
                      <div className="col-4">
                        <img
                          src="https://st3.depositphotos.com/2495409/12547/i/950/depositphotos_125471226-stock-photo-percentage-sign-concept-3d-illustration.jpg"
                          style={{ width: "120px", height: "120px" }}
                        ></img>
                      </div>
                      <div className="col-6">
                        Copoun Description:
                        <b> {singleCopoun.desc} </b> <br></br>
                        Discount:
                        <b> {singleCopoun.discount} L.E </b>
                        <br></br>
                        copoun Limit:
                        <b> {singleCopoun.limit} </b>
                        <br></br>
                        Code:
                        <b> {singleCopoun.code} </b>
                      </div>

                      <div className="col-2">
                        <button
                          onClick={() => this.removeSelected(singleCopoun._id)}
                          //lessa h3ml implement lel function de
                          style={{
                            backgroundcolor: "blue",
                            borderRadius: "100px",
                            float: "right",
                          }}
                        >
                          <TiMinus />
                        </button>
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
                          <AiOutlineEdit />
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
                                  edit {singleCopoun.code}
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
                                {/* <EditCopoun
                                  resId={this.props.resId}
                                  copounId={singlecopoun._id}
                                /> */}
                                edit copoun
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
                  </h1>
                </div>
              );
            })
          : "No copouns yet"}
      </div>
    );
  }
}

export default Copouns;
