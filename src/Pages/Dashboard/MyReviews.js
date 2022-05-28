import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading'

const MyReviews = () => {

    const { data: productNames, isLoading } = useQuery('onlyProduct', () => fetch('https://fathomless-ocean-64226.herokuapp.com/singleProduct').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleReview = event => {
        event.preventDefault();

        const Profile = {
            productName: event.target.productName.value,
            userName: event.target.userName.value,
            rating: event.target.rating.value,
            review: event.target.review.value,
        }

        fetch(`https://fathomless-ocean-64226.herokuapp.com/review`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Successfully Added Your Review!`)
                    event.target.reset();
                }
                else {
                    toast.error(`Failed to Add the review...`)
                }
            });
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mt-8'>Add Your Review</h2>
            <form className='grid grid-cols-1 gap-3 my-6 justify-items-center' onSubmit={handleReview} >

                <select name="productName" className="input input-bordered input-secondary w-full max-w-xs">
                    {
                        productNames.map(productName => <option
                        key={productName._id}
                        value={productName.name}>
                        {productName.name}</option>)
                    }
                </select>

                <input type="text" name='userName' placeholder='Your Name' className="input input-bordered input-secondary w-full max-w-xs" />

                <input type="number" name='rating' placeholder='Give Rating from 0 to 5' min='0' max='5' className="input input-bordered input-secondary w-full max-w-xs" />

                <textarea type="text" name='review' placeholder='Write Your Review' className="input input-bordered input-secondary w-full max-w-xs h-full" />

                <input type="submit" value="Add Review" className="btn btn-primarybtn btn-primary text-white font-bold w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyReviews;