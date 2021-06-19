import React from 'react'
import Accountinfo from './Account info';
import Savedaddr from "./Savedaddr";
import Savedcards from "./Savedcards";
import Talabatpay from "./Talabatpay";
import { AiOutlineReload } from "react-icons/ai";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

class Myorders extends React.Component {
    render() {
		 
        return (
		<Router>
			<div className="container " style={{width:"1000px"}} >
				<div className="card mb-3  border-2 " style={{maxWidth:" 540px;"}}>
					<div className=" border-bottom "><h3 className="card-title p-4">My Account</h3>
					</div>
					
					<div className="row g-0">
						<div className="col-md-3 ">
							<div className="card border-bottom-0 " >
								<ul className="list-group list-group-flush" >
									<li className="list-group-item"><Link to="/my-account/summary" ><p style={{color:"black"}}>Account Info </p>
									</Link>
									</li>
									<li className="list-group-item"><Link to="/my-account/savedaddr"><p style={{color:"black"}}>Saved Addresses</p></Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"#FF5900"}}>My Orders </p>
										</Link>
									</li>
									<li className="list-group-item"><Link to="/my-account/cards"><p style={{color:"black"}}>Saved Cards</p>
										</Link>
									</li>
									<li className="list-group-item"><Link to="/my-account/tlbcredit"><p style={{color:"black"}}>talabat Pay </p>
										</Link>
									</li>
									
								</ul>
							</div>
						</div>
						
						
						<div className="col-md-9">
						    <div className="card-body ">
								<div class="card flex-row">
									<img src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg" class="card-img-top" style={{width:"20%"}}/>
									<div class="card-body">
										<h5 class="card-title">Bronx burger</h5>
										<p class="card-text text-muted">
									    18 februray 2021 17:33
										</p>
										<p class="card-text text-muted">
									  order id:29178300 <span className="text-danger">cancelled</span>
										</p>
										<div className=" d-flex justify-content-end">
										<a  class="btn border"> <AiOutlineReload/> recall</a></div>
									</div>
								</div>			
								<div className="text-center">
									<img  style={{height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9JiUJJfJ-AJ4YEChn4kmk68cPzdHqrM9QQ&usqp=CAU"></img>
									<p className="text-muted">there are no order to display</p>
									
								</div>
                            </div>
								
					    </div>
								
								
							
				    </div>
				</div>
				
	        </div>
			
			
			
			<Switch>
                <Route path="/my-account/summary" exact component={Accountinfo}>
				</Route>
            	 <Route path="/my-account/savedaddr" exact component={Savedaddr}>
				</Route>
				 <Route path="/my-account/cards" exact component={Savedcards}>
				</Route>
				 <Route path="/my-account/tlbcredit" exact component={Talabatpay}>
				</Route>
            </Switch>    
        </Router>


        );
    }
}
export default Myorders;