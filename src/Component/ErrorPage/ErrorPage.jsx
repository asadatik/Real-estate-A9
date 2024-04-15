import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
             <div className='text-center'>
            <h1 className='text-[400px] font-bold'>
                404
            </h1>

            <h2 className='text-5xl font-bold'>
                NOT FOUND
            </h2>
              
           
        </div>
        <div className=" text-center  mt-8 "  >    <NavLink  to='/'  > < button    className=" bg-amber-400 text-2xl font-medium  btn text-secondary  "  > Back Home </button> </NavLink>     </div>
        </div>
    );
};

export default ErrorPage;