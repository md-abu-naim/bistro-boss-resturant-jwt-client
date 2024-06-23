import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useAuth()
    const [cart] = useCart()

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order/pizza'>Order Food</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/dashboard/cart'>
            <FaCartArrowDown />
            <div className="badge badge-secondary">+{cart.length}</div>
        </Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => console.log(result))
    }
    return (
        <div className="navbar fixed z-20 max-w-screen-xl text-white bg-opacity-30 bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? <button onClick={handleLogOut} className="btn">LogOut</button> : 'kiicu nai'}
            </div>
        </div>
    );
};

export default NavBar;