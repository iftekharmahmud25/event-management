import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-xl mb-4 rounded-xl">
            <div className="navbar-start">

               <Link to='/'> <p className="md:text-3xl text-xl font-semibold md:font-bold text-cyan-800">&#8707;ntertainPlaza</p></Link>
            </div>

            <div className="navbar-end">
               
                <NavLink
                    to='/login'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active underline text-cyan-800 font-bold pe-3" : "text-cyan-500 font-bold pe-3"
                    }
                >
                 Login
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;






