import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Purchase.css'

const Purchase = () => {

    const { productID } = useParams();

    const [product, setProduct] = useState({});
    // const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/products/${productID}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    // decreasing quantity 
    // const handleDavivered = (id) => {
    //     const quantity = product.quantity;
    //     let newQuantity = quantity - 1;
    //     const newProduct = { ...product, quantity: newQuantity };
    //     setProduct(newProduct);
    //     if (newQuantity > -1) {
    //         const url = `http://localhost:5000/products/${id}`;
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(newProduct)
    //         })
    //             .then(res => res.json())
    //             .then(data => setIsReload(!isReload));
    //     }
    // }

    // updating stock 
    // const handleUpdateStock = event => {
    //     event.preventDefault();

    //     const stock = event.target.AddQuantity.value;
    //     const newStock = parseInt(stock);
    //     const oldStock = parseInt(product.quantity);
    //     const restock = oldStock + newStock;
    //     const newProduct = { ...product, quantity: restock };

    //     const url = `http://localhost:5000/products/${productId}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newProduct)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setIsReload(!isReload);
    //             event.target.reset();
    //         })
    //     toast('Quantity Added Successfully.')
    // }

    return (
        <div className=''>
            <div className='inventorySection'>
                <div className=''>
                    <img src={product.img} alt="" />
                </div>
                <div className='inventoryDetails'>
                    <h3 className='text-3xl text-primary font-bold'>{product.name}</h3>
                    <h4 className='text-xl text-primary font-bold mt-2'>Price: ${product.price}</h4>
                    <p className='text-sm text-primary mt-2'><strong className='font-bold'>Product ID: </strong> {product._id}</p>
                    <p className='text-primary mt-2'><strong className='text-base font-bold mt-2'> Description:</strong> {product.description}</p>
                    <h6 className='text-base text-primary font-bold mt-2'>Minimum Order: {product.minOrder}</h6>
                    <h6 className='text-base text-primary font-bold mt-2'>Quantity: {product.quantity}</h6>
                    <h6><small></small></h6>
                    {/* <button className='btn btn-secondary mt-4' onClick={() => handleDavivered(productID)}>Delivered</button> */}
                </div>
            </div>

            {/* <div className='text-center mt-5 mx-auto w-25'>
                <form className='d-flex flex-column' onSubmit={handleUpdateStock}>
                    <input className='mb-2' type="number" name="AddQuantity" placeholder='Add Quantity' id="" />
                    <div className='text-center'>
                        <input className='btn btn-success w-50' type="submit" value="Add Quantity" />
                    </div>
                </form>
            </div> */}
        </div>
    );
};

export default Purchase;