import React from 'react'
import { FcInfo } from "react-icons/fc";
import { Button } from 'react-bootstrap';
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaBan } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar.js";
import ClientDetails from "./ClientDetails.js";
import "./Clients.css";
import { FcSearch } from "react-icons/fc";
import axios from "axios";

class BannedClients extends React.Component {
  constructor() {
    super();
    this.state = {
      clients: [
        {
          id: "1",
          firstname: "Walaa",
          lastname: "Elbasha",
          img: "",
          email: "raghda@yahoo.com",
          savedAddresses: ["smouha", "abdelslam", "ibrahmya"],
          gender: "female",
          DOB: "5/6/1997",
        },
        {
          id: "2",
          firstname: "raghda",
          lastname: "Madiane",
          img: "",
          email: "raghda@yahoo.com",
          savedAddresses: ["smouha", "abdelslam", "ibrahmya"],
          gender: "female",
          DOB: "5/6/1997",
        },
        {
          id: "3",
          firstname: "Marina",
          lastname: "Madiane",
          img: "",
          email: "raghda@yahoo.com",
          savedAddresses: ["smouha", "abdelslam", "ibrahmya"],
          gender: "female",
          DOB: "5/6/1997",
        },
      ],
      
      loading:false,
      status:"", 
      bannedClients:[]
    };
  }
  deleteClient = (clientId) => {
    // var clientsArr = this.state.clients;
    console.log(clientId);

    for (var i = 0; i < this.state.clients.length; i++) {
      console.log("inside forloop");
      if (this.state.clients[i].id === clientId) {
        console.log("found ");
        console.log(this.state.clients[i]);
        this.state.clients.splice(i, 1);
      }
    }
    this.setState({ clients: this.state.clients });
      if (window.confirm("Are you sure?")) {
      fetch("http://127.0.0.1:8000/user/" + clientId, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      }
       window.location.href = "http://localhost:3000/banned-clients";
  };

  async componentWillMount() {
    this.setState({ loading: true });
    let res = await fetch("http://127.0.0.1:8000/user", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    // console.log(res.err);
    let resJson = await res.json();
    // let myRestaurants = resJson.restaurants;
    //  console.log(resJson.restaurants);
      resJson.users.map((user) => {
      //  console.log(user);
        if (user.status === "banned") {
          console.log(user.name);
          this.state.bannedClients.push(user);
        }
      });

    this.setState({
      loading: false,
      bannedClients: this.state.bannedClients,
    });
    //console.log(resJson);
  }
   unbanClient=(clientId)=>{
    console.log(clientId);
    this.state.status = "accepted";
    this.setState({ status: this.state.status });
    const fd = new FormData();
    console.log(this.state.status);
    fd.append("status", this.state.status);
    axios
      .put("http://127.0.0.1:8000/user/profile/"+clientId, {
        status: this.state.status,
      })
      .then((res) => {
        console.log(res);
      });

    this.setState({
      bannedClients: this.state.bannedClients,
    });
    console.log(this.state.status);
    window.location.href = "http://localhost:3000/banned-clients";
  }


  render() {
    return (
      <div className="container" style={{ fontSize: "28px" }}>
        {/* <DashboardNavbar /> */}
        {/* <a
          href="/clients"
          style={{ fontFamily: "sans-serif", paddingLeft: "50px" }}
        >
          <h1>Clients</h1>
        </a> */}
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
          Banned Clients
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
                placeholder="Search by client E-mail"
                aria-label="Search"
                aria-describedby="search-addon"
              />

              <span className="input-group-text border-0" id="search-addon">
                <FcSearch />
              </span>
            </div>
          </div>
        </div>
        <br></br>
        <table class="table table-striped">
          <thead>
            <tr>
              <th className="tableData" scope="col">
                #
              </th>
              <th className="tableData" scope="col">
                Client's Name
              </th>
              <th className="tableData" scope="col">
                Email
              </th>
              <th
                className="tableData"
                style={{ marginLeft: "100px" }}
                scope="col"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.bannedClients.length > 0 ? (
              this.state.bannedClients.map((singleClient) => {
                return (
                  <tr>
                    <th className="tableData" scope="row">
                      {singleClient.id}
                    </th>
                    <td className="tableData">
                      {singleClient.firstName} {singleClient.lastName}
                    </td>
                    <td className="tableData">{singleClient.email}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: " center",
                        }}
                      >
                        <button
                          type="button"
                          class="btn "
                          data-toggle="modal"
                          data-target={`#${singleClient._id}`}
                        >
                          <FcInfo />
                          More Details
                        </button>

                        {/* <div class="modal fade "  id={restaurant.id} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg"> */}

                        <div
                          class="modal fade"
                          id={singleClient._id}
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
                                  {singleClient.firstName}
                                  {singleClient.lastName} details
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
                                <ViewClientDetails client={singleClient} />
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

                        <div className="dropdown nav-Link ">
                          <Link
                            role="button"
                            id="dropdownMenuLink1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false "
                            style={{ paddingLeft: "50px" }}
                          >
                            <span style={{ fontSize: "30px ", color: "grey" }}>
                              {" "}
                              <i class="bi bi-three-dots-vertical"></i>{" "}
                            </span>
                          </Link>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink1"
                          >
                            <li>
                              <button
                                className="btn"
                                onClick={() =>
                                  this.unbanClient(singleClient._id)
                                }
                              >
                                <FaBan /> Unban Client
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn"
                                onClick={() =>
                                  this.deleteClient(singleClient._id)
                                }
                              >
                                <RiDeleteBin5Line /> Delete Client
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
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
                Loading Clients . . .
              </h1>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

class ViewClientDetails extends React.Component {
  client = this.props.client;
  render() {
    return (
      <div style={{ fontSize: "22px" }}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
          style={{ borderRadius: "20px", width: "120px", height: "140px" }}
        />
        <br></br>
        <b>Client name:</b>
        {this.client.firstName} {this.client.lastName} <br></br>
        <b>Email:</b> {this.client.email} <br></br>
        <b>Gender:</b> {this.client.gender} <br></br>
        <b>birth date:</b> {this.client.dateOfBirth} <br></br>
        {/* <b>Saved addresses:</b> */}
        {/* {this.client.savedAddresses.length > 0
          ? this.client.savedAddresses.map((savedAddr) => {
              return (
                <div>
                  - {savedAddr} <br></br>
                </div>
              );
            })
          : "Empty"} */}
      </div>
    );
            }
  }

export default BannedClients;
