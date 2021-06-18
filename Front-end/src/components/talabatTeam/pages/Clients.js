import React from 'react'
import { FcInfo } from "react-icons/fc";
import { Button } from 'react-bootstrap';
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaBan } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar.js";
import ClientDetails from "./ClientDetails.js";
import "./Clients.css"


class Clients extends React.Component {
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
    };
  }
  deleteClient = (clientId) => {
    // var clientsArr = this.state.clients;
    console.log(clientId)
    
    for (var i = 0; i < this.state.clients.length; i++) {
      console.log("inside forloop")
      if (this.state.clients[i].id === clientId) {
        console.log("found ")
        console.log(this.state.clients[i]);
        this.state.clients.splice(i, 1);
      }
    }

    this.setState({clients:this.state.clients})
  };

  render() {
    return (
      <div className="container">
        {/* <DashboardNavbar /> */}
        {/* <a
          href="/clients"
          style={{ fontFamily: "sans-serif", paddingLeft: "50px" }}
        >
          <h1>Clients</h1>
        </a> */}
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
                <i className="fas fa-search"></i>
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
            {this.state.clients.length > 0
              ? this.state.clients.map((singleClient) => {
                  return (
                    <tr>
                      <th className="tableData" scope="row">
                        {singleClient.id}
                      </th>
                      <td className="tableData">
                        {singleClient.firstname} {singleClient.lastname}
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
                            data-target={`#${singleClient.id}`}
                          >
                            <FcInfo />
                            More Details
                          </button>

                          {/* <div class="modal fade "  id={restaurant.id} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg"> */}

                          <div
                            class="modal fade"
                            id={singleClient.id}
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
                                    {singleClient.firstname}{" "}
                                    {singleClient.lastname} details
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
                              <span
                                style={{ fontSize: "30px ", color: "grey" }}
                              >
                                {" "}
                                <i class="bi bi-three-dots-vertical"></i>{" "}
                              </span>
                            </Link>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuLink1"
                            >
                              <li>
                                <button className="btn" >
                                  <FaBan /> Ban Client
                                </button>
                              </li>
                              <li>
                                <button
                                  className="btn"
                                  onClick={() =>
                                    this.deleteClient(singleClient.id)
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
              : "Empty"}
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
          src={this.client.img}
          style={{ borderRadius:"20px",width: "120px", height: "140px" }}
        />{" "}
        <br></br>
        <b>Client name:</b>
        {this.client.firstname} {this.client.lastname} <br></br>
        <b>Email:</b> {this.client.email} <br></br>
        <b>Gender:</b> {this.client.gender} <br></br>
        <b>birth date:</b> {this.client.DOB} <br></br>
        <b>Saved addresses:</b>
        {this.client.savedAddresses.length > 0
          ? this.client.savedAddresses.map((savedAddr) => {
              return <div>
              -  {savedAddr} <br></br>
              </div>;
            })
          : "Empty"}
      </div>
    );
            }
  }

export default Clients;
