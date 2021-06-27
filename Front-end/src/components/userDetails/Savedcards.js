import React from 'react'
import Accountinfo from './Account info';
import Savedaddr from "./Savedaddr";
import Myorders from './Myorders';
import Talabatpay from "./Talabatpay";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

class Savedcards extends React.Component {
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
									<li className="list-group-item"><Link to="/my-account/orders "><p style={{color:"black"}}>My Orders </p>
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
								<div className="text-center">
									<img  style={{height:"200px"}} src="https://icons-for-free.com/iconfiles/png/512/credit+card+debit+card+master+card+icon-1320184902602310693.png"></img>
									<p className="text-muted">There are no saved credit card to Display</p>
									
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
                <Route path="/my-account/orders" exact component={Myorders}></Route>
                 <Route path="/my-account/tlbcredit" exact component={Talabatpay}>
				</Route>
            </Switch>    
        </Router>


        );
    }
}
export default Savedcards;