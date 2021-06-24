// // import "./login.css";
// import "./partnerRegister.css";
// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import PartnerLogin from "../partnerLogin/PartnerLogin";
// import PartnerRegisterRest from "./PartnerRegisterRest";
// import PartnerRegisterFirst from "./partnerRegisterFirst";
// import PartnerRegisterfooter from "./partnerRegisterfooter";
// import Success from "./success";
// import { Step, Steps } from "react-step-builder";
// import Partnerheader from "./partnerheader";
// class PartnerRegister extends React.Component {
//   render() {
//     const Navigation = (props) => {
//       return (
//         <div>
//           {/* <button onClick={props.prev}>Previous</button> */}
//           {/* <button onClick={props.next}>Next</button> */}
//           <button
//             // type="submit"
//             className="btn btn-lg btn-block form-control"
//             style={{
//               textAlign: "center",
//               backgroundColor: "#FF5900",
//               color: "white",
//               marginLeft: "30px",
//               borderRadius: "15px",
//               width: "150px",
//             }}
//             onClick={props.next}
//           >
//             Next
//           </button>
//         </div>
//       );
//     };
//     const config = {
//       navigation: {
//         component: Navigation, // a React component with special props provided automatically
//         location: "after", // or after
//       },
//     };
//     return (
//       <Router>
//         <div id="move">
//           {/* **************Form************* */}
//           <div>
//             {/* *********Hold header******* */}

//             {/* *********************** */}
//             <div>
//               {/* ***********Button********** */}
//               <button
//                 // onClick={(event) => (window.location.href = "partnerlogin")}
//                 className="btn btn-lg btn-block"
//                 id="myButton"
//                 style={{
//                   textAlign: "center",
//                   borderColor: "#FF5900",
//                   borderStyle: "solid",
//                   color: "white",
//                   marginLeft: "100px",
//                   marginTop: "10px",
//                   marginRight: "10px",
//                   // borderRadius: "15px",
//                   width: "200px",
//                   float: "right",
//                   border: "5px solid #FF5900",
//                 }}
//               >
//                 {/* Login */}
//                 <a href="/partnerlogin">
//                   {" "}
//                   <p
//                     style={{
//                       color: "white",
//                     }}
//                   >
//                     Vendor Portal
//                   </p>
//                 </a>
//               </button>
//               {/* ******************* */}
//               <div
//                 style={{
//                   textAlign: "center",
//                   fontWeight: "bolder",
//                   float: "right",
//                   color: "white",
//                   marginTop: "10px",
//                 }}
//               >
//                 العربيه
//               </div>
//               {/* ************************** */}
//               <div
//                 style={{
//                   // marginTop: "200px",
//                   fontSize: "50px",
//                   color: "#FF5900",
//                   float: "left",
//                   marginLeft: "100px",
//                 }}
//               >
//                 talabt
//               </div>
//               {/* ********************* */}
//             </div>
//             {/* *********************** */}
//             <section id="counts" className="counts">
//               <div className="container">
//                 <div className="row">
//                   {/* **********Sizeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee************************* */}
//                   <div className="col-lg-4 col-md-12 ">
//                     {/* <div className="count-box"> */}
//                     <p style={{ color: "white" }} className="fs-3">
//                       Reach new customers, get more sales
//                     </p>
//                     <p style={{ color: "white" }}>
//                       Join Talabat, the Middle East's largest delivery platform.
//                     </p>
//                     {/* </div> */}
//                   </div>
//                   {/* ******************************* */}
//                   <div className="col-lg-1 col-md-12 col-sm-12"></div>
//                   {/* ******************************** */}
//                   <div className="col-lg-7 col-md-12 col-sm-12 ">
//                     {/* ******************************** */}
//                     <div className="count-box">
//                       <p
//                         style={{
//                           textAlign: "center",
//                           marginTop: "20px",
//                           color: "blue",
//                           fontSize: "40px",
//                         }}
//                       >
//                         Join Us Today!
//                       </p>
//                       <nav
//                         className="navbar navbar-expand-lg navbar-light"
//                         style={{ marginLeft: "150px" }}
//                       >
//                         <button
//                           className="navbar-toggler"
//                           type="button"
//                           data-toggle="collapse"
//                           data-target="#navbarTogglerDemo02"
//                           aria-controls="navbarTogglerDemo02"
//                           aria-expanded="false"
//                           aria-label="Toggle navigation"
//                         >
//                           {/* <span className="navbar-toggler-icon"></span> */}
//                         </button>

