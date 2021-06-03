import React from 'react'
import Accountinfo from './Account info';
import Savedaddr from "./Savedaddr";
import Myorders from './Myorders';
import Savedcards from "./Savedcards";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

class Talabatpay extends React.Component {
    state = {
    bcolor:'white',
    text: 'talabat Pay statement history',
    content:this.renderContent1()
  }
   onClickButton1 = () => {
    this.setState({
      bcolor:this.state.black ? "white" : "#FF5900",
      text: 'talabat Pay statement history',
      content:this.renderContent1(),
    
    });
  }

  onClickButton2 = () => {
    this.setState({
      bcolor:this.state.black ? "#FF5900" : "white",
      text: 'Redeem voucher code below:',
      content:this.renderContent2()
    });
  }
   renderContent1(){
  
    return (
   <div class="card m-3">
        <div class="card-body bg-light text-center me-4">
            <p className="text-muted"> Transactions made using talabat Pay will appear here</p>
         </div>
    </div>
    ) 
  }
   renderContent2(){
    return (
        <form>
            <div  className="row">
            
                        <label class="col-sm-5 col-form-label">Please enter your voucher code here:</label>
                        <div class=" form-group col-md-5">
                        <input class="form-control" type="text" placeholder="Voucher code"/>
                        </div>
                
            </div>
            <div className=" d-flex justify-content-end">
            <button type="submit" class="btn btn-success m-2">REDEEM VOUCHER</button>
       	</div>
        </form>
       
           
        
 
    ) 
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
									<li className="list-group-item"><Link to="/my-account/orders"><p style={{color:"black"}}>My Orders </p>
										</Link>
									</li>
									<li className="list-group-item"><Link to="/my-account/cards"><p style={{color:"black"}}>Saved Cards</p>
										</Link>
									</li>
									<li className="list-group-item"><Link ><p style={{color:"#FF5900"}}>talabat Pay </p>
										</Link>
									</li>
									
								</ul>
							</div>
						</div>
						
						<div className="col-md-9">
						    <div className="card-body ">
                                <div className="h2">Available Balance <span style={{color:"green"}}>EGP 0.00</span>
                                </div>
                               
                                <nav class="navbar navbar-light m-4 ">
                                   
                                    <form class="form-inline btn-group"  role="group">
                                        <button class="btn btn-lg  border "style={{backgroundColor:this.state.bcolor}} type="button" onClick={this.onClickButton1}>View Statement</button>
                                        <button class="btn  btn-lg  border" type="button"  style={{backgroundColor:this.state.bcolor}}onClick={this.onClickButton2}>Redeem Credit code</button>
                                    </form>
                                      	
                                </nav>
                                 
                                <h4>{this.state.text}  </h4>
                                <div>{this.state.content}</div>
                               
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
                 <Route path="/my-account/cards" exact component={Savedcards}>
				</Route>
            </Switch>    
        </Router>


        );
    }
}
export default Talabatpay;