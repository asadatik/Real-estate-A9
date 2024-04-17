import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate,useLocation} from 'react-router-dom'


const PrivetRoute = ({children}) => {
        
           
    const location =  useLocation();
    
  const {user,loading} = useContext(AuthContext);
  console.log(user)
   if(  loading ) {
     return <h1> loading..........</h1>      
   } 

     if(user)   {
        return children 
     }
  
    return <Navigate state={location.pathname}  to='/login' >    </Navigate>




};

export default PrivetRoute;