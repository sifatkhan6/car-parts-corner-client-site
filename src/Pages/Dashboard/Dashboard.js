import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col sm:justify-items-center">
                <h2 className='text-primary font-bold text-4xl text-center mt-4'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-44 bg-primary text-white">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>My Profile</Link></li>
                    { <li><Link to={'/dashboard/orders'}>My Order</Link></li>}
                    {admin !== <li><Link to={'/dashboard/reviews'}>Add Review</Link></li>}
                    {admin && <li><Link to={'/dashboard/addProduct'}>Add Product</Link></li>}
                    {admin && <li><Link to={'/dashboard/manageProducts'}>Manage Products</Link></li>}
                    {admin && <li><Link to={'/dashboard/manageAllOrders'}>Manage All Orders</Link></li>}
                    {admin && <li><Link to={'/dashboard/users'}>Make Admin</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;