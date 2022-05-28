import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='my-8'>
            <h2 className='text-primary text-3xl text-center font-bold my-8'>My Portfolio</h2>
            <div className='mx-12 lg:mx-96'>
                <h3 className='text-primary text-2xl font-bold my-2 text-center '>Name: MD SIFAT KHAN</h3>
                <h3 className='text-primary text-base font-bold my-2 text-center'>Email: sifatkhann229@gmail.com</h3>
                <h3 className='text-primary text-base font-bold my-2 text-center'>Educational Background: BSc in Software Engineering (Final Year)</h3>

                <h3 className='text-primary text-2xl font-bold mt-8 text-center'>List of Technologies I Know</h3>
                <h4 className='text-primary text-base font-bold my-2 text-center'>HTML 5, CSS 3, JavaScript, ES6, React, Node, Express, MongoDB, Firebase</h4>

                <h2 className='text-primary text-2xl font-bold mt-8 text-center'>Some of My Projects</h2>
                <h3 className='text-primary text-base font-bold my-2 text-center'>https://incandescent-crisp-d35f09.netlify.app</h3>
                <h3 className='text-primary text-base font-bold my-2 text-center'>https://poetic-bombolone-64c566.netlify.app</h3>
                <h3 className='text-primary text-base font-bold my-2 text-center'>https://astonishing-khapse-f2195a.netlify.app</h3>
            </div>
        </div>
    );
};

export default MyPortfolio;