import { Link ,useLocation,useNavigate} from "react-router-dom";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import 'animate.css';


import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';

     const Login = () => {        
        <Helmet> <title> Login </title> </Helmet> 
      



    const{login, googleLogin,GithubLogin} = useContext(AuthContext);

    const Location = useLocation();
    
         console.log("Location in the login page",Location);
    
         const Navigate =  useNavigate();
 const handleGitHubLogin=()=>{        
      GithubLogin()
          .then(result =>  {
          console.log(result.user) 
        
          Navigate(  Location?.state ? Location.state : '/' )
          } )
          }
    
    const handlegoogleLogin=()=>{        
    
    googleLogin()
    .then(result =>  {
    console.log(result.user) 
   
    Navigate(  Location?.state ? Location.state : '/' )
    } )
    }
    
    const HandleLogin=(e)=>{
      e.preventDefault()
      const from = new FormData(e.currentTarget);
      const email = from.get('email')  ;
      const password = from.get('password')  ; 
      console.log(email,password) 
      login(email,password)
      .then( Result=>{
            console.log(Result.user) 
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Login Successfully",
              showConfirmButton: false,
              timer: 2500
            });
    
       Navigate(  Location?.state ? Location.state : '/' )
    }     )
    .catch(error=>{
     console.error(error.message)  

  
       Swal.fire({
      icon: "error",
      title: "Oops...",
       text: "Your E-mail & Password Don`t match.Please try again!",
  
});          
    })
    }   
    




    return (
        <div>
          <Helmet>  <title>  NestQuestHub  ||  Login    </title>         </Helmet>
              <div className="mx-auto w-1/2 mt-8 ">
           <h1 className="text-4xl animate__animated animate__rotateIn  font-bold text-center"  >Login to Your Account</h1> 
                <form onSubmit={HandleLogin} className="card-body">    
        <div className="form-control">                    
          <label className="label">
            <span className="label-text  flex "> <MdEmail  className="text-lg" />  Your Email</span>
          </label>
          <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text flex"> <RiLockPasswordFill className="text-lg" />  Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>   
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-violet-500 text-2xl btn-info">Login</button>
        </div>
       
      </form>
          <h1 className="text-center mb-3 text-md "  >Don`t have an Account ? <Link to='/register' className="text-lime-600" >Create an account</Link></h1>
                  
          
            <div className="lg:flex  justify-evenly  "  >
            <button onClick={handlegoogleLogin}    className="btn lg:text-xl  btn-outline  btn-secondary  " > <FcGoogle />  Continue with  Google </button> 
            <button  onClick={handleGitHubLogin} className="btn lg:text-xl btn-outline btn-secondary " >  <ImGithub className="text-black"  />   Continue with  Git-Hub </button> 
            </div>
          
            </div>
          
        </div>
    );
};

export default Login;