import React from 'react';
import Card from './Card';
import BecomePartner from '../../images/become-a-partner.png';
import Career from '../../images/career-with-us.png'
function JoinUs(){
    return(
        <div className="join-us">
        <h1>Join us</h1>
        <div className="container gallery">
        <p>Be a part of the talabat story</p>
        <Card
            title="Become a partner"
            content="Reach more customers and achieve growth with us"
            img={BecomePartner}
            bgColor=""
            btnText="Find out more"
            btnClass="btn career-btn"
        />
            <Card
            title="Build your career"
            content="Join the dynamic team that makes it all happen"
            img={Career}
            bgColor=""
            btnText="Find jobs"
            btnClass="btn career-btn"
        />
        </div>
        </div>
    );
}

export default JoinUs;