import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";


const Userinfo = () => {

    const { user} = useContext(AuthContext)   ;
    console.log(user)
        

    return (
        <div className="hero lg:mt-16  rounded-3xl bg-base-200">
  <div className="hero-content flex-col  lg:gap-16   lg:flex-row">
    <img src={user.photoURL} className=" w-40  rounded-xl shadow-2xl" />    
    <div>
      <h1 className="lg:text-2xl font-medium "> User  Name : {user.displayName} </h1> 
      <p  className="lg:text- 2xl font-medium   my-5 "  >  Email Address : {user.email}                                   </p>
      
      <NavLink to='/updated'  >         <button  className="btn  btn-info">Update Profile?</button>    </NavLink>
    </div>
  </div>
</div>
    );
};

export default Userinfo;