import React from "react";
import "./checkout.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Checkout extends React.Component {

    render() {
        return ( <
            Router >
            <
            div >
            <
            div className = "container "
            style = {
                { width: "1000px" } } >
            <
            div className = "card mb-3 border-2 "
            style = {
                { maxWidth: " 540px;" } } >
            <
            div className = "card m-3" >
            <
            div className = "card-header" >
            <
            div className = " row" >
            <
            label className = "col-lg-10 " > Order Summary < /label> <
            div className = "col-lg-2" >
            <
            div className = "text-success"
            style = {
                { fontSize: "12px" } } > MODIFIY ORDER <
            /div> <
            /div> <
            /div>

            <
            /div> <
            div className = "card-body" >
            <
            h5 className = "card-title" > Cook Door < /h5> <
            table class = "table table-borderless" >
            <
            thead class = "thead-light bg-light" >
            <
            tr class = "d-fex" >
            <
            th class = "col-4" > item(s) < /th> <
            th class = "col-3" > Special Request < /th> <
            th class = "col-1" > Qty < /th> <
            th class = "col-2" > Price < /th> <
            th class = "col-2" > Total < /th> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            td > Stuffed Chicken Cheddar Original, Stuffed Chicken Cheddar Original, Grilled Chicken Parmesan Sandwich, Grilled Chicken Parmesan Sandwich, Friskes Fries < /td> <
            td > < /td> <
            td > 1 < /td> <
            td > EGP < span > 235.00 < /span></td >
            <
            td > EGP < span > 235.00 < /span></td >
            <
            /tr> <
            /tbody> <
            /table>

            <
            /div> <
            /div> <
            /div> <
            div className = "card mb-3 border-2 "
            style = {
                { maxWidth: " 540px;" } } >
            <
            div className = "card m-3" >
            <
            div className = "card-header" >
            <
            div className = " row" >
            <
            label className = "col-lg-10 " > Delivery Address < /label> <
            div className = "col-lg-2" >

            <
            a type = "button"
            className = "btn"
            style = {
                { color: "green" } }
            data - toggle = "modal"
            data - target = "#exampleModal4" >
            EDIT <
            /a> <
            a type = "button"
            className = "btn"
            style = {
                { color: "green" } }
            data - toggle = "modal"
            data - target = "#exampleModal3" >
            ADD <
            /a> <
            /div> <
            /div>

            <
            /div> <
            div className = "card-body" >
            <
            div className = "row" >
            <
            div className = "col-md-4" >
            <
            p className = "text-muted" > Address Name < /p> <
            p className = "text-muted" > Address < /p> <
            p className = "text-muted" > Mobile Number < /p> <
            /div> <
            div className = "col-md-4" >
            <
            p > Building No.333e < /p> <
            p className = "text-muted" > Talaat Harb, 333, 222, 3 < /p> <
            p className = "text-muted" > +201056789 < /p> <
            /div>


            <
            /div>	 <
            /div> <
            /div> <
            /div>

            <
            div className = "card mb-3 border-2 "
            style = {
                { maxWidth: " 540px;" } } >
            <
            div className = "card m-3" >
            <
            div className = "card-header" >

            <
            div class = "panel-heading active"
            role = "tab"
            id = "headingOne" >
            <
            h4 class = "panel-title" >
            <
            a role = "button"
            data - toggle = "collapse"
            data - parent = "#accordion"
            href = "#collapseOne"
            aria - expanded = "true"
            aria - controls = "collapseOne" >
            Add special requests here. <
            /a> <
            /h4> <
            /div> <
            /div> <
            div className = "card-body" >
            <
            div id = "collapseOne"
            class = "panel-collapse collapse in"
            role = "tabpanel"
            aria - labelledby = "headingOne" >
            <
            div class = "panel-body" >
            hi there <
            /div>

            <
            /div>

            <
            /div> <
            /div> <
            /div> <
            div className = "card mb-3 border-2 "
            style = {
                { maxWidth: " 540px;" } } >
            <
            div className = "card m-3" >
            <
            div className = "card-header" >
            <
            div className = " row" >
            <
            label className = "col-11 " > Delivery Address < /label> <
            div className = "col-1" >
            <
            div className = "text-success"
            data - toggle = "modal"
            data - target = "#exampleModal3" > ADD <
            /div> <
            /div> <
            /div>

            <
            /div> <
            div className = "card-body" >
            <
            h5 className = "card-title" > Special title treatment < /h5> <
            p className = "card-text" > With supporting text below as a natural lead - in to additional content. < /p> <
            a href = "#"
            className = "btn btn-primary" > Go somewhere < /a> <
            /div> <
            /div> <
            /div> <
            /div>	 <
            /div> <
            Switch >
            <
            Route path = "" >
            <
            /Route>

            <
            /Switch> <
            /Router>
        );
    }
}
export default Checkout;