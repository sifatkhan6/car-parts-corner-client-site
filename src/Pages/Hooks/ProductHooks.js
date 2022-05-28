import { useEffect, useState } from 'react';

const ProductHook = () => {

    const [productDetails, setproductDetails] = useState([]);

    useEffect( () => {
        fetch('https://fathomless-ocean-64226.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setproductDetails(data))
    },[])

    return[productDetails, setproductDetails];
};

export default ProductHook;