import React from 'react'
import GoogleMap from 'google-map-react';
import { ImOffice } from "react-icons/im";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
const mapStyles = {
    width: '100%',
    height: '100%'
}

const markerStyle = {
    height: '50px',
    width: '50px',
    marginTop: '-50px'
}

const imgStyle = {
    height: '100%'
}


const Marker = ({ title }) => ( <
    div style = { markerStyle } >
    <
    img style = { imgStyle }
    src = "https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
    alt = { title }
    /> <
    h3 > { title } < /h3> < /
    div >
);
class Address extends React.Component {
    render() {
        const { country, region } = this.state;
        return (




        );
    }
}
export default Address;