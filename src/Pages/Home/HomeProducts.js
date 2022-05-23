import React from 'react';
import ProductHook from '../Hooks/ProductHooks';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {

    const [productDetails, setproductDetails] = ProductHook();

    return (
        <div className='mt-28'>
            <h2 className='text-4xl font-bold text-center text-primary'>Available Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-8 mt-12'>
                {
                    productDetails.slice(0, 6).map(productDetail => (
                        <HomeProduct
                            key={productDetail._id}
                            productDetail={productDetail}>
                        </HomeProduct>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeProducts;