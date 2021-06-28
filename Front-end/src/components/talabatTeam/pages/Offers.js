import React from 'react'
import { FcInfo } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaBan } from "react-icons/fa";
import './Offers.css'
import { GrAdd } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { FcSearch } from "react-icons/fc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NewOffer from "./NewOffer";
import { AiOutlineEdit } from "react-icons/ai";
import EditOffer from "./EditOffer.js";

class Offers extends React.Component {
  constructor() {
    super();
    this.state = {
      currentRestaurantId: "",
      restaurants: [
        {
          id: "1",
          name: "Reef Demeshqy",
          img: "https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/52596226_325651728083488_3388384662857449472_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=qkcTMReM4CoAX-LxDPZ&_nc_ht=scontent.fcai21-4.fna&oh=84e0afb50c9b8d09efb48e59cd3192a3&oe=60D1E699",
          offers: [
            {
              name: "Family offer",
              includedItems: [
                {
                  name: "fatta soory",
                  price: "25 L.E",
                  quantity: "1",
                  img: "data:image/jpeg;base64,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",
                },
                {
                  name: "shawerma frakh",
                  price: "70 L.E",
                  quantity: "1",
                  img: "https://arabian-guide.com/wp-content/uploads/2020/10/119149330_1998218590308147_7041921427591170495_o.jpg",
                },
              ],
              offerPrice: "150",
            },
            {
              name: "Reef Demeshqy 2 persons offer",
              includedItems: [
                {
                  name: "Reef Demeshqy combolarge",
                  price: "80 L.E",
                  quantity: "1",
                  img: "https://scontent.fcai21-3.fna.fbcdn.net/v/t1.6435-9/191389650_3951087934944693_4353788920767682985_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=UFrgMCCB4LkAX8_4lJ1&_nc_ht=scontent.fcai21-3.fna&oh=45a1b5c7cc61e67549371542b54d9b89&oe=60D2A0F3",
                },
              ],
              offerPrice: "130",
            },
          ],
        },
      ],

      apiRestaurants: [],
      offers: [],
      acceptedRestaurants:[],
      searchItem:""
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
      if (restaurant.status === "accepted") {
        console.log(restaurant.name);
        this.state.acceptedRestaurants.push(restaurant);
      }
    });

    this.setState({
      loading: false,
      acceptedRestaurants: this.state.acceptedRestaurants,
    });
    //console.log(resJson);
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
                  placeholder="Search by restaurant name"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={this.state.searchItem}
                   onChange={(e) => this.setState({ searchItem: e.target.value })}
                />
              <a href={`/search/${this.state.searchItem}`}> 
                <span className="input-group-text border-0" id="search-addon">
                  <FcSearch />
                </span>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            {this.state.acceptedRestaurants.length > 0
              ? this.state.acceptedRestaurants.map((restaurant) => {
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
                                // onClick={() => this.resOffers(restaurant._id)}
                              >
                                <FcInfo />
                                Offers
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
                                        {restaurant.name} Offers
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
                                      <ViewOffers resId={restaurant._id} />
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
                              href={`/newoffer/${this.state.currentRestaurantId}`}
                            >
                              <GrAdd />
                              Add new offer
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })
              : "There's not any Offers yet"}
          </div>
        </div>
        <Switch>
          <Route
            path={`/newoffer/${this.state.currentRestaurantId}`}
            component={NewOffer}
          />
        </Switch>
      </Router>
    );
  }
}

class ViewOffers extends React.Component {
  constructor() {
    super();
    this.state = {
      offers: [],
      refresh:true
    };
  }
  // componentWillMount() {
  //   fetch("http://127.0.0.1:4000/restaurants/" + this.props.resId)
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ offers: res.Offers }));
  // }
  async componentDidMount() {
    console.log("component did mount");
    let res = await fetch(
      "http://127.0.0.1:8000/restaurants/offer/" + this.props.resId,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    let resJson = await res.json();
    this.setState({ offers: resJson.Offers });
    // console.log(resJson);
    console.log(this.state.offers);
  }
  removeSelected=(offerId)=>{
    console.log(offerId);
     if (window.confirm('Are you sure?')){
     fetch("http://127.0.0.1:8000/restaurants/offer/singleOffer/"+offerId, {
       method: "DELETE",
       headers: {
        'Accept': "application/json",
         "Content-Type": "application/json",
       },
     });
      }
    this.state.refresh = true;
    this.setState({ refresh: this.state.refresh });
    }
  render() {
    return (
      <div>
        {this.state.offers.length > 0
          ? this.state.offers.map((singleOffer) => {
              return (
                <div>
                  <h1
                    style={{
                      color: "rgb(33, 33, 33)",
                      backgroundColor: "rgb(246, 246, 246)",
                      marginBottom: "10px",
                      paddingInline: "20px",
                      paddingBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={`http://localhost:8000/${singleOffer.img}`}
                          style={{ width: "120px", height: "120px" }}
                        ></img>
                      
                     
                        <b> {singleOffer.name} </b>
                      </div>

                      <div className="col-4" style={{paddingTop:"50px",paddingLeft:"100px"}}>
                         <b> {singleOffer.price} L.E </b>
                      </div>

                      <div className="col-2" style={{paddingTop:"50px"}}>
                        <button
                          onClick={() => this.removeSelected(singleOffer._id)}
                          //lessa h3ml implement lel function de
                          style={{
                            backgroundcolor: "blue",
                            borderRadius: "100px",
                            float: "right",
                          }}
                        >
                        <TiMinus />
                        </button>
                        <a style={{fontSize:"25px"}}
                          href={`/offer/${this.props.resId}/edit/${singleOffer._id}`}
                        >
                          <AiOutlineEdit />
                        </a> 

                        {/* <button
                          type="button"
                          class="btn"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          style={{marginBottom:"10px"}}
                        >
                         <span style={{fontSize:"25px"}}>  <AiOutlineEdit /> </span>
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
                                  edit {singleOffer.name}
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
                                <EditOffer
                                  resId={this.props.resId}
                                  offerId={singleOffer._id}
                                />
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                
                              </div> */}
                            {/* </div> */}
                          {/* </div> */}
                        {/* </div> */}
                      </div>

                    </div>
                    <div class="row" style={{marginLeft:"170px"}}>
                      {singleOffer.desc}
                    </div>

                  </h1>
                </div>
              );
            })
          : "No offers yet"}
      </div>
    );
  }
}




export default Offers
