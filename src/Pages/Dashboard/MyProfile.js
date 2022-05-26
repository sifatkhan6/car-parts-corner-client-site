import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mt-8'>My Profile</h2>
                <form className='grid grid-cols-1 gap-3 my-6 justify-items-center' >
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered input-secondary w-full max-w-xs"/>

                    <input type="number" name='quantity' placeholder='Education' className="input input-bordered input-secondary w-full max-w-xs"/>

                    <input type="text" name='number' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs"/>

                    <input type="text" name='address' placeholder="Full Address" className="input input-bordered input-secondary w-full max-w-xs"/>

                    <input type="text" name='address' placeholder="LinkedIn Profile Link" className="input input-bordered input-secondary w-full max-w-xs"/>

                    <input type="submit" value="Update" className="btn btn-primarybtn btn-primary text-white font-bold w-full max-w-xs" />
                </form>
            </div>
    );
};

export default MyProfile;