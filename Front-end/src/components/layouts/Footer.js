// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Filter from "../filter/filter";

// class Footer extends React.Component {
//   render() {
//     return (
//       <Router>
//         <footer className="text-lg-start bg-dark text-muted ">
//           <div className="container">
//             <div className="row  d-flex justify-content-center  border-bottom pt-2 mb-3 d-none d-md-block ">
//               <div className=" nav  navbar-expand-md m-4 text-center">
//                 <ul className="navbar-nav ">
//                   <li className="nav-item">
//                     <Link className="me-4 nav-link text-reset">Feedback</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="me-4 nav-link text-reset">Career</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="me-4 nav-link text-reset">Terms</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="me-4 nav-link text-reset">FAQ</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="me-4  nav-link text-reset">Privacy</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="me-4 nav-link text-reset">
//                       Contatct us
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="me-4  nav-link text-reset">Sitemap</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <nav className="navbar navbar-dark bg-dark  d-md-none">
//               <label
//                 className="navbar-toggler border-0"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarToggleExternalContent"
//                 aria-controls="navbarToggleExternalContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span>
//                   <i
//                     className="bi bi-caret-down-fill"
//                     style={{ float: "right", marginLeft: "400px" }}
//                   ></i>
//                   Restaurants{" "}
//                 </span>
//               </label>
//             </nav>
//             <div className="collapse" id="navbarToggleExternalContent">
//               <div className="bg-dark p-4">
//                 <h5 className="text-white h4">Collapsed content</h5>
//                 <span className="text-muted">
//                   <p>
//                     <Link className="text-white">Most Selling</Link>
//                   </p>
//                   <p>
//                     <Link className="text-white">Taboon</Link>
//                   </p>
//                   <p>
//                     <Link className="text-white">Dawar Farah -Mohandissen</Link>
//                   </p>
//                   <p>
//                     <Link className="text-white">Indira</Link>
//                   </p>
//                   <p>
//                     <Link className="text-white">
//                       Al Assel El Demashky -Tagammoa 5
//                     </Link>
//                   </p>
//                   <p>
//                     <Link className="text-white">Lan Yuan -Maadi</Link>
//                   </p>
//                   <p>
//                     <Link className="text-reset">More Restaurants...</Link>
//                   </p>
//                 </span>
//               </div>
//             </div>

//             <nav className="navbar navbar-dark bg-dark d-md-none">
//               <label
//                 className="navbar-toggler border-0"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarToggleExternalContent2"
//                 aria-controls="navbarToggleExternalContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span>
//                   <i
//                     className="bi bi-caret-down-fill"
//                     style={{ float: "right", marginLeft: "340px" }}
//                   ></i>
//                   Popular Cuisines
//                 </span>
//               </label>
//             </nav>
//             <div className="collapse" id="navbarToggleExternalContent2">
//               <div className="bg-dark p-4">
//                 <h5 className="text-white h4">Collapsed content</h5>
//                 <span className="text-muted">
//                   <p>
//                     <Link className="text-white">Mexican</Link>
//                   </p>
//                   <p>
//                     <Link className="text-white">Sandwiches</Link>
//                   </p>
//                   <p>
//                     <Link className="text-white">Japanese</Link>
//                   </p>
//                   <p>
//                     <Link className="text-white">Pizza</Link>
//                   </p>
//                   <p>
//                     <Link className="text-reset">More Cuisines...</Link>
//                   </p>
//                 </span>
//               </div>
//             </div>
//             <nav className="navbar navbar-dark bg-dark d-md-none">
//               <label
//                 className="navbar-toggler border-0"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarToggleExternalContent1"
//                 aria-controls="navbarToggleExternalContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span>
//                   <i
//                     className="bi bi-caret-down-fill"
//                     style={{ float: "right", marginLeft: "363px" }}
//                   ></i>{" "}
//                   Popular Areas
//                 </span>
//               </label>
//             </nav>
//             <div className="collapse" id="navbarToggleExternalContent1">
//               <div className="bg-dark p-4">
//                 <h5 className="text-white h4">Collapsed content</h5>
//                 <span className="text-muted">
//                   <p>
//                     <a href="/filter" className="text-white">
//                       Masaken el Rehab
//                     </a>
//                   </p>
//                   <p>
//                     <a href="/filter" className="text-white">
//                       Mostashfa ALHommeyat
//                     </a>
//                   </p>
//                   <p>
//                     <a href="/filter" className="text-white">
//                       Salah ElDin Street
//                     </a>
//                   </p>
//                   <p>
//                     <a href="/filter" className="text-white">
//                       Salah Nessim Street
//                     </a>
//                   </p>
//                   <p>
//                     <a href="/filter" className="text-white">
//                       Shabab El Mosalas
//                     </a>
//                   </p>
//                   <p>
//                     <Link className="text-reset">More Areas...</Link>
//                   </p>
//                 </span>
//               </div>
//             </div>
//             <div className="border-top border-bottom d-md-none">
//               <Link className="me-4  text-reset">Feedback</Link>

