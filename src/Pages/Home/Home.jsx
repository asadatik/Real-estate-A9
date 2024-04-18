import { Helmet } from "react-helmet-async";
import Estate from "../../Component/Estate/Estate";
import Cursole from "../../Component/Swiper/Cursole";


const Home = () => {
    return (
        <div  className="my-10"  >   
            <Helmet>
             <title> NestQuestHub / Home </title>
            </Helmet>
            <Cursole></Cursole>  
            <Estate></Estate>   
        </div>
    );
};

export default Home;