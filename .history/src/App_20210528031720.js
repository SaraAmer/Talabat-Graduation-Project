import React from 'react';
import "./App.css";
import Header from './components/layouts/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Flag from 'react-world-flags'
class App extends React.Component {
    render() {
        return ( <
            div className = "App" >
            <
            Header / >
            <
            /div>
        );
    }
}

export default App;