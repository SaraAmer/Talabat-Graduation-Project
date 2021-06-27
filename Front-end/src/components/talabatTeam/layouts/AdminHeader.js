import React, { useState } from "react";
import Flag from "react-world-flags";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./AdminHeader.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrRestaurant } from "react-icons/gr";
import { IconContext } from "react-icons";
import { GoDashboard } from "react-icons/go";
import { MdLocalOffer } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offers from "../pages/Offers";
import { FaBan } from "react-icons/fa";
import { BiGitPullRequest } from "react-icons/bi";
import { Redirect } from "react-router-dom";


function AdminHeader() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const sidebarData = [
    {
      title: "Dashboard",
      path: "/restaurants",
      icon: <GoDashboard />,
      cName: "nav-text",
    },
    {
      title: "Offers",
      path: "/offers",
      icon: <MdLocalOffer />,
      cName: "nav-text",
    },
    {
      title: "Join Requests",
      path: "/JoinRequests",
      icon: <BiGitPullRequest />,
      cName: "nav-text",
    },
    {
      title: "Banned Restaurants",
      path: "/banned-restaurants",
      icon: <FaBan />,
      cName: "nav-text",
    },
    {
      title: "Banned Clients",
      path: "/banned-clients",
      icon: <FaBan />,
      cName: "nav-text",
    },
  ];
  function logout(){
    console.log("inside logout")
       localStorage.removeItem("email");
       window.location.href = "http://localhost:3000";
  }
  return (
    <div>
      <nav class="navbar navbar-expand-sm ">
        <Link to="#" className="menu-bars">
          <IconContext.Provider value={{ color: "#fff" }}>
            <FaIcons.FaBars onClick={showSidebar} />
          </IconContext.Provider>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ml-5 " style={{ marginLeft: "50px" }}>
              <a class="nav-link navbar-brand" href="/">
                <h1>talabat team</h1>
              </a>
            </li>
          </ul>
          <div style={{ display: "flex", marginLeft: "800px" }}>
            {/* <span class="navbar-text">
                <div className="nav-item dropdown col-lg-12 ">
                  <Link
                    className="text-white "
                    role="button"
                    id="dropdownMenuLink1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false "
                    style={{
                      borderRadius: "95px",
                      marginRight: "50px",
                    }}
                  >
                    <span
                      style={{
                        border: "none",
                        backgroundColor: "#060b26",
                        marginLeft: "100px",
                        fontSize: "40px",
                      }}
                    >
                      <IoIosNotificationsOutline />
                    </span>
                  </Link>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="dropdownMenuLink1"
                    style={{ position: "absolute", left: 0 }}
                  >
                    <li>
                      <Link to="#" className="dropdown-item">
                        <p>
                          <span style={{ fontSize: "25px" }}>
                            <GrRestaurant /> |
                          </span>
                          3B Burger restaurant wants to join talabat
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        <p>
                          <span style={{ fontSize: "25px" }}>
                            <GrRestaurant /> |
                          </span>
                          Mcdonalds restaurant wants to join talabat
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item">
                        <p>
                          <span style={{ fontSize: "25px" }}>
                            <GrRestaurant /> |
                          </span>
                          KFC restaurant wants to join talabat
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </span>
           */}

            <span class="navbar-text">
              <button
                type="button"
                className="btn-outline-light text-white  nav-Link "
                style={{
                  marginLeft: "180px",
                  background: "#0c1338",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  borderRadius: "10px",
                }}
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={logout}
              >
               Logout
              </button>
            </span>
          </div>
        </div>
      </nav>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default AdminHeader;
