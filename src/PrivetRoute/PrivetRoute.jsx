import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate,useLocation} from 'react-router-dom'


const PrivetRoute = ({children}) => {
        
           
    const location =  useLocation();
    
  const {user,loading} = useContext(AuthContext);
  console.log(user)
   if(  loading ) {
      return  <div  className=" mt-20 flex justify-center   "  >
           <span className="loading loading-bars loading-sm"></span>
     <span className="loading loading-bars loading-md"></span>
     <span className="loading loading-bars loading-lg"></span>  </div>      
   } 
                 
     if(user)   {    
        return children 
     }
  
    return <Navigate state={location.pathname}  to='/login' >    </Navigate> 




};

export default PrivetRoute;