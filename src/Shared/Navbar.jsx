import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-xl mb-4 rounded-xl">
            <div className="navbar-start">
               
               <p className="md:text-3xl text-xl font-semibold md:font-bold text-cyan-800">&#8707;nternPlaza</p>
            </div>
           
            <div className="navbar-end">
               <Link className="text-cyan-500 hover:text-cyan-800 font-bold">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;






