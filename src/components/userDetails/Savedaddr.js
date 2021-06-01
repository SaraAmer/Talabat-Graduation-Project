import React from 'react'
import Accountinfo from './Account info'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
class Savedaddr extends React.Component {
	 constructor() {
    super();
	this._handleClick = this._handleClick.bind(this);
    
  }
  

   _handleClick=()=> {
    
	   alert("female")
   
  }


    render() {
        return (
		<Router>
			<div className="container">
				<div className="card mb-3  border-2 " style={{maxWidth:" 540px;"}}>
					<div className=" border-bottom "><h3 className="card-title p-4">My Account</h3>
					</div>
					<div className="row g-0">
						<div className="col-md-3">
							<div className="card border-0 " style={{width: "18rem",borderBottom:"none",borderTop:"none"}}>
								<ul className="list-group list-group-flush" >
									<li className="list-group-item"><Link to="/my-account/summary" ><p style={{color:"black"}}>Account Info </p>
									</Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"#FF5900"}}>Saved Addresses</p></Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"black"}}>My Orders </p>
										</Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"black"}}>Saved Cards</p>
										</Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"black"}}>talabat Pay </p>
										</Link>
									</li>
									
								</ul>
							</div>
						</div>
						<div className="col-md-9 border">
							<div className="card-body ">
								
					
							</div>
						</div>
				    </div>
					</div>
	       </div>
			
			
			
			<Switch>
                 <Route path="/my-account/summary" exact component={Accountinfo}>
			</Route>
            </Switch>    
        </Router>


        );
    }
}
export default Savedaddr ;