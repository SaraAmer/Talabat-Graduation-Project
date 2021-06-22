import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Restaurant(props) {

  function modal(){
    return(
      <div class="modal fade" id="cc" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    );
  }

  return (

 <div data-toggle="modal" data-target="#cc" className="restaurant col-lg-2 col-md-3 col-sm-5 ">
      <a  style={{display:"inline-block"}}>

      <div className="img-container">
      <img src={props.logo} />

      </div>
        <hr />
        <div className="details">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        </div>
       </a>

      </div>
    
    
  );
}

export default Restaurant;
