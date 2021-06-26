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
      flag:""
    }
  }
  editOffer=()=>
  {
    console.log(this.props.resId);
console.log(this.props.offerId); 

console.log(this.state.offerName);
const fd = new FormData();
fd.append("name", this.state.offerName);
fd.append("desc", this.state.offerDesc);
fd.append("price", this.state.offerPrice);
fd.append("img", this.state.offerImg, this.state.offerImg.name);
axios
  .put(
    "http://127.0.0.1:8000/restaurants/offer/singleOffer/"+this.props.offerId,fd
  )
  .then((res) => {
    console.log(res);
  });
  this.state.flag=1;
  
  this.setState({offerName:this.state.offerName ,flag:this.state.flag})
}
  render(){
    return (
      <div class="container">
        <form>
          {this.state.flag == 1 ? <div style={{color:"white",backgroundColor:"grey"}} > changes saved!! </div> : ""}
          <div class="form-group">
            <label>Offer Name</label>
            <input
              type="text"
              class="form-control"
              style={{ width: "300px" }}
              value={this.state.offerName.name}
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
        </form>
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
