import React from 'react';
import banner from '../../Images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse mt-8">
                <div className='basis-2/4'>
                    <img src={banner} className="w-100 rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='basis-2/4 justify-items-center'>
                    <h2 className='text-2xl lg:text-4xl font-bold text-primary'>We Manufacture All The Luxury Car Psarts</h2>
                    <button className="btn btn-primary text-white mt-8">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;