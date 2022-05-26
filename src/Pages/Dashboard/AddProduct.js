import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {

    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();

        const addProduct = {
            name: event.target.ProductName.value,
            price: event.target.Price.value,
            description: event.target.Description.value,
            quantity: event.target.Quantity.value,
            minOrder: event.target.minOrder.value,
            img: event.target.PhotoURL.value,
            email: user?.email
        }

        axios.post('http://localhost:5000/products', addProduct)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Product Added');
                    event.target.reset();
                }
            })
    };

    return (
        <div className=''>
            <h2 className='mt-5 text-2xl font-bold text-primary text-center'>Add Item</h2>
            <form className='flex flex-col items-center my-4' onSubmit={handleAddItem}>

                <input type="text" name='ProductName' placeholder="Product Name" className="input input-bordered w-full max-w-xs" required/>

                <input type="number" name='Price' placeholder="Price" className="input input-bordered w-full max-w-xs mt-2" required/>

                <input type="text" name='Description' placeholder="Description" className="input input-bordered w-full max-w-xs mt-2" required/>

                <input type="number" name='Quantity' placeholder="Quantity" className="input input-bordered w-full max-w-xs mt-2" required/>

                <input type="number" name='minOrder' placeholder="Minimum Order" className="input input-bordered w-full max-w-xs mt-2" required/>

                <input type="text" name='PhotoURL' placeholder="PhotoURL" className="input input-bordered w-full max-w-xs mt-2" required/>

                <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs mt-2" value={user?.email} readOnly/>

                <input className='btn btn-primary text-white mt-4' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;