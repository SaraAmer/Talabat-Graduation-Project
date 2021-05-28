import React from 'react';
import "./App.css";
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import "bootstrap/dist/css/bootstrap.min.css";


import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends React.Component{
  render()
  {
  return (
    <div className="App">
     <Header/>
	
	 <Footer/>
    </div>
  );
  }
}

export default App;

