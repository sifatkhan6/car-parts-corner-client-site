import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/Login/RequireAuth';
import Login from './Pages/Login/Login'
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Navbar/Navbar';
import Purchase from './Pages/Purchase/Purchase';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOders from './Pages/Dashboard/MyOrders'
import MyReviews from './Pages/Dashboard/MyReviews'
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin'
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import Payment from './Pages/Dashboard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:productID' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/orders' element={<MyOders></MyOders>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/dashboard/reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='/dashboard/users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='/dashboard/addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='/dashboard/manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='/dashboard/manageAllOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
