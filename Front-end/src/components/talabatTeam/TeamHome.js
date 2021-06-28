import React from "react";
import Footer from "../layouts/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Routes from './Routes.js'

class TeamHome extends React.Component {
  render() {
    return (
      <div>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default TeamHome;
