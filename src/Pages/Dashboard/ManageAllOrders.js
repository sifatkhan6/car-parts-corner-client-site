import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {

    const { data: booking, isLoading} = useQuery('booking', () => fetch('http://localhost:5000/booking', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-center text-primary mt-8'>All Orders</h2>
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
                            booking.map((product, index) => <tr key={index}>
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

export default ManageAllOrders;