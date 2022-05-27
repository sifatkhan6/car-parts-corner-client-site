import React from 'react';

const Review = ({reviewDetail}) => {

    const {productName, userName, rating, review} = reviewDetail;

    return (
        <div className="card w-96 bg-gray-200 shadow-xl">
            <div className="card-body text-center ">
                <h3 className='text-primary font-bold text-2xl'>{productName}</h3>
                <p className="text-primary text-base">Review: {review}</p>
                <p className="text-primary text-base">Rating: {rating}</p>
                <h2 className="text-primary font-bold text-xl">Review By: {userName}</h2>
            </div>
        </div>
    );
};

export default Review;