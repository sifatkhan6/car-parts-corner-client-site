import React from 'react';
import Banner from './Banner';
import HomeProducts from './HomeProducts';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;