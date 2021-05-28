import React from 'react';
import "./App.css";
import Header from './components/layouts/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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