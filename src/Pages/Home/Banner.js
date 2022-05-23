import React from 'react';
import banner from '../../Images/banner.jpg'

const Banner = () => {
    return (
        <div className='container'>
            <div className='flex justify-center items-center '>
                <div className='p-6'>
                    <h2 className='text-2xl lg:text-4xl font-bold text-primary'>We Manufacture All The Luxury Car Psarts</h2>
                </div>
                <div className='p-6'>
                    <img className='w-50' src={banner} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;