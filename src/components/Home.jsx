import React from 'react';

import BannerHome from './home/BannerHome';
import FindUs from './home/FindUs';
import JoinUs from './home/JoinUs';
import Gallery from './home/Gallery';
import DiscoverUs from './home/DiscoverUs';
function Home(){
    return(
    <div>
        <BannerHome/>
        <FindUs/>
        <Gallery/>
        <JoinUs/>
        <DiscoverUs/>
    </div>
       
    );
}
export default Home;