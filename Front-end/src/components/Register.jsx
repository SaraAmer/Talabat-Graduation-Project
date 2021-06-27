import React from 'react';
import {AiFillFacebook} from 'react-icons/ai';
import GoogleImg from '../images/btn_google_light.svg'
import { useState } from 'react';
import M from "materialize-css";
//****** */
function Register() {
  var Joi = require("joi-browser");
  const [gender, setGender] = useState("");
  const [allValues, setAllValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: ''
 });
 const changeHandler = e => {
  setAllValues({...allValues, [e.target.name]: e.target.value})
}

  function handelActiveGender(e){
    setGender(e.target.className);
       removeActive();
   addActive(e.target.className);
  }
  function removeActive(){

    const female= document.querySelector(".female");
    const male = document.querySelector(".male");
  
    if(female.classList.contains("active")){
      female.classList.remove("active")
    }
    if(male.classList.contains("active")){
      male.classList.remove("active")
    }
  
  } 
  function addActive(activeGender){
  
    document.getElementsByClassName(activeGender)[0].classList.add("active");
  }

  const createAccount = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:8000/user/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //key and value from form
        password: allValues.password,
        email: allValues.email,
        firstName: allValues.firstName,
        lastName: allValues.lastName,
        gender: gender
      }),
    });
    let resJson = await res.json();
    console.log(resJson.error);
    console.log(resJson.message);
    window.location.href = "http://localhost:3000";

    //window.location.href("http://localhost:3000");
    if (typeof resJson.error === "undefined") {
      localStorage.setItem("jwt", resJson.token);
      alert( resJson.message);
      
      //M.toast({ html: resJson.message, classes: "#c62828 red darken-3" });
    } else {
      alert(resJson.error);
     // M.toast({ html: resJson.error, classes: "#c62828 red darken-3" });
    }
  };
    return (
        <div className="registration">
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
         <h2 className="fa-3x bold m-a-0 m-b-md text-center">Create an Account</h2>
        <div className="container">
               
                <div className="sign-up-options ">
                <div className="row justify-content-center">
                <button className="btn" >
                <img src={GoogleImg} alt="" srcset="" />
                Continue with Google</button>
                </div>
                <div className="row justify-content-center">
                <button className="btn" > <span><AiFillFacebook/></span>  Continue with Facebook</button>

                </div>
                <div style={{margin:15}} className="third-option row justify-content-center">
<div className="line col-lg-2 col-md-5 col-sm-5"></div>
<div className="col-lg-1 col-md-5 col-sm-5">OR</div>
<div className="line col-lg-2 col-md-5 col-sm-5"></div>
                </div>
            </div>
            <div className="sign-up-options">

            <form onSubmit={createAccount}  >
    <div class="form-group row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">First Name</label>
    <div class="col-sm-6">
      <input name="firstName" onChange={changeHandler} class="form-control" id="inputEmail3" placeholder="First Name"/>
    </div>
  </div>
    <div class="form-group row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Last Name</label>
    <div class="col-sm-6">
      <input name="lastName" onChange={changeHandler} class="form-control" id="inputEmail3" placeholder="Last Name"/>
    </div>
  </div>
  <div class="form-group row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-6">
      <input name="email" onChange={changeHandler} type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div class="form-group row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-6">
      <input name="password" onChange={changeHandler}  type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>

  <div class="form-group row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-6">
      <input name="cpassword" onChange={changeHandler} type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group row mb-3">
  <label for="example-date-input" class="col-2 col-form-label">Gender</label>
  <div class="col-sm-6">
  <div className="gender">
  <p onClick={handelActiveGender} className="male" id="male" >Male</p>
  <p  onClick={handelActiveGender} className="female" id="female" >Female</p>
  </div>
  </div>
</div>

  <div class="form-group row mb-3">
  <label for="example-date-input" class="col-2 col-form-label">Date of Birth</label>
  <div class="col-6">
    <input class="form-control" type="date" id="example-date-input"/>
  </div>
</div>



  <div class="form-group row mb-3">
    <div class="col-sm-2"></div>
    <div class="col-sm-6">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
         Subscribe to our Newsletter
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row mb-3">
    <div class="col-sm-2"></div>
    <div class="col-sm-6">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
         Subscribe to SMS
        </label>
      </div>
    </div>
  </div>

  <div class="form-group row mb-3">
    <div class="col-sm-2"></div>
    <div class="col-sm-6">
  <p>
  By creating an account you agree to the <a href="http://">privacy policy</a>  and to the <a href="http://">terms of use</a>
  </p>
    </div>
  </div>
 

  

  <div class="form-group row">
  <div className="col-2"></div>
    <div class="col-lg-6 col-md-9 col-sm-11">
      <button type="submit" class="btn btn-primary create-account">Create your account</button>
  
  <p>Already have an account?  <a href="http://">Login</a> </p>  </div>
  </div>
</form>

            </div>
        </div>
        </div>
    );
}
export default Register;