//               <Link className="me-4  text-reset">Career</Link>

//               <Link className="me-4  text-reset">Terms</Link>

//               <Link className="me-4  text-reset">FAQ</Link>

//               <Link className="me-4   text-reset">Privacy</Link>

//               <Link className="me-4  text-reset">Contatct us</Link>

//               <Link className="me-4   text-reset">Sitemap</Link>
//             </div>

//             <section className="">
//               <div className="container text-center text-md-start mt-5">
//                 <div className="row mt-3">
//                   <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4  d-none d-md-block">
//                     <h6 className="text-uppercase fw-bold mb-4">Restaurants</h6>
//                     <p>
//                       <Link className="text-white">Most Selling</Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">Taboon</Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">
//                         Dawar Farah -Mohandissen
//                       </Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">Indira</Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">
//                         Al Assel El Demashky -Tagammoa 5
//                       </Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">Lan Yuan -Maadi</Link>
//                     </p>
//                     <p>
//                       <Link className="text-reset">More Restaurants...</Link>
//                     </p>
//                   </div>

//                   <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4  d-none d-md-block">
//                     <h6 className="text-uppercase fw-bold mb-4">
//                       Popular Cuisines
//                     </h6>
//                     <p>
//                       <Link className="text-white">Italian</Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">Mexican</Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">Sandwiches</Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">Japanese</Link>
//                     </p>
//                     <p>
//                       <Link className="text-white">Pizza</Link>
//                     </p>
//                     <p>
//                       <Link className="text-reset">More Cuisines...</Link>
//                     </p>
//                   </div>

//                   <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4  d-none d-md-block">
//                     <h6 className="text-uppercase fw-bold mb-4">
//                       Popular Areas
//                     </h6>
//                     <p>
//                       <a href="/filter" className="text-white">
//                         Masaken el Rehab
//                       </a>
//                     </p>
//                     <p>
//                       <a href="/filter" className="text-white">
//                         Mostashfa ALHommeyat
//                       </a>
//                     </p>
//                     <p>
//                       <a href="/filter" className="text-white">
//                         Salah ElDin Street
//                       </a>
//                     </p>
//                     <p>
//                       <a href="/filter" className="text-white">
//                         Salah Nessim Street
//                       </a>
//                     </p>
//                     <p>
//                       <a href="/filter" className="text-white">
//                         Shabab El Mosalas
//                       </a>
//                     </p>
//                     <p>
//                       <Link to="/filter" className="text-reset">
//                         More Areas...
//                       </Link>
//                     </p>
//                   </div>

//                   <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
//                     <h6 className="text-uppercase fw-bold mb-4">
//                       Follow us on
//                     </h6>

//                     <Link className="me-4 text-white ">
//                       <i className="bi bi-facebook"></i>
//                     </Link>
//                     <Link className="me-4 text-white">
//                       <i className="bi bi-twitter"></i>
//                     </Link>

//                     <Link className="me-4 text-white">
//                       <i className="bi bi-instagram"></i>
//                     </Link>
//                     <Link className="me-4 text-white">
//                       <i className="bi bi-linkedin"></i>
//                     </Link>
//                     <Link className="me-4 text-white ">
//                       <i className="bi bi-youtube"></i>
//                     </Link>

