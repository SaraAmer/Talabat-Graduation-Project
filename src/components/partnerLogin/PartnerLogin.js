import "./partnerlogin.css";
import React, { Component } from "react";

class PartnerLogin extends React.Component {
  render() {
    return (
      // <!-- Background image -->
      <div
        className="bg-images"
        style={
          {
            // backgroundImage:
            //   "url('https://blog.talabat.com/wp-content/uploads/2020/11/Screenshot-486-e1604302345716.png')",
            // height: "100%",
          }
        }
      >
        {/* hii{" "} */}
        {/* <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontWeight: "bolder",
          }}
        >
          Welcome to the Talabat Portal
        </div> */}

        <section className="countss">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* <div className="count-box">
                  <i className="icofont-doctor-alt"></i>
                  <span data-toggle="counter-up">85</span>
                  <p>Doctors</p>
                </div> */}
              </div>

              <div className="col-lg-6 col-md-12 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="icofont-patient-bed">
                    {/* <div
                    style={{
                      color: "white",
                      backgroundColor: "#FF5900",
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      textAlign: "center",
                    }}
                  > */}
                    <span
                      style={{
                        // marginTop: "200px",
                        fontSize: "15px",
                        textAlign: "center",
                        color: "white",
                        borderRadius: "50%",
                      }}
                    >
                      talabt
                    </span>
                    {/* </div> */}
                  </i>

                  {/* <span className="counter-up">18</span> */}
                  {/* <span className="dot">Talabat</span> */}

                  {/* *************************************************************** */}

                  <form>
                    <div className="text-center mb-3">
                      <div className="row mg-btm">
                        <div
                          className="col-md-12"
                          style={{
                            textAlign: "center",
                            fontWeight: "bolder",
                          }}
                        >
                          Welcome to the Talabat Portal
                        </div>
                        <div
                          style={{
                            textAlign: "center",
                            marginTop: "20px",
                            fontWeight: "20px",
                            color: "grey",
                          }}
                        >
                          If you’re unable to login or recover your password
                          (link below), please contact your account manager.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4 mt-25">
                      <input
                        type="text"
                        id="form5Example1"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="registerPassword"
                        className="form-control"
                        for="registerPassword"
                        placeholder="password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn  btn-block"
                      style={{
                        textAlign: "center",
                        backgroundColor: "#4169e1",
                        color: "white",

                        // borderRadius: "15px",
                        width: "150px",
                      }}
                    >
                      LOGIN
                    </button>

                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "20px",
                        color: "#4169e1",
                        fontSize: "10px",
                      }}
                    >
                      FORGET PASSWORD ?
                    </p>
                  </form>

                  {/*  */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                {/* <div className="count-box">
                  <i className="icofont-laboratory"></i>
                  <span data-toggle="counter-up">8</span>
                  <p>Research Labs</p>
                </div> */}
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                {/* <div className="count-box">
                  <i className="icofont-award"></i>
                  <span data-toggle="counter-up">150</span>
                  <p>Awards</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bolder",
        }}
      >
        Talabat partner
      </div> */}
        {/* ****************************************** */}
        <div
          style={{
            padding: "30px",
          }}
        ></div>
        {/* ***********************************New **************************************************************** */}
        <div className="container " style={{ width: "1000px" }}>
          <div className="card mb-3 border-2 " style={{ maxWidth: " 540px;" }}>
            <div className="card m-3">
              <div className="card-header"></div>
              {/* ****** */}
              <h2>Restaurants in Salah ElDin Street</h2>
              <div className="row">
                <div className="col-4">
                  {/* search */}
                  <div class="input-group">
                    {/* <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search Restaurants"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    /> */}
                    {/* className="btn btn-outline-primary" */}
                    {/* type="button" */}
                    {/* <button style={{ backgroundColor: "white" }}>
                      <i className="bi bi-search"></i>
                    </button> */}
                    <div class="input-group rounded">
                      <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                      <span class="input-group-text border-0" id="search-addon">
                        <i className="bi bi-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
                {/* ********** */}
                <div className="col-8">
                  {/* sortby */}
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                      <a class="navbar-brand" href="#">
                        Sort By:
                      </a>
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                      >
                        <div class="navbar-nav">
                          <a
                            class="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            Recommended
                          </a>
                          <a class="nav-link" href="#">
                            Ratings
                          </a>
                          <a class="nav-link" href="#">
                            Newest
                          </a>
                          <a
                            class="nav-link disabled"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                          >
                            A to Z
                          </a>
                          <a class="nav-link" href="#">
                            Min.Order Amount
                          </a>
                          {/* <a class="nav-link" href="#">
                            Fastest Delivery
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                {/* **************** */}
              </div>
              <div className="row">
                <div className="col-4">
                  {/* **************************** */}
                  <div className="card">
                    <div class="card-header">Filter By</div>
                    <div class="card-body">
                      <form action="/action_page.php" method="get">
                        <input type="checkbox" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> Deals and Offers</label>
                        <br></br>
                        <input type="checkbox" name="vehicle2" value="Car" />
                        <label for="vehicle2"> USe Vouncher Here</label>
                        <br></br>
                        <input
                          type="checkbox"
                          name="vehicle3"
                          value="Boat"
                          checked
                        />
                        <label for="vehicle3"> Online Payment Available</label>
                        <br></br>

                        <input
                          type="checkbox"
                          name="vehicle4"
                          value="Boat4"
                          checked
                        />
                        <label for="vehicle3"> Value Meals</label>
                        <br></br>

                        <input
                          type="checkbox"
                          name="vehicle5"
                          value="Boat5"
                          checked
                        />
                        <label for="vehicle3"> Family Meals</label>
                        <br></br>
                        <input
                          type="checkbox"
                          name="vehicle6"
                          value="Boat6"
                          checked
                        />
                        <label for="vehicle3">New Restaurants</label>
                        <br></br>
                        <input
                          type="submit"
                          className="d-none"
                          value="Submit"
                        />
                      </form>
                    </div>
                  </div>

                  {/* ********************************** */}
                  <div className="card">
                    <div class="card-header">Cuisines</div>
                    <div class="card-body">
                      {/* <form action="/action_page.php" method="get">
                        <input type="radio" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label>
                        <br></br>
                        <input type="radio" name="vehicle2" value="Car" />
                        <label for="vehicle2"> I have a car</label>
                        <br></br>
                        <input
                          type="radio"
                          name="vehicle3"
                          value="Boat"
                          checked
                        />
                        <label for="vehicle3"> I have a boat</label>
                        <br></br>
                        <input
                          type="submit"
                          className="d-none"
                          value="Submit"
                        />
                      </form> */}
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          All
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          African
                        </label>
                      </div>
                      {/* Model For Show All */}

                      {/* <button
                        type="button"
                        className="btn text-green "
                        data-toggle="modal2"
                        data-target="#exampleModal2"
                        // backgroundColor: "red",
                        style={{ color: "green" }}
                      >
                        show All{" "}
                      </button> */}

                      <button
                        type="button"
                        className="btn text-green "
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                        // backgroundColor: "red",
                        style={{ color: "green" }}
                      >
                        show All{" "}
                      </button>

                      {/* <!-- Large modal --> */}
                      {/* <button
                        type="button"
                        // class="btn btn-primary"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                        style={{ color: "green" }}
                      >
                        Show All
                      </button> */}

                      <div
                        class="modal fade bd-example-modal-lg"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="myLargeModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalLongTitle"
                              >
                                All Cuisines
                              </h5>

                              <button
                                type="button"
                                class="btn-close"
                                data-dismiss="modal"
                                aria-label="Close"
                                style={{
                                  float: "right",
                                }}
                              ></button>
                            </div>
                            <div className="row">
                              {/* ************************************ */}
                              <div className="col-3">
                                {/* ******************************** */}
                                <div
                                  style={{
                                    padding: "10px",
                                  }}
                                ></div>
                                {/* ******************************* */}

                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexRadioDefault1"
                                  >
                                    All
                                  </label>
                                </div>
                                {/* ***************************** */}
                              </div>
                              {/********************************col-3 ************************************************/}
                              <div className="col-3">
                                {/* ******************************** */}
                                <div
                                  style={{
                                    padding: "10px",
                                  }}
                                ></div>
                                {/* ******************************* */}

                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexRadioDefault1"
                                  >
                                    All
                                  </label>
                                </div>
                                {/* ***************************** */}
                              </div>
                              {/********************************col-3 ************************************************/}
                              <div className="col-3">
                                {/* ******************************** */}
                                <div
                                  style={{
                                    padding: "10px",
                                  }}
                                ></div>
                                {/* ******************************* */}

                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexRadioDefault1"
                                  >
                                    All
                                  </label>
                                </div>
                                {/* ***************************** */}
                              </div>
                              {/* *********************************col-3*************** */}
                              <div className="col-3">
                                {/* ******************************** */}
                                <div
                                  style={{
                                    padding: "10px",
                                  }}
                                ></div>
                                {/* ******************************* */}

                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexRadioDefault1"
                                  >
                                    All
                                  </label>
                                </div>
                                {/* ***************************** */}
                              </div>
                              {/* ****************************************************** */}
                              {/* ********* */}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* *************************************************** */}

                      {/* ********************************************************* */}
                    </div>
                  </div>

                  {/* ************************************ */}
                </div>
                <div className="col-8">
                  {/* Restaurant Card  */}

                  {/* <div class="card" style={{ width: "18rem" }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div> */}

                  <div class="cardnew">
                    <img
                      src="https://images.deliveryhero.io/image/otlob/restaurants/English_Logo_636911938429225705.jpg?width=180"
                      // class="card-img-top"
                      style={{ display: "inline-block" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-3">
                      <img
                        src="https://images.deliveryhero.io/image/otlob/restaurants/English_Logo_636911938429225705.jpg?width=180"
                        // class="card-img-top"
                        // style={{ display: "inline-block" }}
                        alt="..."
                      />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7">
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* ****** */}
            </div>
          </div>
        </div>
        {/* *********************************************** */}
      </div>
    );
  }
}
export default PartnerLogin;
