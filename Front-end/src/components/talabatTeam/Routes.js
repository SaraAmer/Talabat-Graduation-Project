import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardNavbar from "./pages/DashboardNavbar";
import Offers from "./pages/Offers";
import OffersNavbar from "./pages/OffersNavbar";
import Copouns from "./pages/Copouns";
import AdminHeader from "./layouts/AdminHeader";
import Restaurant from './pages/Restaurant.js'
import Overview from "./pages/Overview.js";
import Clients from "./pages/Clients.js";
import NewCopoun from  "./pages/NewCopoun.js"
import NewOffer from "./pages/NewOffer.js";
import EditOffer from "./pages/EditOffer.js";
import JoinRequests from "./pages/JoinRequests";
import BannedRestaurants from "./pages/BannedRestaurants";
import BannedClients from "./pages/BannedClients";

class Routes extends React.Component {
    render(){
    return (
      <div>
        <Router>
          <AdminHeader />
          <Switch>
            <Route path="/" exact component={DashboardNavbar} />
            <Route path="/offers" component={OffersNavbar} />
            <Route path="/offers" component={Offers} />
            <Route path="/copouns" component={OffersNavbar} />
            <Route path="/copouns" component={Copouns} />
            <Route path="/" exact component={Overview} />
            <Route path="/restaurants" exact component={DashboardNavbar} />
            <Route path="/restaurants" exact component={Restaurant} />
            <Route path="/clients" exact component={DashboardNavbar} />
            <Route path="/clients" exact component={Clients} />
            <Route path="/newoffer/:id" exact component={NewOffer} />
            <Route path="/new-copoun/:id" exact component={NewCopoun} />
            <Route
              path="/offer/:resId/edit/:offerId"
              exact
              component={EditOffer}
            />
            <Route path="/JoinRequests" exact component={JoinRequests} />
            <Route
              path="/banned-restaurants"
              exact
              component={BannedRestaurants}
            />
            <Route
              path="/banned-clients"
              exact
              component={BannedClients}
            />
          </Switch>
        </Router>
      </div>
    );
}
}
export default Routes
