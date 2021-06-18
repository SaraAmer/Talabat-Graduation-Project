import React from 'react'
import { FcInfo } from "react-icons/fc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaBan } from "react-icons/fa";
import './Offers.css'
import { GrAdd } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";



class Offers extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [
        {
          id: "1",
          name: "Reef Demeshqy",
          img: "https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/52596226_325651728083488_3388384662857449472_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=qkcTMReM4CoAX-LxDPZ&_nc_ht=scontent.fcai21-4.fna&oh=84e0afb50c9b8d09efb48e59cd3192a3&oe=60D1E699",
          offers: [
            {
              name: "Pick 'N Go 2 persons offer",
              includedItems: [
                {
                  name: "pick n go combolarge",
                  price: "80 L.E",
                  quantity: "1",
                  img: "https://scontent.fcai21-3.fna.fbcdn.net/v/t1.6435-9/191389650_3951087934944693_4353788920767682985_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=UFrgMCCB4LkAX8_4lJ1&_nc_ht=scontent.fcai21-3.fna&oh=45a1b5c7cc61e67549371542b54d9b89&oe=60D2A0F3",
                },
              ],
              offerPrice: "100",
            },
          ],
        },
        {
          id: "2",
          name: "Mcdonalds",
          img: "https://scontent.fcai21-3.fna.fbcdn.net/v/t1.6435-9/191389650_3951087934944693_4353788920767682985_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=UFrgMCCB4LkAX8_4lJ1&_nc_ht=scontent.fcai21-3.fna&oh=45a1b5c7cc61e67549371542b54d9b89&oe=60D2A0F3",
          offers: [
            {
              name: "Pick 'N Go 2 persons offer",
              includedItems: [
                {
                  name: "pick n go combolarge",
                  price: "80 L.E",
                  quantity: "1",
                  img: "data:image/webp;base64,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3tkkVyZ3XpHs6oHQp9cKZACuehm1Vz9klgJQTXs+eWZm1xCsT2wXtPZWqG9UONzr+zU8EmQuUxQR4OwzJR9cbSnrKEkKOXsMP2zfk8+sHfQxd0VhVOD+vgeSGdJRjZO8byIKe+WViSApxikJwP1oJyGXYiKUDjX7TsiKHlvdEFhKdakTO54j8jaCsWtNPV4HpAB6Z7JXNNbhsurQNfZZH14MD9Qm8+tyEWLb3JOmQ9++c8kA28guCgCatlFHMdqQ1lSsQudFoRii1jgW+SAXLWjUGkywyNFQ9yZtxEELboY2TX0Rn82Al+gQdE0GUZJhvuLsy75B3d6eS5dtp7o/ExaXc5BDgEBJMItATo1pwgAR7BsAK5mjEpxV1k91V6NjiY7sEbAW0b3+ReLtsTPOJ5bDD4ljs6X3QCrV2pOwV+ngrB5v7tNRuDwxo0TECYCLkqs3/RBx2h3D39ACFMxWrtLE782KlIUG3ELdsyB0I/UcAOuOwwAAAEVYSUaiAAAARXhpZgAASUkqAAgAAAAFABIBAwABAAAAAQAAABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAAGmHBAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAAABQAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAKwAAAADoAQAAQAAAKwAAAAAAAAAWE1QIBADAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjNGMTRBODQzMkYxMUU5OUJDMUUyQTgwQUEzOEJCNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjNGMTRBOTQzMkYxMUU5OUJDMUUyQTgwQUEzOEJCNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2M0YxNEE2NDMyRjExRTk5QkMxRTJBODBBQTM4QkI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2M0YxNEE3NDMyRjExRTk5QkMxRTJBODBBQTM4QkI0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+",
                },
              ],
              offerPrice: "150",
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
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
                      display:"flex",
                      flexDirection:"coloumn" ,
                      justifyContent:"center",

                    }}
                  >
                    <img
                      className="card-img-top"
                      src={restaurant.img}
                      style={{ paddingLeft: "0px", paddingRight: "0px",width:"235px" ,height:"200px"}}
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
                              data-target={`#${restaurant.id}`}
                            >
                              <FcInfo />
                              Offers
                            </button>

                            {/* <div class="modal fade "  id={restaurant.id} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg"> */}

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
                                    <ViewOffers
                                      resOffers={restaurant.offers}
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
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <a href="/newoffer" className="card-link">
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
    );
  }
}

class ViewOffers extends React.Component {
  render() {
    return (
      <div>
        {this.props.resOffers.length > 0
          ? this.props.resOffers.map((singleOffer) => {
              return (
                <div>
                  <h1
                    style={{
                      color: "rgb(33, 33, 33)",
                      backgroundColor: "rgb(246, 246, 246)",
                      marginBottom: "10px",
                      paddingInline: "20px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <div className="row">
                      <div className="col-7">
                        {" "}
                        <b> {singleOffer.name} </b>{" "}
                      </div>

                      <div className="col-4">
                        {" "}
                        <b> price : </b> {singleOffer.offerPrice} L.E
                      </div>
                    </div>
                  </h1>
                  {singleOffer.includedItems.length > 0
                    ? singleOffer.includedItems.map((item) => {
                        return (
                          <div>
                            <div className="card" style={{ width: "450px" }}>
                              <div className="card-body">
                                <div
                                  className="list-group list-group-flush"
                                  style={{
                                    display: "flex",
                                  }}
                                >
                                  <div style={{ marginLeft: "0px" }}>
                                    <img
                                      src={item.img}
                                      style={{ width: "100px", height: "100px" }}
                                    />
                                    <b> [{item.quantity}] </b>
                                    {item.name}
                                    <div style={{ marginLeft: "10px" }}>
                                      {" "}
                                      <b> {item.price} </b>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : "No offer items"}
                </div>
              );
            })
          : "Empty"}
      </div>
    );
  }
}
export default Offers
