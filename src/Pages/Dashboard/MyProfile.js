import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    console.log(user)

    return (
        <div className='flex items-center justify-center'>
            <div class="avatar">
                <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-12">
                    <img src={user.photoUrl} alt=''/>
                </div>
            </div>
            <div className=''>
                <h2>Name: {user.displayName}</h2>
                <h2>Email: {user.email}</h2>
            </div>
        </div>
    );
};

export default MyProfile;