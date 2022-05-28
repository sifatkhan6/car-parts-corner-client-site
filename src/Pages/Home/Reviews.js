import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviewDetails, setreviewDetails] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-ocean-64226.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setreviewDetails(data))
    }, [])

    return (
        <div>
            <h2 className='text-primary text-3xl font-bold text-center'>Review Section</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-8 mb-28 mt-12'>
                {
                    reviewDetails.map(reviewDetail => (
                        <Review
                            key={reviewDetail._id}
                            reviewDetail={reviewDetail}
                        ></Review>
                    ))
                }
            </div>
        </div>
    );
};

export default Reviews;