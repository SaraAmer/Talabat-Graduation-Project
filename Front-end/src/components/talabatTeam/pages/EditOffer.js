import React from 'react'
import axios from "axios";


class EditOffer extends React.Component{
  constructor(){
      super();
     this.state = {
      offerName: "",
      offerPrice: "",
      offerDesc: "",
      offerImg:"",
      restaurantName: "",
      flag:"",
      offers:[],
      restaurant:{}
    }
  }

  async componentDidMount() {
    console.log("component did mount");
    let res = await fetch(
      "http://127.0.0.1:8000/restaurants/offer/singleOffer/" + this.props.match.params.offerId,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    let resJson = await res.json();
    console.log(resJson.Offers);
     this.setState({ offers: resJson.Offers });
    // console.log(resJson);
    console.log(this.state.offers);


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

  editOffer=()=>
  {
    console.log( this.props.match.params.resId);
console.log( this.props.match.params.offerId); 

console.log(this.state.offerName);
const fd = new FormData();
fd.append("name", this.state.offerName);
fd.append("desc", this.state.offerDesc);
fd.append("price", this.state.offerPrice);
fd.append("img", this.state.offerImg, this.state.offerImg.name);
axios
  .put(
    "http://127.0.0.1:8000/restaurants/offer/singleOffer/"+this.props.match.params.offerId,fd
  )
  .then((res) => {
    console.log(res);
  });
  this.state.flag=1;
  this.setState({offerName:this.state.offerName ,flag:this.state.flag})
  window.location.href=`/offer/${this.props.match.params.resId}/edit/${this.props.match.params.offerId}`;
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
          Edit {this.state.restaurant.name} offer
        </h1>
         {this.state.offers.length > 0
          ? this.state.offers.map((singleOffer) => {
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
                      <div className="col-6">
                        <img
                          src={`http://localhost:8000/${singleOffer.img}`}
                          style={{ width: "120px", height: "120px" }}
                        ></img>
                      
                     
                        <b> {singleOffer.name} </b>
                      </div>

                      <div className="col-6" style={{paddingTop:"50px",paddingLeft:"100px"}}>
                         <b> {singleOffer.price} L.E </b>
                      </div>

                     
                    </div>
                    <div class="row" style={{marginLeft:"170px"}}>
                      {singleOffer.desc}
                    </div>

                  </h1>
                </div>
              );
            })
          : "No offers yet"}
 
        <form>
          {this.state.flag == 1 ? <div style={{color:"white",backgroundColor:"grey"}} > changes saved!! </div> : ""}
          <div class="form-group">
            <label>Offer Name</label>
            <input
              type="text"
              class="form-control"
              style={{ width: "300px" }}
              value={this.state.offerName}
              onChange={(e) => this.setState({ offerName: e.target.value })}
            />
          </div>

          <div class="form-group">
            <label>Price</label>
            <input
              type="text"
              class="form-control"
              placeholder="i.e 10 L.E"
              style={{ width: "300px" }}
              value={this.state.offerPrice}
              onChange={(e) => this.setState({ offerPrice: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label>Offer description</label>
            <textArea
              type="text"
              class="form-control"
              value={this.state.offerDesc}
              onChange={(e) => this.setState({ offerDesc: e.target.value })}
            />
          </div>
          <input
            type="file"
            name="file"
            onChange={(e) => this.setState({ offerImg: e.target.files[0] })}
          ></input>
        </form><br></br>
        <a
          href="/offer"
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={this.editOffer}
        >
          save changes
        </a>
      </div>
    );
  }

}

export default EditOffer
