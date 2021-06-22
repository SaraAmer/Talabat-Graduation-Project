// import "./partnerlogin.css";
import React, { Component } from "react";

class PartnerRegisterRest extends React.Component {
  handlesubmit = (e) => {
    console.log("submit");
  };

  render() {
    return (
      // *******************************************

      <div>
        {/* ************************************************************************* */}
        <form className="form-row" onSubmit={this.handlesubmit}>
          {/* // ******************************************* */}
          <div className="col form-group">
            <label
              className="fs-4"
              style={{
                float: "left",
              }}
            >
              Store Name{" "}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Type Your store name"
            />
          </div>
          {/* // ***************************** */}
          <div className="col form-group">
            <label
              className="fs-4"
              style={{
                float: "left",
              }}
            >
              Number of Branches{" "}
            </label>
            <input
              // type="number"
              type="text"
              className="form-control"
              placeholder="Type Number of Outlet's you have"
            />
          </div>
          {/* // ********************* */}
          <div className="form-group ">
            <label
              className="fs-4"
              style={{
                float: "left",
              }}
            >
              Store Type
            </label>
            <select id="inputState" className="form-control">
              <option> --None--</option>
              <option> Restaurant</option>
              <option>Cofee</option>
              <option>Cosmetics</option>
              <option selected="">Electronics</option>
              <option>Entertainment</option>
            </select>
          </div>
          {/* //****************** */}
          <div className="form-group">
            <label
              className="fs-4"
              style={{
                float: "left",
              }}
            >
              Category
            </label>
            <select id="inputState" className="form-control">
              <option> Select value </option>
              <option> Fast Food</option>
              <option>Desserts</option>
              <option>Egyptian</option>
              <option selected="">Fried Chicken</option>
              <option>Chocolate</option>
              <option>Coffee</option>
            </select>
          </div>
          {/* //************************ */}
          <div className="form-group">
            <label
              className="fs-4"
              style={{
                float: "left",
              }}
            >
              Website / Social media{" "}
            </label>
            <input
              // type="number"
              type="text"
              className="form-control"
              placeholder="www.example.com"
            />
          </div>
          {/* //******************* */}
          <div className="form-group ">
            <label
              className="fs-4"
              style={{
                float: "left",
              }}
            >
              Restaurant Address{" "}
            </label>
            <div class="input-group">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search here......."
                aria-label="Search"
                aria-describedby="search-addon"
              />

              <button type="button" className="btn btn-outline-primary">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          {/* <button
            type="submit"
            className="btn btn-lg btn-block form-control"
            style={{
              textAlign: "center",
              backgroundColor: "#FF5900",
              color: "white",
              marginLeft: "30px",
              borderRadius: "15px",
              width: "150px",
            }}
          >
            Next
          </button> */}
          <div
            style={{
              padding: "10px",
              margin: "10px",
            }}
          ></div>
        </form>
      </div>
    );
  }
}
export default PartnerRegisterRest;
