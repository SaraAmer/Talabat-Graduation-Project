import React from "react";

function Restaurant(props) {
  return (
      <div className="restaurant col-lg-2 col-md-3 col-sm-5">
      <div className="img-container">
      <img src={props.logo} />

      </div>
        <hr />
        <div className="details">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        </div>
       
      </div>
  );
}

export default Restaurant;
