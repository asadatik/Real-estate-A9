import { Link ,useLocation ,useNavigate} from "react-router-dom";


import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";



const Login = () => {       

    const{login, googleLogin} = useContext(AuthContext);

    const Location = useLocation();
    
         console.log("Location in the login page",Location);
    
         const Navigate =  useNavigate();
    
    
    const handlegoogleLogin=()=>{       
    
    
    
    
    
    
    googleLogin()
    .then(result =>  {
    console.log(result.user) 
    //// /// // //Navigate after login ////
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
      .then( Result=>  {
       console.log(Result.user) 
    //// /// // //Navigate after login ////
       Navigate(  Location?.state ? Location.state : '/' )
    }     )
    .catch(error=>{
     console.error(error)
    })
    }   
    




    return (
        <div>
              <div className="mx-auto w-1/2 mt-8 ">
           <h1 className="text-3xl text-center"  >Login here</h1> 
                <form onSubmit={HandleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
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
          <button className="btn btn-primary">Login</button>
        </div>
       
      </form>
        <h1>Do`t have an Account ? <Link to='/register' className="text-lime-600" >Create an account</Link></h1>
        <button onClick={handlegoogleLogin}   className="btn ml-40  " > Google Login </button>  
            </div>
        </div>
    );
};

export default Login;