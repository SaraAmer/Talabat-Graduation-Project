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
	constructor(props) {
     super(props);
	 this.state={
		 Orders: [],
		   
  }}
	  componentDidMount = async() => {
	   let res = await fetch(`http://127.0.0.1:8000/order/user/${localStorage["userId"]}`, {
          method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then(res => res.json())
                .then(result => {
                    console.log("Result");
                    // console.log(result);
					this.state.Orders.push(result.Orders)
                    this.setState({
                        Orders: this.state.Orders	
										
               });				
                });
		
			
	}
	handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
 }
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
									
									<li className="list-group-item"><Link to="/my-account/tlbcredit"><p style={{color:"black"}}>talabat Pay </p>
										</Link>
									</li>
									
								</ul>
							</div>
						</div>
						
						
						<div className="col-md-9">
						    <div className="card-body ">
							
								{this.state.Orders.length>0 ?
								(<div>
								
								{this.state.Orders.map((ord)=>{
								
										 console.log(ord[0]);
      										

									return(
								<div class="card flex-row">
								<div>
								  
									<img  src={`http://localhost:8000/${ord[0].img}`}class="card-img-top" style={{width:"20%"}}/>
								</div>
							
									<div class="card-body">
									  <h5 class="card-title">{ord[0].name}</h5>
										
										<p class="card-text text-muted"> 	
									 {ord[0].day}/{ord[0].month}/{ord[0].year}
										</p>
										<p class="card-text text-muted" >
									   Order id= {ord[0]._id}
									 
									   <span className="text-danger m-3">{ord[0].status}</span>
										</p>
										
									</div>
								</div>	
									);
									})}
								</div>)  : 		
									(<div className="text-center">
									<img  style={{height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9JiUJJfJ-AJ4YEChn4kmk68cPzdHqrM9QQ&usqp=CAU"></img>
									<p className="text-muted">there are no order to display</p>
									
								</div>
								)  }
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