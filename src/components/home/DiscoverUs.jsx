import React from 'react';
import SocialIcons from './SocialIcons';
import AppView from '../../images/app-view-en.png';
function DiscoverUs(){
    return(
        <div className="discover-us container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
            <h1>Discover the new talabat app</h1>
        <pre>Get what you need, when you need it.</pre>
        <SocialIcons/>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-7">
                <img className="app-view"  src={AppView} alt="" srcset="" />
            </div>
        </div>
       

        </div>
    );
}

export default DiscoverUs;