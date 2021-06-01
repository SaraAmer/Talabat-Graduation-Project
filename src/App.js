import React from 'react';
import "./App.css";
import Header from './components/clients/layouts/Header';
import Footer from './components/clients/layouts/Footer';
import Restaurant from './components/Restaurants/Restaurant'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends React.Component{
  render()
  {
  return (
    <div className="App">
      <Restaurant/>
     {/* <Header/>
	
	 <Footer/> */}
    </div>
  );
  }
}

export default App;

