import { NavLink } from "react-router-dom";

const Navbar = () => {      
    return (
        <div className="navbar bg-indigo-900 lg:px-40  ">
        <div className="navbar-start   ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5  text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <a className="text-xl text-black " >  <NavLink   to="/">  Home </NavLink></a>
           <a className="text-xl text-black  " >     <NavLink  to="/updated"  > Update Profile      </NavLink></a> 
           <a className="text-xl text-white mx-8  " >    <NavLink  to="/login"  > Login      </NavLink></a>
            </ul>
          </div>
          <a className="  lg:text-4xl font-extrabold  text-orange-200   ">NestQuestHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <a className="text-xl text-white " >  <NavLink   to="/">  Home </NavLink></a>
           <a className="text-xl text-white mx-8  " >    <NavLink  to="/updated"  > Update Profile      </NavLink></a>
           <a className="text-xl text-white mx-8  " >    <NavLink  to="/login"  > Login    </NavLink></a>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn    ">Button</a>
        </div>
      </div>
    );
};

export default Navbar;