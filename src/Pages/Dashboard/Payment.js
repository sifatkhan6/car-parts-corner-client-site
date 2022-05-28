import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L4GvhLCiBN04ZvjbKtEHcnhj9CHnZ6Lvp6aAHhBO8kdOC1vBCWXpt3vtPNIROtuzh2quFuQAI2sIc6XRy6sTvBh00J9MUM1bx');

const Payment = () => {

    const { id } = useParams();

    const url = `https://fathomless-ocean-64226.herokuapp.com/payment/${id}`;

    const { data: order, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // console.log(order)

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-primary text-2xl my-12 font-bold text-center'>Payment Page</h2>

            <div className='grid grid-col justify-items-center'>
                <div class="card w-96 bg-gray-200 shadow-xl text-center mb-12">
                    <div class="card-body">
                        <h2 class="text-primary text-xl font-bold">Pay For: {order.productName}</h2>
                        <p className='text-primary text-base- font-bold'>Quantity: {order.quantity}</p>
                        <p className='text-primary text-base- font-bold'>Price: ${order.price}</p>
                    </div>
                </div>

                <div class="card w-96 bg-gray-200 shadow-xl text-center">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;