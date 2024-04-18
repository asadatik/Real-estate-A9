
import { Link ,useNavigate,useLocation} from "react-router-dom";


import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { MdOutlineError } from "react-icons/md";
import Swal from 'sweetalert2'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const Register = () =>   {             
  <Helmet> <title> Register </title> </Helmet>

        const [Error,setError] = useState('')
        const [ showPass , SetShowPass       ]     = useState(false)

  const{ Creatuser , updatedUserProfile} = useContext(AuthContext);
    
  const Location = useLocation();
    
  console.log("Location in the login page",Location);

  const Navigate =  useNavigate();   

     

    
    const HandleLogin = (e)=>{
        e.preventDefault()
        const from = new FormData(e.currentTarget);
               console.log(from)
          const Name =  (from.get('name'));
          const Photo =  (from.get('photo'));
          const email             =  (from.get('email'));
          const  password =  (from.get('password'))
          console.log( typeof password); 
             //  reset error 
             setError('')
        
          if(password.length<6){
            setError('Password should be at least 6 characters.')
                    return;
                }
              else if ( !/[A-Z]/.test(password) ){
                setError('Your Password Should have at least One upperCase character ');
               return;
              }
              else if(  !/[a-z]/.test(password ) ){
                setError('Your Password Should have at least One LowerCase character ');
                return 
              }
       
         

        // create User ///
               Creatuser(email,password,Name,Photo) 
           .then( Result=>  {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Create User Successfully",
              showConfirmButton: false,
              timer: 2500
            });
            updatedUserProfile(Name,Photo)
            Navigate(  Location?.state ? Location.state : '/' )    
              console.log(Result.user) 
           }     )
           .catch((error)=>{
               setError(error.message)
            Swal.fire({
              icon: "error",
              title: "Oops...",
               text:"Something Wrong! please try again" ,
           })
    }   ) }



   return (
        <div className="mt-10" >
       <Helmet>  <title> Register Page  </title>      </Helmet>
         
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
      <input type="email" placeholder="Enter Your email"  name="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
          
        <div className="relative  "  > 
          <input 
          type= {showPass ? 'text' :   "password" }  
            placeholder="password" 
             name="password" 
              className="input w-full input-bordered" required/>
           <span className="absolute top-4 right-4  " onClick={ () =>SetShowPass (!showPass ) } > 
            { showPass ?<FaEyeSlash className="w-14" />  :       <FaEye className="w-12" />    }
           </span>
          </div>
           
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
     
    </div>
    {  Error && <p className=" text-xl lg:ml-10 flex gap-1 text-red-600 " ><MdOutlineError  className="text-2xl"/>{Error}</p>     }
    <div className="form-control mt-6">
      <button className="btn text-2xl font-semibold btn-secondary">Register</button>       
    </div>
  </form>
      <h1 className="text-center text-xl  "  >Already have an Account ? < Link to='/login' className="text-lime-600" >Login</Link></h1>
 </div>
    </div>
    );
};

  
   export default Register ;