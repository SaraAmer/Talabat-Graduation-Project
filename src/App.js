import React, {useState} from 'react';
import "./App.css";
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import AllRestaurants from './components/AllRestaurants'
import PaginationMenu from '../src/components/restaurants/pagination';
function App(){


  return (
    <div className="App">
     <Header/>
   <AllRestaurants/>
	 <Footer/>
    </div>
  );
  }


export default App;

