import React, { useState } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Accountinfo from './components/userDetails/Account info';
import Savedaddr from "./components/userDetails/Savedaddr";
import Myorders from './components/userDetails/Myorders';
import Talabatpay from "./components/userDetails/Talabatpay";
import Checkout from "./components/carts/checkout"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import AllRestaurants from "./components/AllRestaurants";
import PaginationMenu from "../src/components/restaurants-client/pagination";
import TeamHome from "./components/talabatTeam/TeamHome";
import Home from "./components/Home";
import Register from "./components/Register";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PartnerRegister from "./components/Partner/partnerRegister";
import PartnerLogin from "./components/partnerLogin/PartnerLogin";
import Restaurant from "./components/Restaurants/Restaurant";
import ResetPassword from "./components/partnerLogin/ResetPassword";
import NewPassword from "./components/partnerLogin/NewPassword";
import Filter from "./components/filter/filter";
import RestaurantDetails from "./components/restaurants-client/RestaurantDetails";


import DashboardNavbar from "./components/talabatTeam/pages/DashboardNavbar";
import Offers from "./components/talabatTeam/pages/Offers";
import OffersNavbar from "./components/talabatTeam/pages/OffersNavbar";
import Copouns from "./components/talabatTeam/pages/Copouns";
import AdminHeader from "./components/talabatTeam/layouts/AdminHeader";
import Overview from "./components/talabatTeam/pages/Overview.js";
import Clients from "./components/talabatTeam/pages/Clients.js";
import NewCopoun from "./components/talabatTeam/pages/NewCopoun.js";
import NewOffer from "./components/talabatTeam/pages/NewOffer.js";
import EditOffer from "./components/talabatTeam/pages/EditOffer.js";
import JoinRequests from "./components/talabatTeam/pages/JoinRequests";
import BannedRestaurants from "./components/talabatTeam/pages/BannedRestaurants";
import BannedClients from "./components/talabatTeam/pages/BannedClients";
import LoginAdmin from "./components/talabatTeam/pages/loginAdmin";
import MenuItems from "./components/talabatTeam/pages/MenuItems";
import EditCopoun from "./components/talabatTeam/pages/EditCopoun.js";
import SearchFeature from "./components/talabatTeam/pages/SearchFeature.js";


class App extends React.Component {

  constructor(){
  super();
 const token = localStorage.getItem("email");
 console.log("tokeeeen:" + token);
 let loggedIn = true;

 if (token == null) {
   loggedIn = false;
 }
 this.state = {
   loggedIn,
 };
  }
  render(){
  return (
    <div>
      <Router className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            {/* <LoginAdmin /> */}
            {/* <Filter /> */}
            {/* <RestaurantMenu/> */}
            {/* <Register/> */}

            {/* <Home/> */}
            {/* <ResetPassword />
          <NewPassword /> */}
            <Footer />
          </Route>
          <Route path="/becomepartner" exact>
            <PartnerRegister />
          </Route>
          <Route path="/filter/:add" exact>
            <Filter />
          </Route>
          <Route path="/restaurant/:resId/food" exact>
            <RestaurantMenu />
          </Route>
          <Route exact path="/partnerlogin">
            <PartnerLogin />
          </Route>
          <Route exact path="/restaurant/dashboard">
            <Restaurant />
          </Route>
          <Route path="/restaurants/:restId" component={RestaurantDetails} />
          <Route exact path="/Register">
            <Header />
            <Register />
            <Footer />
          </Route>

          <Route exact path="/team">
            <TeamHome />
          </Route>
          <Route path="/my-account/orders" exact component={Myorders}>
            <Header />
            <Footer />
          </Route>
          <Route path="/my-account/summary" exact component={Accountinfo}>
            <Header />
            <Footer />
          </Route>
          <Route path="/my-account/savedaddr" exact component={Savedaddr}>
            <Header />
            <Footer />
          </Route>

          <Route path="/my-account/tlbcredit" exact component={Talabatpay}>
            <Header />
            <Footer />
          </Route>
          <Route path="/checkout" exact Component={Checkout}>
            <Header />
            <Footer />
          </Route>

          <Route exact path="/team">
            <TeamHome />
          </Route>

          <Route exact path="/newpassword">
            <NewPassword />
          </Route>

          <Route exact path="/resetpassword">
            <ResetPassword />
          </Route>
        </Switch>
      </Router>

      {this.state.loggedIn === false ? (
        <div>
          {" "}
          <LoginAdmin /> <Footer />{" "}
        </div>
      ) : (
        <Router>
          <AdminHeader />

          <Switch>
            {/* <Route path="/" exact component={DashboardNavbar} /> */}
            <Route path="/offers" component={OffersNavbar} />
            <Route path="/offers" component={Offers} />
            <Route path="/copouns" component={OffersNavbar} />
            <Route path="/copouns" component={Copouns} />
            {/* <Route path="/" exact component={Overview} /> */}
            <Route
              path="/talabat-team-restaurants"
              exact
              component={DashboardNavbar}
            />
            <Route
              path="/talabat-team-restaurants"
              exact
              component={Restaurant}
            />

            <Route path="/clients" exact component={DashboardNavbar} />
            <Route path="/clients" exact component={Clients} />

            <Route path="/newoffer/:id" exact component={NewOffer} />
            <Route path="/new-copoun/:id" exact component={NewCopoun} />
            <Route
              path="/offer/:resId/edit/:offerId"
              exact
              component={EditOffer}
            />
            <Route
              path="/copoun/:resId/edit/:copounId"
              exact
              component={EditCopoun}
            />
            <Route path="/JoinRequests" exact component={JoinRequests} />
            <Route
              path="/banned-restaurants"
              exact
              component={BannedRestaurants}
            />
            <Route path="/banned-clients" exact component={BannedClients} />
            <Route path="/menu/:resId" exact component={MenuItems} />
            <Route path="/menu/:resId" exact component={MenuItems} />

            <Route path="/search/:searchItem" exact component={SearchFeature} />
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}
}
export default App;