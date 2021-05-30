import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
class Footer extends React.Component {
    render() {
        return ( <
            div class = "container" >
            <
            div class = "card mb-3"
            style = "max-width: 540px;" >
            <
            div class = "row g-0" >
            <
            div class = "col-md-4" >
            <
            img src = "https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt = "..."
            class = "img-fluid" /
            >
            <
            /div> <
            div class = "col-md-8" >
            <
            div class = "card-body" >
            <
            h5 class = "card-title" > Card title < /h5> <
            p class = "card-text" >
            This is a wider card with supporting text below as a natural lead - in to additional content.This content is a little bit longer. <
            /p> <
            p class = "card-text" >
            <
            small class = "text-muted" > Last updated 3 mins ago < /small> <
            /p> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>


        );
    }
}