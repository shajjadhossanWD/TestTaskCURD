import React from 'react';
import Banner from './Banner';
import SalesReport from './SalesReport';
import Services from './Services';
import Category from './Category';
import Apply from './Apply';
import WeekData from './WeekData';
import SocialCommon from './SocialCommon';
import FirstLast from './FirstLast';
import SocialMediaPerformance from './SocialMediaPerformance';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SalesReport></SalesReport>
            <Services></Services>
            <Category></Category>
            <Contact></Contact>
            <SocialMediaPerformance></SocialMediaPerformance>
            <FirstLast></FirstLast>
            <SocialCommon></SocialCommon>
            <WeekData></WeekData>
            <Apply></Apply>
        </div>
    );
};

export default Home;