
import React from "react";
import { GrAdd } from "react-icons/gr";
import { TiMinus } from "react-icons/ti";
import  axios from 'axios';

class FoodForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      submittedFood: [],
      category: "",
      img:"", 
     selectedItems: [],
    };
  }

  addSelected = (item) => {
    var flag = 0;

    for (var i = 0; i < this.state.selectedItems.length; i++) {
      if (this.state.selectedItems[i].id === item.id) {
        flag = 1;
        this.state.selectedItems[i].quantity++;
        console.log("added to quantity of " + this.state.selectedItems[i].name);
      }
    }
    if (flag == 0) {
      console.log("pushed: " + item.name);
      this.state.selectedItems.push(item);
    }

    //to rerender page
    this.setState({ selectedItems: this.state.selectedItems });
    this.saveToLocalStorage();
  };
  saveToLocalStorage = () => {
    localStorage["selected-items-offer"] = JSON.stringify(
      this.state.selectedItems
    ); //to JSON
  };



  onOfferSubmit = () => {
    //this state.copoun.push(newCopoun)
    //el copoun da hytb3at lel database b3d kda
    //momkn adefhom lel localstorage law 3yza azhrhom fl copouns b7a2 w 72e2i
    this.state.submittedFood.push({
      restaurant_id: localStorage["restId"],
      name: this.state.name,
      price: this.state.price,
      img: this.state.img,
    });
    console.log(this.state.submittedFood[0].img);
    this.state.submittedFood.push(this.state.selectedItems);
    localStorage["submittedFood"] = JSON.stringify(
      this.state.submittedFood
    );
    localStorage.removeItem("selected-items-offer");
    this.addOfferToDB();
  };

  // async addOfferToDB() {
   
  //   let res = await fetch(
  //     "http://127.0.0.1:8000/restaurants/offer/",

  //     {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         //key and value from form
          // name: this.state.name,
          // desc: this.state.desc,
          // price: this.state.price,
          // restaurant: this.props.match.params.id,
          // img: this.state.offerImg,
  //       }),
  //     }
  //   );
  //   let resJson = await res.json();
 
  //   console.log(resJson);
  // }

  addOfferToDB=()=>{
const fd=new FormData();
fd.append("name", this.state.name);

fd.append("price", this.state.price);
fd.append("img", this.state.img, this.state.img.name);
fd.append("restaurant", localStorage["restId"]);
var options = { content: fd };

axios.post(`http://127.0.0.1:8000/restaurant/${localStorage["restId"]}/food`,fd)
.then(res=>{
  console.log(res);
})
.catch((err)=>{
    console.log(err);
})
;
  }


  render() {
    return (
      <div className="container ">
        <h1
          style={{
            color: "rgb(33, 33, 33)",
            backgroundColor: "rgb(246, 246, 246)",
            marginTop: "30px",
            marginBottom: "10px",
            paddingInline: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "26px",
            fontFamily: "sans-serif",
            paddingLeft: "50px",
          }}
        >
         Add new Food 
        </h1>
        {/* mfrod ykon gayli el restaurant id, name mn class offer  */}
        <hr></hr>
        <div>

      <br></br><br></br>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          

          <form>
            <div class="form-group">
              <label>Food Name</label>
              <input
                type="text"
                class="form-control"
                style={{ width: "300px" }}
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>

            <div class="form-group">
              <label>Price</label>
              <input
                type="text"
                class="form-control"
                placeholder="i.e 10 L.E"
                style={{ width: "300px" }}
                value={this.state.price}
                onChange={(e) => this.setState({ price: e.target.value })}
              />
            </div>
      
            <input
              type="file"
              name="file"
             
              onChange={(e) => this.setState({ img: e.target.files[0] })}
            ></input>
          </form>
          <br></br>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={this.onOfferSubmit}
          >
            Add Food
          </button>

          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Thank you
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">Food Submitted!!</div>
                <div class="modal-footer">
                  <a href="/offers" class="btn">
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default FoodForm;