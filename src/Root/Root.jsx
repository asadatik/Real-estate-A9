import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/NavBar/Navbar";


const Root = () => {
    return (
               
            <div>
                 <Navbar >  </Navbar>      
                 
             <div className="2xl:container mx-auto">
                  <Outlet></Outlet>                 
                      
               </div>
                    <Footer></Footer>
            </div>
    );
};

export default Root;