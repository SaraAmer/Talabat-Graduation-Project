import React from "react";
import Flag from "react-world-flags";
import LoginUSer from "./Login/login";
class Header extends React.Component {
  loginHandler = () => {
    localStorage.setItem("logedUser", "Raghda");
    console.log("raghda");
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid ">
            <label
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </label>
            <a className="navbar-brand text-white" href="/">
              <h1>talabat</h1>
            </a>

            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav d-xl-none">
                <li className="nav-item">
                  <a
                    className="nav-link text-white "
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn text-white  nav-link "
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white "
                    aria-current="page"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    All Restaurants
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Become a partner
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-white "
                    aria-current="page"
                    href="#"
                  >
                    offers
                  </a>
                </li>
              </ul>
            </div>
            <div className=" container float-right  d-none d-sm-block">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a
                    className="nav-link text-white "
                    aria-current="page"
                    href="#"
                  >
                    offers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Become a partner
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    All Restaurants
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    العربيه{" "}
                  </a>
                </li>
                <li className="nav-item ">
                  <div className="dropdown nav-link">
                    <a
                      className="btn  dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Flag code="egy" height="16" width="20" />
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="/egypt">
                          <Flag code="egy" height="16" width="20" />
                          Egypt
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/kuwait">
                          <Flag code="kwt" height="16" width="20" />
                          kuwait
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/uae">
                          <Flag code="ARE" height="16" width="20" />
                          UAE
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/Bahraine">
                          <Flag code="BHR" height="16" width="20" />
                          Bahraine
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/KSA">
                          <Flag code="SAU" height="16" width="20" />
                          KSA
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/Qatar">
                          <Flag code="QAT" height="16" width="20" />
                          Qatar
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/Oman">
                          <Flag code="OMN" height="16" width="20" />
                          Oman{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/jordan">
                          <Flag code="JOR" height="16" width="20" />
                          Jordan
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item">
                  <button
                    type="button"
                    className="btn text-white border-white nav-link "
                    onClick={this.loginHandler}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <LoginUSer />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
