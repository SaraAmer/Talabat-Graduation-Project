import React, { useState } from 'react';
import {BsSearch}  from 'react-icons/bs' ;

function Search() {


    return(
        <div className="container">
     <div className="search-Box" >
        <input type="text" placeholder="Search Restaurants" />
        <BsSearch/>
    </div>
    </div>
    );
}

export default Search;