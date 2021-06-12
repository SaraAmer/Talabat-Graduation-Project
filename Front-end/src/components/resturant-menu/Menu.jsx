import React from 'react';

function Menu(){
    return(
        // <div className="menu container">
        // {/* <div className="row">
        //     <div className="side col-lg- col-sm-6 col-md-6">
        //         <div className="title"><h3>Categories</h3></div>
        //         <a href="#most-selling">Most Selling</a>
        //         <a href="#sauces">Sauces</a>
        //         <a href="#beef-burger">Beef Burger</a>
        //         <a href="#little-bites">Little Bites</a>
        //         <a href="#side-items">Side Items</a>
        //         <a href="#beverages">Beverages</a>
        //     </div>
        // </div> */}
        
        // </div>
        <div class="menu container">
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <div class="row">
    <nav className="side col-sm-3 col-4" id="myScrollspy">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#section1">Section 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#section2">Section 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#section3">Section 3</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Section 4</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#section41">Link 1</a>
            <a class="dropdown-item" href="#section42">Link 2</a>
          </div>
        </li>
      </ul>
    </nav>
    <div class="col-sm-9 col-8">
      <div id="section1" class="bg-success">    
        <h1>Section 1</h1>
        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
      </div>
      <div id="section2" class="bg-warning"> 
        <h1>Section 2</h1>
        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
      </div>        
      <div id="section3" class="bg-secondary">         
        <h1>Section 3</h1>
        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
      </div>
      <div id="section41" class="bg-danger">         
        <h1>Section 4-1</h1>
        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
      </div>      
      <div id="section42" class="bg-info">         
        <h1>Section 4-2</h1>
        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default Menu;