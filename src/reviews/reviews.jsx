import React from 'react';
import { Helmet } from "react-helmet";

import './reviews.css';

export function Reviews() {
    return (
        <div className='padding review-section'>

            <div className = "reviews">
                <div className='review-text'>Real Reviews from Real Customers</div>
            </div>
            
            <div id='ss-custom-reviews-widget-root'></div>  
            <Helmet>            
                <script id='ss-custom-reviews-widget-script' src='https://d1gxt2ovmgw1zu.cloudfront.net/custom_reviews_widget_script.js' ss-custom-reviews-widget-api-key='BLp_UN26bq5G5KF8JzuAZ5LsBHDU-aztupzR6gGKdrO9sq_kLO5iXN44KafxhKoC9vH6fXuK8SvM7Hdc' widget-key='ieOlXoKVHxvIlGJqf2qq3Q' type='text/javascript'> </script>
            </Helmet>
        </div>
    );
}