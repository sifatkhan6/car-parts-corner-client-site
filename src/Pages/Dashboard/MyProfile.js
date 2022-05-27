import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const [updateProfile, setUpdateProfile] = useState([]);

    const {education} = {updateProfile};

    console.log(education)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/showUpdateProfile/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUpdateProfile(data)
                })
        }
    }, [user])

    const handleUpdateProfile = event => {
        event.preventDefault();

        const Profile = {
            education: event.target.education.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            linkedIn: event.target.linkedIn.value,
        }

        fetch(`http://localhost:5000/updateProfile/${user.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Successfully Updated Your Profile!`)
                }
                else {
                    toast.error(`Failed to Update...`)
                }
            });
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mt-8'>My Profile</h2>
            <form className='grid grid-cols-1 gap-3 my-6 justify-items-center' onSubmit={handleUpdateProfile} >
                <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                <input type="text" name='education' placeholder={updateProfile?.education} className="input input-bordered input-secondary w-full max-w-xs" />

                <input type="number" name='phone' placeholder={updateProfile?.number} className="input input-bordered input-secondary w-full max-w-xs" />

                <input type="text" name='address' placeholder={updateProfile?.address} className="input input-bordered input-secondary w-full max-w-xs" />

                <input type="text" name='linkedIn' placeholder={updateProfile?.linkedIn} className="input input-bordered input-secondary w-full max-w-xs" />

                <input type="submit" value="Update" className="btn btn-primarybtn btn-primary text-white font-bold w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyProfile;