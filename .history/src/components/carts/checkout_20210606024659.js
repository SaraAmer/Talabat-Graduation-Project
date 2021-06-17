import React from "react";
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
            tr >
            <
            th scope = "col" > item(s) < /th> <
            th scope = "col" > Special Request < /th> <
            th scope = "col" > Qty < /th> <
            th scope = "col" > Price < /th> <
            th scope = "col" > Total < /th> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            th scope = "row" > 1 < /th> <
            td > Mark < /td> <
            td > Otto < /td> <
            td > @mdo < /td> <
            /tr> <
            tr >
            <
            th scope = "row" > 2 < /th> <
            td > Jacob < /td> <
            td > Thornton < /td> <
            td > @fat < /td> <
            /tr> <
            tr >
            <
            th scope = "row" > 3 < /th> <
            td > Larry < /td> <
            td > the Bird < /td> <
            td > @twitter < /td> <
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
            label className = "col-lg-11 " > Delivery Address < /label> <
            div className = "col-lg-1" >
            <
            div className = "text-success"
            style = {
                { fontSize: "12px" } } > ADD <
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
            label className = "col-10 " > Add special requests here. < /label>



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
            div className = "text-success" > ADD <
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