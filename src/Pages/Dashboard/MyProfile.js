import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const { email } = user.email;

    const url = `https://fathomless-ocean-64226.herokuapp.com/showUpdateProfile/${user.email}`;

    const { data: infos, isLoading, refetch } = useQuery(['profile', { email }], () => fetch(url).then(res => res.json()));

    // console.log(infos?.address)

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleUpdateProfile = event => {
        event.preventDefault();

        const Profile = {
            education: event.target.education.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            linkedIn: event.target.linkedIn.value,
        }

        fetch(`https://fathomless-ocean-64226.herokuapp.com/updateProfile/${user.email}`, {
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
                    event.target.reset();
                }
                else {
                    toast.error(`Failed to Update...`)
                }
            });
    }

    return (
        <div className='grid gap-4 grid-cols-2'>
            <div>
                <h2 className='text-2xl font-bold text-primary text-center mt-8'>Update Profile</h2>
                <form className='grid grid-cols-1 gap-3 my-6 justify-items-center' onSubmit={handleUpdateProfile} >
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="text" name='education' placeholder='Education' className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="number" name='phone' placeholder='Phone Number' className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="text" name='address' placeholder='Address' className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="text" name='linkedIn' placeholder='LinkedIn Link' className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="submit" value="Update" className="btn btn-primarybtn btn-primary text-white font-bold w-full max-w-xs" />
                </form>
            </div>

            <div>
                <h2 className='text-2xl font-bold text-primary text-center mt-8'>Your Profile</h2>

                <form className='grid grid-cols-1 gap-3 my-6 justify-items-center'>

                    <input type="text" value={infos?.education} placeholder='Education' className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="number" value={infos?.phone} placeholder='PhoneNumber' className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="text" value={infos?.address} placeholder='Address' className="input input-bordered input-secondary w-full max-w-xs" />

                    <input type="text" value={infos?.linkedIn} placeholder='LinkedIn Profile' className="input input-bordered input-secondary w-full max-w-xs" />
                </form>

            </div>
        </div>
    );
};

export default MyProfile;