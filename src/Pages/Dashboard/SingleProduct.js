import React from 'react';

const SingleProduct = ({ productDetail }) => {

    const { name, img, _id, description, price, quantity, minOrder } = productDetail;

    return (
        <div className="card w-full glass">
            <figure><img className='h-full' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-primary'">{name}</h2>
                <p className='text-base'><strong>Description:</strong> {description.slice(0, 55)}...</p>
                <h3><strong>Price:</strong> ${price}</h3>
                <h3><strong>Quantity:</strong> {quantity}</h3>
                <h3><strong>Minimum Order:</strong> {minOrder}</h3>
                <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary text-white">Manage</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;