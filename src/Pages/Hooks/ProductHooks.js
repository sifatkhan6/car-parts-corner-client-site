import { useEffect, useState } from 'react';

const ProductHook = () => {

    const [productDetails, setproductDetails] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setproductDetails(data))
    },[])

    return[productDetails, setproductDetails];
};

export default ProductHook;