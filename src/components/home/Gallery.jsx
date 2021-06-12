import React from 'react';
import Card from './Card';
import Title from '../restaurants-client/Title';
import RestaurantImg from '../../images/vertical-restaurants.png';
import GroceryImg from '../../images/vertical-grocery.png';
import Pharmacy from '../../images/vertical-pharmacy.png'
function Gallery(){
    return(
        <div className="container gallery">
        <Card
            title="Restaurants"
            content="Find deals, free delivery, and more from our restaurant partners."
            img={RestaurantImg}
            bgColor="#ff493d"
            btnText="Explore"
            btnClass=""
        />
        <Card
            title="Grocery"
            content="Find deals, free delivery, and more from our restaurant partners."
            img={GroceryImg} 
            bgColor="#f4aa33"
            btnText="Explore"
            btnClass=""
        />
        <Card
            title="Pharmacy"
            content="Find deals, free delivery, and more from our restaurant partners."
            img={Pharmacy}
            bgColor="#3d76ed"
            btnText="Explore"
            btnClass=""
        />
        </div>
    );
}

export default Gallery;