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
import OffersAndCoupons from "./components/OffersAndCoupons";
// import Header from "./layouts/Header";
// import ResetPassword from "./components/partnerLogin/ResetPassword";
// import NewPassword from "./components/partnerLogin/NewPassword";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <ResetPassword />
      <NewPassword /> */}
      {/* <RestaurantMenu /> */}
      {/* <Register /> */}
      <Home />
      <OffersAndCoupons />
      <Footer />
    </div>
  );
}

export default App;
