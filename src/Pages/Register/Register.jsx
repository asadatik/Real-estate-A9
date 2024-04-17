
import { Link ,useNavigate,useLocation} from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";







const Register = () => {             
  <Helmet> <title> Register </title> </Helmet>
  const{ Creatuser , updatedUserProfile} = useContext(AuthContext);
    
  const Location = useLocation();
    
  console.log("Location in the login page",Location);

  const Navigate =  useNavigate();   

     

    const HandleLogin=(e)=>{
        e.preventDefault()
        const from = new FormData(e.currentTarget);
               console.log(from)
          const Name =  (from.get('name'));
          const Photo =  (from.get('photo'));
          const email             =  (from.get('email'));
          const  password =  (from.get('password'))
          console.log(Name,Photo,email,password); 
        /////// create User //// ///////////
               Creatuser(email,password,Name,Photo) 
           .then( Result=>  {
            updatedUserProfile(Name,Photo)
            Navigate(  Location?.state ? Location.state : '/' )    
              console.log(Result.user) 
           }     )
           .catch(error=>{
            console.error(error)
           })
    } 



    return (
        <div className="mt-10" >
     
         
       <div className="mx-auto w-1/2 mt-8 ">
       <h1 className="text-3xl font-bold text-center"  >  Create An Account</h1> 
            <form onSubmit={HandleLogin} className="card-body">
            <div className="form-control">
        <label className="label">
        <span className="label-text"> Your  Name</span>
      </label>
      <input type="text"  placeholder="Your Name"  name="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text"> Your  photo Url  </span>
      </label>
      <input type="text" placeholder="photo url"  name="photo" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">   Email</span>
      </label>
      <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-secondary">Register</button>       
    </div>
  </form>
      <h1 className="text-center text-lg  "  >Already have an Account ? < Link to='/login' className="text-lime-600" >Login</Link></h1>
 </div>
    </div>
    );
};

export default Register;