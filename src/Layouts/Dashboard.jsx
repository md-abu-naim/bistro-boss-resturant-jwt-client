import { FaBook, FaCartArrowDown, FaList, FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaUtensils, FaVoicemail } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

    // get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul>
                    {
                        isAdmin ? <><li><NavLink to='/dashboard/adminHome' className='flex items-center p-4'><FaHome className="mr-2" /> Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/addItems' className='flex items-center p-4'><FaUtensils className="mr-2" /> Add Items</NavLink></li>
                        <li><NavLink to='/dashboard/manageItems' className='flex items-center p-4'><FaList className="mr-2" /> Manage Items</NavLink></li>
                        <li><NavLink to='/dashboard/manageBookings' className='flex items-center p-4'><FaBook className="mr-2" /> Manage Bookings</NavLink></li>
                        <li><NavLink to='/dashboard/users' className='flex items-center p-4'><FaUsers className="mr-2" /> All Users</NavLink></li></>:

                        <><li><NavLink to='/dashboard/userHome' className='flex items-center p-4'><FaHome className="mr-2" /> User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservation' className='flex items-center p-4'><FaCalendar className="mr-2" /> Reservation</NavLink></li>
                        <li><NavLink to='/dashboard/cart' className='flex items-center p-4'><FaCartArrowDown className="mr-2" /> My Cart</NavLink></li>
                        <li><NavLink to='/dashboard/review' className='flex items-center p-4'><FaAd className="mr-2" /> Review</NavLink></li>
                        <li><NavLink to='/dashboard/myBookings' className='flex items-center p-4'><FaList className="mr-2" /> My Bookings</NavLink></li></>
                    }

                    <div className="divider"></div> 
                    {/* shared nav links */}
                    <li><NavLink to='/' className='flex items-center p-4'><FaHome className="mr-2" />Home</NavLink></li>
                    <li><NavLink to='/order/salad' className='flex items-center p-4'><FaList className="mr-2" />Menu</NavLink></li>
                    <li><NavLink to='/contact' className='flex items-center p-4'><FaVoicemail className="mr-2" />Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;