//                         <div
//                           // className="collapse navbar-collapse"
//                           id="navbarTogglerDemo02"
//                         >
//                           <ul className="navbar-nav  mt-2 mt-lg-0">
//                             <li
//                               className="nav-item active"
//                               style={{
//                                 borderBottom: "5px solid #FF5900",
//                                 marginRight: "5px",
//                               }}
//                             >
//                               <a className="nav-link" href="#">
//                                 Your details
//                               </a>
//                             </li>
//                             <li className="nav-item">
//                               <a className="nav-link" href="#">
//                                 Store details
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </nav>
//                       <Steps config={config}>
//                         <Step
//                           title="My First Step"
//                           component={PartnerRegisterFirst}
//                         />
//                         <Step
//                           title="My First Step"
//                           component={PartnerRegisterRest}
//                         />
//                         <Step title="My Second Step" component={Success} />
//                       </Steps>
//                       {/* ************************************************************ */}
//                       {/* ************************** */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//           {/* *********************************************************************************** */}
//           {/* ****************************************************** */}
//           {/* *********For test******* */}
//           <div>
//             <PartnerRegisterfooter />
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }
// export default PartnerRegister;

// // state={ backgroundcolor1:"#fff"; backgroundcolor2:"#444"}
// //onclickbutton1=()=>{ this.setState({bcolor1:this.state.bcolor1=="#fff"? "fff":"#000"})}
// //onclickbutton2=()=>{ this.setState({bcolor2:this.state.bcolor2=="#fff"? "fff":"#000"})}
//*************************************************** */
// import "./login.css";
import "./partnerRegister.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerLogin from "../partnerLogin/PartnerLogin";
import PartnerRegisterRest from "./PartnerRegisterRest";
import PartnerRegisterFirst from "./partnerRegisterFirst";
import PartnerRegisterfooter from "./partnerRegisterfooter";
import Success from "./success";
import { Step, Steps } from "react-step-builder";
import Partnerheader from "./partnerheader";
class PartnerRegister extends React.Component {
  render() {
    return (
      <Router>
        <div id="move">
          {/* **************Form************* */}
          <div>
            {/* *********Hold header******* */}

            {/* *********************** */}
            <div>
              {/* ***********Button********** */}
              <button
                // onClick={(event) => (window.location.href = "partnerlogin")}
                className="btn btn-lg btn-block"
                id="myButton"
                style={{
                  textAlign: "center",
                  borderColor: "#FF5900",
                  borderStyle: "solid",
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "10px",
                  marginRight: "10px",
                  // borderRadius: "15px",
                  width: "200px",
                  float: "right",
                  border: "5px solid #FF5900",
                }}
              >
                {/* Login */}
                <a href="/partnerlogin">
                  {" "}
                  <p
                    style={{
                      color: "white",
                    }}
                  >
                    Vendor Portal
                  </p>
                </a>
              </button>
              {/* ******************* */}
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bolder",
                  float: "right",
                  color: "white",
                  marginTop: "10px",
                }}
              >
                العربيه
              </div>
              {/* ************************** */}
              <div
                style={{
                  // marginTop: "200px",
                  fontSize: "50px",
                  color: "#FF5900",
                  float: "left",
                  marginLeft: "100px",
                }}
              >
                talabt
              </div>
              {/* ********************* */}
            </div>
            {/* *********************** */}
            <section id="counts" className="counts">
              <div className="container">
                <div className="row">
                  {/* **********Sizeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee************************* */}
                  <div className="col-lg-4 col-md-12 ">
                    {/* <div className="count-box"> */}
                    <p style={{ color: "white" }} className="fs-3">
                      Reach new customers, get more sales
                    </p>
                    <p style={{ color: "white" }}>
                      Join Talabat, the Middle East's largest delivery platform.
                    </p>
                    {/* </div> */}
                  </div>
                  {/* ******************************* */}
                  <div className="col-lg-1 col-md-12 col-sm-12"></div>
                  {/* ******************************** */}
                  <div className="col-lg-7 col-md-12 col-sm-12 ">
                    {/* ******************************** */}
                    <div className="count-box">
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "20px",
                          color: "blue",
                          fontSize: "40px",
                        }}
                      >
                        Join Us Today!
                      </p>
                      {/* <nav
                        className="navbar navbar-expand-lg navbar-light"
                        style={{ marginLeft: "150px" }}
                      >
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarTogglerDemo02"
                          aria-controls="navbarTogglerDemo02"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        > */}
                      {/* <span className="navbar-toggler-icon"></span> */}
                      {/* </button>

                        <div
                          // className="collapse navbar-collapse"
                          id="navbarTogglerDemo02"
                        >
                          <ul className="navbar-nav  mt-2 mt-lg-0">
                            <li
                              className="nav-item active"
                              style={{
                                borderBottom: "5px solid #FF5900",
                                marginRight: "5px",
                              }}
                            >
                              <a className="nav-link" href="#">
                                Your details
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Store details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </nav> */}
                      {/* *****Form****** */}
                      <PartnerRegisterFirst />

                      {/* ************************************************************ */}
                      {/* ************************** */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* *********************************************************************************** */}
          {/* ****************************************************** */}
          {/* *********For test******* */}
          <div>
            <PartnerRegisterfooter />
          </div>
        </div>
      </Router>
    );
  }
}
export default PartnerRegister;
