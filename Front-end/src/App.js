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
       </Switch>
     </Router>

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

  );
}

export default App;
