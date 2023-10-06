import { Link } from "react-router-dom";


const SingUp = () => {
    return (
        <div className="hero">
        <div className="hero-content ">
        
          <div className="card lg:w-[300px] shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="bg-gradient-to-r from-cyan-800  to-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-800 text-xl  px-4 py-2 rounded-md text-white">Login</button>
              </div>
            </form>
            <p className="text-center text-sm mb-4">Already  have an account? <Link to='/login' className="text-cyan-800 font-bold">Login</Link> here</p>
          </div>
        </div>
      </div>
    );
};

export default SingUp;