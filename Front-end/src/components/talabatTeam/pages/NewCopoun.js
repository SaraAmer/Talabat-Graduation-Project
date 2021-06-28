import React from "react";
import { GrAdd } from "react-icons/gr";
import { TiMinus } from "react-icons/ti";
import axios from "axios";

class NewCopoun extends React.Component {
  constructor() {
    super();
    this.state = {
      copounCode: "",
      copounDiscount: "",
      copounDesc: "",
      copounLimit: "",
      submittedCopouns: [],
      restaurantName: "",
  
      selectedItems: [],
      menuItems: [
        {
          id: "1",
          name: "Fatta soory",
          price: "80 L.E",
          quantity: 1,
          img: "data:image/jpeg;base64,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",
        },
        {
          id: "2",
          name: "Big Tasty Combo Large",
          price: "80 L.E",
          quantity: 1,
          img: "data:image/webp;base64,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3tkkVyZ3XpHs6oHQp9cKZACuehm1Vz9klgJQTXs+eWZm1xCsT2wXtPZWqG9UONzr+zU8EmQuUxQR4OwzJR9cbSnrKEkKOXsMP2zfk8+sHfQxd0VhVOD+vgeSGdJRjZO8byIKe+WViSApxikJwP1oJyGXYiKUDjX7TsiKHlvdEFhKdakTO54j8jaCsWtNPV4HpAB6Z7JXNNbhsurQNfZZH14MD9Qm8+tyEWLb3JOmQ9++c8kA28guCgCatlFHMdqQ1lSsQudFoRii1jgW+SAXLWjUGkywyNFQ9yZtxEELboY2TX0Rn82Al+gQdE0GUZJhvuLsy75B3d6eS5dtp7o/ExaXc5BDgEBJMItATo1pwgAR7BsAK5mjEpxV1k91V6NjiY7sEbAW0b3+ReLtsTPOJ5bDD4ljs6X3QCrV2pOwV+ngrB5v7tNRuDwxo0TECYCLkqs3/RBx2h3D39ACFMxWrtLE782KlIUG3ELdsyB0I/UcAOuOwwAAAEVYSUaiAAAARXhpZgAASUkqAAgAAAAFABIBAwABAAAAAQAAABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAAGmHBAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAAABQAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAKwAAAADoAQAAQAAAKwAAAAAAAAAWE1QIBADAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjNGMTRBODQzMkYxMUU5OUJDMUUyQTgwQUEzOEJCNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjNGMTRBOTQzMkYxMUU5OUJDMUUyQTgwQUEzOEJCNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2M0YxNEE2NDMyRjExRTk5QkMxRTJBODBBQTM4QkI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2M0YxNEE3NDMyRjExRTk5QkMxRTJBODBBQTM4QkI0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+",
        },
      ],
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
    localStorage["selected-items-copoun"] = JSON.stringify(
      this.state.selectedItems
    ); //to JSON
  };

  async componentWillMount() {
    let res = await fetch(
      "http://127.0.0.1:8000/restaurants/" + this.props.match.params.id,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    let resJson = await res.json();
    this.setState({ restaurantName: resJson.restaurant.name });
    console.log(resJson);
    if (localStorage["selected-items-copoun"]) {
      let selectedItems = JSON.parse(localStorage["selected-items-copoun"]); // from JSON to string
      this.setState({ selectedItems: selectedItems });
    }
  }

  removeSelected = (item) => {
    if (localStorage["selected-items-copoun"]) {
      let selected = JSON.parse(localStorage["selected-items-copoun"]);
      if (item.quantity > 1) {
        for (let i = 0; i < selected.length; i++) {
          if (selected[i].id === item.id) {
            console.log("quantity>1::::" + item.quantity);
            selected[i].quantity--;
            this.setState({ selectedItems: selected });
          }
        }
      } else {
        console.log("quantity=1");
        for (let i = 0; i < selected.length; i++) {
          if (selected[i].id === item.id) {
            selected.splice(i, 1);
            console.log("selected removed, now selectedarray is:" + selected);
            this.setState({ selectedItems: selected });
          }
        }
      }

      console.log(this.state.selectedItems);
      this.saveToLocalStorage();
    }
  };

  onCopounSubmit = () => {

    console.log("on copoun submit")
    this.state.submittedCopouns.push({
      restaurant_id: this.props.match.params.id,
      code: this.state.copounCode,
      discount: this.state.copounDiscount,
      limit: this.state.copounLimit,
      desc: this.state.copounDesc,
    });
    console.log(this.state.submittedCopouns[0].img);
    this.state.submittedCopouns.push(this.state.selectedItems);
    localStorage["submittedCopouns"] = JSON.stringify(
      this.state.submittedCopouns
    );
    localStorage.removeItem("selected-items-copoun");

    this.addCopounToDB();
    
  };

  async addCopounToDB() {

    let res = await fetch(
      "http://127.0.0.1:8000/restaurants/copoun/",

      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          code: this.state.copounCode,
          desc: this.state.copounDesc,
          discount: this.state.copounDiscount,
          restaurant: this.props.match.params.id,
          limit: this.state.copounLimit,
        }),
      }
    );
    let resJson = await res.json();

    console.log(resJson);
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
          Add New copoun to {this.state.restaurantName}
        </h1>
        {/* mfrod ykon gayli el restaurant id, name mn class copoun  */}
        <hr></hr>
        <div>
          <br></br>
          <br></br>
           <a href={`/menu/${this.props.match.params.id}`} class="btn btn-info text-white" style={{fontStize:"28px"}}>
          See restaurant Menu
      </a>
      <br></br>  <br></br>
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
          <br></br>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={this.onCopounSubmit}
          >
            Add Copoun
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
                <div class="modal-body">Copoun Submitted!!</div>
                <div class="modal-footer">
                  <a href="/copouns" class="btn">
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

class DisplayMenuItems extends React.Component {
  render() {
    return (
      <div className="card w-100">
        <div className="card-body" style={{ fontSize: "20px" }}>
          <div className="list-group list-group-flush">
            <div>
              <div className="row ">
                <div className="col-1">
                  <img
                    src={this.props.menuItem.img}
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="col-3">{this.props.menuItem.name}</div>
                <div div className="col-3">
                  {this.props.menuItem.price}
                </div>

                <div div className="col-5">
                  <b> [ {this.props.menuItem.quantity} ] </b>
                  <button
                    onClick={() => this.props.addSelected(this.props.menuItem)}
                    style={{
                      backgroundcolor: "blue",
                      borderRadius: "100px",
                    }}
                  >
                    <GrAdd />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class DisplaySelected extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: "450px" }}>
        <div className="card-body">
          <div
            className="list-group list-group-flush"
            style={{
              display: "flex",
            }}
          >
            <div>
              <span>
                <img
                  src={this.props.selected.img}
                  style={{ width: "40px", height: "40px" }}
                />
              </span>
              <span>
                {this.props.selected.name}
                {this.props.selected.price}
                <b>[{this.props.selected.quantity}]</b>
              </span>
              <span>
                <button
                  onClick={() => this.props.removeSelected(this.props.selected)}
                  style={{
                    backgroundcolor: "blue",
                    borderRadius: "100px",
                    float: "right",
                  }}
                >
                  <TiMinus />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCopoun;
