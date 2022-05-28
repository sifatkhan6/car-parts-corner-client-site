import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Purchase.css'

const Purchase = () => {

    const { productID } = useParams();

    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});
    // const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        const url = `https://fathomless-ocean-64226.herokuapp.com/products/${productID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handleBooking = event => {
        event.preventDefault();

        const booking = {
            productID: product._id,
            productName: product.name,
            price: product.price,
            quantity: event.target.quantity.value,
            clientEmail: user.email,
            clientName: user.displayName,
            phone: event.target.number.value,
            address: event.target.address.value,
        }

        fetch('https://fathomless-ocean-64226.herokuapp.com/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`You Have Ordred Successfully.`)
                }
                else {
                    toast.error(`You Already Have Same Order on process...`)
                }

                event.target.reset();
            });
    }

    return (
        <div className='mx-4'>
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
                </div>
            </div>

            <div>
                <form className='grid grid-cols-1 gap-3 my-6 justify-items-center' onSubmit={handleBooking}>
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="number" name='quantity' placeholder={product.minOrder} min={product.minOrder} max={product.quantity} className="input input-bordered input-secondary w-full max-w-xs" required />

                    <input type="text" name='number' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" required />

                    <input type="text" name='address' placeholder="Address" className="input input-bordered input-secondary w-full max-w-xs" required />

                    <input type="submit" value="Purchase" className="btn btn-primarybtn btn-primary text-white font-bold w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;