//                     <div className="border-bottom mt-4 d-none d-md-block"></div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <div className="border-top">
//               <label className="d-flex justify-content-center">
//                 For any support or help you can contact us viLink our Live Chat©
//                 2021 Talabat.coms
//               </label>
//             </div>
//           </div>
//           <div className="d-flex justify-content-end me-4 ">
//             <Link className=" d-none d-sm-block">
//               <button
//                 type="button"
//                 className="btn  text-white rounded-top"
//                 style={{ backgroundColor: "#FF5900", padding: "5px" }}
//               >
//                 <i className="bi bi-chat-fill me-4"></i>Contact us
//               </button>
//             </Link>
//           </div>
//         </footer>

//         <Switch>
//           {/* <Route path=""></Route> */}

//           {/* <Route path="/filter" exact component={Filter}></Route> */}
//         </Switch>
//       </Router>
//     );
//   }
// }
// export default Footer;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Filter from "../filter/filter";

class Footer extends React.Component {
  render() {
    return (
      <Router>
        <footer className="text-lg-start bg-dark text-muted ">
          <div className="container">
            <div className="row  d-flex justify-content-center  border-bottom pt-2 mb-3 d-none d-md-block ">
              <div className=" nav  navbar-expand-md m-4 text-center">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="me-4 nav-link text-reset">Feedback</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="me-4 nav-link text-reset">Career</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="me-4 nav-link text-reset">Terms</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="me-4 nav-link text-reset">FAQ</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="me-4  nav-link text-reset">Privacy</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="me-4 nav-link text-reset">
                      Contatct us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="me-4  nav-link text-reset">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
            <nav className="navbar navbar-dark bg-dark  d-md-none">
              <label
                className="navbar-toggler border-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <i
                    className="bi bi-caret-down-fill"
                    style={{ float: "right", marginLeft: "400px" }}
                  ></i>
                  Restaurants{" "}
                </span>
              </label>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">
                  <p>
                    <Link className="text-white">Most Selling</Link>
                  </p>
                  <p>
                    <Link className="text-white">Taboon</Link>
                  </p>
                  <p>
                    <Link className="text-white">Dawar Farah -Mohandissen</Link>
                  </p>
                  <p>
                    <Link className="text-white">Indira</Link>
                  </p>
                  <p>
                    <Link className="text-white">
                      Al Assel El Demashky -Tagammoa 5
                    </Link>
                  </p>
                  <p>
                    <Link className="text-white">Lan Yuan -Maadi</Link>
                  </p>
                  <p>
                    <Link className="text-reset">More Restaurants...</Link>
                  </p>
                </span>
              </div>
            </div>

            <nav className="navbar navbar-dark bg-dark d-md-none">
              <label
                className="navbar-toggler border-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent2"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <i
                    className="bi bi-caret-down-fill"
                    style={{ float: "right", marginLeft: "340px" }}
                  ></i>
                  Popular Cuisines
                </span>
              </label>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent2">
              <div className="bg-dark p-4">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">
                  <p>
                    <Link className="text-white">Mexican</Link>
                  </p>
                  <p>
                    <Link className="text-white">Sandwiches</Link>
                  </p>
                  <p>
                    <Link className="text-white">Japanese</Link>
                  </p>
                  <p>
                    <Link className="text-white">Pizza</Link>
                  </p>
                  <p>
                    <Link className="text-reset">More Cuisines...</Link>
                  </p>
                </span>
              </div>
            </div>
            <nav className="navbar navbar-dark bg-dark d-md-none">
              <label
                className="navbar-toggler border-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent1"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <i
                    className="bi bi-caret-down-fill"
                    style={{ float: "right", marginLeft: "363px" }}
                  ></i>{" "}
                  Popular Areas
                </span>
              </label>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent1">
              <div className="bg-dark p-4">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">
                  <p>
                    <a href="/filter" className="text-white">
                      Masaken el Rehab
                    </a>
                  </p>
                  <p>
                    <a href="/filter" className="text-white">
                      Mostashfa ALHommeyat
                    </a>
                  </p>
                  <p>
                    <a href="/filter" className="text-white">
                      Salah ElDin Street
                    </a>
                  </p>
                  <p>
                    <a href="/filter" className="text-white">
                      Salah Nessim Street
                    </a>
                  </p>
                  <p>
                    <a href="/filter" className="text-white">
                      Shabab El Mosalas
                    </a>
                  </p>
                  <p>
                    <Link className="text-reset">More Areas...</Link>
                  </p>
                </span>
              </div>
            </div>
            <div className="border-top border-bottom d-md-none">
              <Link className="me-4  text-reset">Feedback</Link>

              <Link className="me-4  text-reset">Career</Link>

              <Link className="me-4  text-reset">Terms</Link>

              <Link className="me-4  text-reset">FAQ</Link>

              <Link className="me-4   text-reset">Privacy</Link>

              <Link className="me-4  text-reset">Contatct us</Link>

              <Link className="me-4   text-reset">Sitemap</Link>
            </div>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4  d-none d-md-block">
                    <h6 className="text-uppercase fw-bold mb-4">Restaurants</h6>
                    <p>
                      <Link className="text-white">Most Selling</Link>
                    </p>
                    <p>
                      <Link className="text-white">Taboon</Link>
                    </p>
                    <p>
                      <Link className="text-white">
                        Dawar Farah -Mohandissen
                      </Link>
                    </p>
                    <p>
                      <Link className="text-white">Indira</Link>
                    </p>
                    <p>
                      <Link className="text-white">
                        Al Assel El Demashky -Tagammoa 5
                      </Link>
                    </p>
                    <p>
                      <Link className="text-white">Lan Yuan -Maadi</Link>
                    </p>
                    <p>
                      <Link className="text-reset">More Restaurants...</Link>
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4  d-none d-md-block">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Popular Cuisines
                    </h6>
                    <p>
                      <Link className="text-white">Italian</Link>
                    </p>
                    <p>
                      <Link className="text-white">Mexican</Link>
                    </p>
                    <p>
                      <Link className="text-white">Sandwiches</Link>
                    </p>
                    <p>
                      <Link className="text-white">Japanese</Link>
                    </p>
                    <p>
                      <Link className="text-white">Pizza</Link>
                    </p>
                    <p>
                      <Link className="text-reset">More Cuisines...</Link>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4  d-none d-md-block">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Popular Areas
                    </h6>
                    <p>
                      <a href="/filter" className="text-white">
                        Masaken el Rehab
                      </a>
                    </p>
                    <p>
                      <a href="/filter" className="text-white">
                        Mostashfa ALHommeyat
                      </a>
                    </p>
                    <p>
                      <a href="/filter" className="text-white">
                        Salah ElDin Street
                      </a>
                    </p>
                    <p>
                      <a href="/filter" className="text-white">
                        Salah Nessim Street
                      </a>
                    </p>
                    <p>
                      <a href="/filter" className="text-white">
                        Shabab El Mosalas
                      </a>
                    </p>
                    <p>
                      <Link to="/filter" className="text-reset">
                        More Areas...
                      </Link>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Follow us on
                    </h6>

                    <Link className="me-4 text-white ">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link className="me-4 text-white">
                      <i className="bi bi-twitter"></i>
                    </Link>

                    <Link className="me-4 text-white">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link className="me-4 text-white">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                    <Link className="me-4 text-white ">
                      <i className="bi bi-youtube"></i>
                    </Link>

                    <div className="border-bottom mt-4 d-none d-md-block"></div>
                  </div>
                </div>
              </div>
            </section>

            <div className="border-top">
              <label className="d-flex justify-content-center">
                For any support or help you can contact us viLink our Live Chat©
                2021 Talabat.coms
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-end me-4 ">
            <Link className=" d-none d-sm-block">
              <button
                type="button"
                className="btn  text-white rounded-top"
                style={{ backgroundColor: "#FF5900", padding: "5px" }}
              >
                <i className="bi bi-chat-fill me-4"></i>Contact us
              </button>
            </Link>
          </div>
        </footer>

        <Switch>
          {/* <Route path=""></Route> */}

          {/* <Route path="/filter" exact component={Filter}></Route> */}
        </Switch>
      </Router>
    );
  }
}
export default Footer;
