import React from 'react';

const ProfileInput = ({ info, refetch }) => {
    return (

        <form className='grid grid-cols-1 gap-3 my-6 justify-items-center'>

            <input type="text" value={info?.education} className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="number" value={info?.phone} className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" value={info?.address} className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" value={info?.linkedIn} className="input input-bordered input-secondary w-full max-w-xs" />
        </form>

    );
};

export default ProfileInput;