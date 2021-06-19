import React, { Component, useState } from 'react';
import Map from './map2';
import {MdMyLocation} from 'react-icons/md'


function MyVerticallyCenteredModal(){
    return(
        <div style={{display:"inline-block"}}>
        <button type="button" data-toggle="modal" data-target="#exampleModal3"><MdMyLocation /></button> 
                                
                                    <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel3">Add New Address</h5>
                            <button type="button" className="close border-0" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body "style={{width:"400px",height:"400px"}}>
                              <Map/>
                        </div>
                        <div className="modal-footer">
                            
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal4"  data-dismiss="modal">Confirm 
                            </button>
                        </div>
                    </div>
                </div>
        </div>
</div>
    );
}

export default MyVerticallyCenteredModal;