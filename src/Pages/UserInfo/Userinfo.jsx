import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";


const Userinfo = () => {

    const { user} = useContext(AuthContext)   ;
    console.log(user)
        

    return (
        <div className="hero  lg:mt-16  rounded-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
  <div className="hero-content flex-col  lg:gap-16   lg:flex-row">
    <img src={user.photoURL} className=" w-40  rounded-xl shadow-2xl" />    
    <div>
      <h1 className="lg:text-2xl font-bold "> User  Name : {user.displayName} </h1> 
      <p  className="lg:text- 2xl font-semibold   my-5 "  >  Email Address : {user.email}                                   </p>
      
      <NavLink to='/updated'  >         <button  className="btn text-2xl text-white btn-info">Update Profile?</button>    </NavLink>
    </div>
  </div>
</div>
    );
};

export default Userinfo;