import React, { useState } from 'react';

function Title(props){

    return(
        <div className="container">
    <div className="restaurants-title" >
        <h1>{props.name}</h1>
        </div>
        </div>
    
    );

}

export default Title;