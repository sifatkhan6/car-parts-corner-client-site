import React from 'react';
import Banner from './Banner';
import HomeProducts from './HomeProducts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Summary></Summary>
        </div>
    );
};

export default Home;