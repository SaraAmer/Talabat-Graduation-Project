import React from 'react';
import Apple from '../../images/logo_appstore.svg';
import GooglePlay from '../../images/logo_playstore.svg';
import Huawei from '../../images/logo_huaweistore.svg'

function SocialIcons() {

    return(
   
        <div className="find-us-icons">
        <a  target="_blank" href="https://apps.apple.com/us/app/talabat-%D8%B7%D9%84%D8%A8%D8%A7%D8%AA-food-ordering/id451001072?utm_campaign=other_campaigns_web_eat_ma_bh_display&utm_source=Footer_download&utm_medium=campaigns">
        <img src={Apple} alt="" />
        </a>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.talabat&referrer=adjust_reftag%3Dc2VDcRfodCSbL%26utm_source%3DCooperations%26utm_campaign%3Dother_campaigns_and_eat_ma_bh_display%26utm_content%3DFooter_download&utm_campaign=other_campaigns_web_eat_ma_bh_display&utm_medium=campaigns&utm_source=Footer_download">
        <img src={GooglePlay} alt="" />
        </a>
        <a target="_blank" href="https://appgallery.huawei.com/#/app/C100450669">
        <img src={Huawei} alt="" />
        </a>
        </div>
       
    );
}

export default SocialIcons;