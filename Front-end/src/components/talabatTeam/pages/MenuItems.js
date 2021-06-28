import React from "react";
import { GrAdd } from "react-icons/gr";

class MenuItems extends React.Component {
    constructor(){
        super();
        this.state={
            menuItems:[],
            retaurantName:"",
        }
    }


  //  http://127.0.0.1:8000/restaurant/60d60bcf76b7c03cfed9afed/food

  async componentWillMount() {
   
    let res = await fetch(`http://127.0.0.1:8000/restaurant/${this.props.match.params.resId}/food`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
   
    let resJson = await res.json();
    console.log(resJson);
    this.setState({
      menuItems: resJson.food,
    });
    //console.log(resJson);

    let response = await fetch(`http://127.0.0.1:8000/restaurants/${this.props.match.params.resId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
   
    let responseJson = await response.json();
    console.log(resJson);
    this.setState({
      restaurantName: responseJson.restaurant.name,
    });
    //console.log(resJson);
  }
    render(){
    return(<div class="container">
        <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>


<a href={`/newoffer/${this.props.match.params.resId}`} class="nav-link navbar-brand">

   <GrAdd/> Add new offer </a> 
<a href={`/newo-copoun/${this.props.match.params.resId}`} class="nav-link navbar-brand"> <GrAdd/> Add new copoun </a>

 <br></br>
 </div>
     <h1
          style={{
            color: "rgb(33, 33, 33)",
            backgroundColor: "rgb(246, 246, 246)",
            marginTop: "30px",
            marginBottom: "30px",
            paddingInline: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "28px",
            fontFamily: "sans-serif",
            paddingLeft: "50px",
          }}
        >
          Menu for {this.state.restaurantName}
        </h1>
     

 {this.state.menuItems.length > 0
            ? this.state.menuItems.map((item) => {
                return(
              <div className="card w-100">
        <div className="card-body">
          <div className="list-group list-group-flush">
         
              <div class="row" style={{fontSize:"30px" }}>
             <div class="col-4">
                <img src={`http://localhost:8000/${item.img}`} style={{width:"80px", height:"80px"}} />
          
                 
               {item.name}
                </div>
                <div class="col-4" style={{paddingTop:"25px"}}>
                    
                    {item.price} L.E
                    </div>
              
                        <div class="col-4" style={{paddingTop:"25px"}}>
                rate: {item.rate} 
                    </div>
                    
         
            </div>
            </div>
          
          </div>
        </div>
  
                );
              })
            : <h1>This Restaurant doesnt have a menu</h1>
            }













         
        </div>
    );

        }
}

export default MenuItems