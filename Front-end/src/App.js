import React, { useState } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
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
import RestaurantDetails from './components/restaurants-client/RestaurantDetails';
import LoginAdmin from "./components/talabatTeam/pages/loginAdmin";
function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact>
          <Header />
          {/* <LoginAdmin /> */}
          {/* <Filter /> */}
          {/* <RestaurantMenu/> */}
          {/* <Register/> */}
          {/* <TeamHome/> */}
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
      </Switch>
    </Router>
  );
}

export default App;
