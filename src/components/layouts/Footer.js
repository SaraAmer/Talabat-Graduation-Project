import React from 'react'

class  Footer extends React.Component{
	render(){
    return ( <div>

<footer className="text-lg-start bg-dark text-muted">
  <div className="container">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    
    <div className=" nav  navbar-expand-lg m-4">
     <ul className="navbar-nav ">
	 <li className="nav-item">
	 <a href="" className="me-4 nav-link text-reset">
        Feedback
      </a></li>
	  <li className="nav-item">
	 <a href="" className="me-4 nav-link text-reset">
        Career 
      </a></li>
	  <li className="nav-item">
	 <a href="" className="me-4 nav-link text-reset">
       Terms
      </a></li>
	  <li className="nav-item">
	 <a href="" className="me-4 nav-link text-reset">
        FAQ
      </a></li>
	  <li className="nav-item">
	 <a href="" className="me-4  nav-link text-reset">
        Privacy 
      </a></li>
	  <li className="nav-item">
	 <a href="" className="me-4 nav-link text-reset">
        Contatct us
      </a></li>
	  <li className="nav-item">
	 <a href="" className="me-4  nav-link text-reset">
        Sitemap
      </a>
	 </li>
	 </ul>
    </div>
   
    
   
  </section>
 

  
  <section className="">
    <div className="container text-center text-md-start mt-5">
 
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Restaurants
          </h6>
          <p>
            <a href="#!" className="text-white">Most Selling </a>
          </p><p>
            <a href="#!" className="text-white">Taboon</a>
          </p>
		  <p>
            <a href="#!" className="text-white">Dawar Farah -Mohandissen</a>
          </p>
		  <p>
            <a href="#!" className="text-white">Indira</a>
          </p>
		  <p>
            <a href="#!" className="text-white">Al Assel El Demashky -Tagammoa 5</a>
          </p>
		  <p>
            <a href="#!" className="text-white">Lan Yuan -Maadi </a>
          </p>
		   <p>
            <a href="#!" className="text-reset">More Restaurants...</a>
          </p>
        </div>
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Popular Cuisines
          </h6>
          <p>
            <a href="#!" className="text-white">Italian</a>
          </p>
          <p>
            <a href="#!" className="text-white">Mexican</a>
          </p>
          <p>
            <a href="#!" className="text-white">Sandwiches</a>
          </p>
		  <p>
            <a href="#!" className="text-white">Japanese</a>
          </p>
		  <p>
            <a href="#!" className="text-white">Pizza</a>
          </p>
          <p>
            <a href="#!" className="text-reset">More Cuisines...</a>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
           Popular Areas
          </h6>
          <p>
            <a href="#!" className="text-white">Masaken el Rehab </a>
          </p>
          <p>
            <a href="#!" className="text-white">Mostashfa ALHommeyat</a>
          </p>
          <p>
            <a href="#!" className="text-white">Salah ElDin Street </a>
          </p>
          <p>
            <a href="#!" className="text-white">Salah Nessim Street</a>
          </p>
		    <p>
            <a href="#!" className="text-white">Shabab El Mosalas</a>
          </p>
		   <p>
            <a href="#!" className="text-reset">More Areas...</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 border-buttom">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Follow us on 
          </h6>
          
      <a href="" className="me-4 text-reset">
       <i className="bi bi-facebook"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="bi bi-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="bi bi-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="bi bi-github"></i>
      </a>
    
        </div>
        
      </div>
    
    </div>
  </section>
  

  <div className=" row border-top">
   <label className="d-flex justify-content-start">For any support or help you can contact us via our Live Chat</label>
    <label className="d-flex justify-content-end">© 2021 Talabat.com</label >
  </div>
  
  <div  className="d-flex justify-content-end">
 <a href=""><button type="button" className="btn  text-white rounded-top" style={{backgroundColor: "#FF5900"}} ><i className="bi bi-chat me-4"></i>Contact us </button></a>
  </div>
 </div>
</footer>

  </div>
    );
}}
export default Footer;