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
            <Route path="/copouns" component={Copouns} />
            <Route path="/" exact component={Overview} />
            <Route path="/restaurants" exact component={Restaurant} />
            <Route path="/clients" exact component={Clients} />
            <Route path="/newoffer/:id" exact component={NewOffer} />
            <Route path="/new-copoun/:id" exact component={NewCopoun} />
          </Switch>
        </Router>
      </div>
    );
}
}
export default Routes
