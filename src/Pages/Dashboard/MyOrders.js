import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking/email?clientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/home');
                    }
                    return res.json()
                })
                .then(data => {
                    setProducts(data)
                })
        }
    }, [user])

    return (
        <div>
            <h2 className='text-2xl font-bold text-center text-primary mt-8'>My Order</h2>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.productName}</td>
                                <td>${product.price}</td>
                                <td>{product.quantity} pcs</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;