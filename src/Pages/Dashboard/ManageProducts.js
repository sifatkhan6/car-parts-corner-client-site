import React from 'react';
import ProductHook from '../Hooks/ProductHooks';
import SingleProduct from './SingleProduct';

const ManageProducts = () => {

    const [productDetails, setproductDetails] = ProductHook();

    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-bold text-center text-primary'>Manage All Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 my-4'>
                {
                    productDetails.map(productDetail => (
                        <SingleProduct
                            key={productDetail._id}
                            productDetail={productDetail}>
                        </SingleProduct>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageProducts;