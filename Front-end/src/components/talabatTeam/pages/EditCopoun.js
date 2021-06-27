import React from 'react'
import axios from "axios";


class EditCopoun extends React.Component{
  constructor(){
      super();
     this.state = {
      copounCode: "",
      copounLimit: "",
      copounDesc: "",
      copounDiscount:"",
      copouns:[],
      restaurant:{}
    }
  }

  async componentDidMount() {
    console.log("component did mount");
    let res = await fetch(
      "http://127.0.0.1:8000/restaurants/copoun/singleCopoun/" + this.props.match.params.copounId,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    let resJson = await res.json();
    console.log(resJson.Offers);
     this.setState({ copouns: resJson.Copouns });
    // console.log(resJson);
    console.log(this.state.copouns);


     let response = await fetch(
      "http://127.0.0.1:8000/restaurants/" + this.props.match.params.resId,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    let responseJson = await response.json();
    console.log(responseJson.restaurant);
     this.setState({ restaurant: responseJson.restaurant });
    // console.log(resJson);
    console.log(this.state.restaurant);
  }

  editCopoun=()=>
  {
console.log( this.props.match.params.resId);
console.log( this.props.match.params.copounId); 

console.log(this.state.copounCode);
const fd = new FormData();
fd.append("code", this.state.copounCode);
fd.append("desc", this.state.copounDesc);
fd.append("price", this.state.copounDiscount);
fd.append("limit",  this.state.copounLimit);
axios
  .put(
    "http://127.0.0.1:8000/restaurants/copoun/singleCopoun/"+this.props.match.params.copounId,fd
  )
  .then((res) => {
    console.log(res);
  });
  this.state.flag=1;
  
  this.setState({copounCode:this.state.copounCode})
 window.location.href=`/copoun/${this.props.match.params.resId}/edit/${this.props.match.params.copounId}`;
}
  render(){
    return (
      <div class="container">
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
          Edit {this.state.restaurant.name} copoun
        </h1>
         {this.state.copouns.length > 0
          ? this.state.copouns.map((singleCopoun) => {
              return (
                <div>
                  <h1
                    style={{
                      color: "rgb(33, 33, 33)",
                      backgroundColor: "rgb(246, 246, 246)",
                      marginBottom: "10px",
                      paddingInline: "20px",
                      paddingBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <div className="row">
                      <div className="col-4">
                        <img
                          src="https://st3.depositphotos.com/2495409/12547/i/950/depositphotos_125471226-stock-photo-percentage-sign-concept-3d-illustration.jpg"
                          style={{ width: "120px", height: "120px" }}
                        ></img>
                      </div>
                      <div className="col-8">
                        Copoun Description:
                        <b> {singleCopoun.desc} </b> <br></br>
                        Discount:
                        <b> {singleCopoun.discount} L.E </b>
                        <br></br>
                        copoun Limit:
                        <b> {singleCopoun.limit} </b>
                        <br></br>
                        Code:
                        <b> {singleCopoun.code} </b>
                      </div>

                     
               
                 
                    </div>

                  </h1>
                </div>
              );
            })
          : "No offers yet"}
 
        <form>
            <div class="form-group" style={{ fontSize: "20px" }}>
              <label>Copoun Code</label>
              <input
                type="text"
                class="form-control"
                style={{ width: "300px" }}
         
                onChange={(e) => this.setState({ copounCode: e.target.value })}
              />
              <br></br>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  class="form-control"
                  style={{ width: "60px" }}
                  
                  onChange={(e) => this.setState({ copounDiscount: e.target.value })}
                />
                <div> L.E Off Selected Items</div>
              </div>
              <br></br>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  class="form-control"
                  style={{ width: "60px" }}
                  
                  onChange={(e) => this.setState({ copounLimit: e.target.value })}
                />
                <div> Limit for this copoun</div>
              </div>
              <br></br>
              description for copoun:
              <input
                type="text"
                class="form-control"
                style={{ width: "450px" }}
        
                onChange={(e) => this.setState({ copounDesc: e.target.value })}
              ></input>
            </div>

            <br></br>
          </form>
        <a
          href="/copoun"
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={this.editCopoun}
        >
          save changes
        </a>
      </div>
    );
  }

}

export default EditCopoun
