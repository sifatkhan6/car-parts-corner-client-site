import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    const { productID, price, clientName, phone, clientEmail } = order;

    // console.log(price)

    useEffect(() => {
        if (price) {
            fetch('https://fathomless-ocean-64226.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ price })

            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                })
        }

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setCardSuccess('');
        setProcessing(true);

        // confirming card payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: clientName,
                        email: clientEmail,
                        phone: phone,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setCardSuccess('Payment Completed!!!');

            // storing payment data 
            const paymentDone = {
                productID: productID,
                transactionId: paymentIntent.id
            }

                fetch(`https://fathomless-ocean-64226.herokuapp.com/payment-update/${productID}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(paymentDone)
                })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#170131',
                                '::placeholder': {
                                    color: '#170131',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                cardSuccess && <div className='text-green-500'>
                    {cardSuccess}
                    <p className='text-primary font-bold text-xs mt-2'>Transaction ID: {transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;