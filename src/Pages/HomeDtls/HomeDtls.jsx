import { useLoaderData, useParams } from "react-router-dom";


const HomeDtls = () => {
    const {id} = useParams();                                 
    const Home = useLoaderData();
         console.log(id)      
         console.log(Home)
      
    const singleId = Home.find( book => book.id == id )
     console.log(singleId);




    return (
        <div>
            <h1>{  singleId.id  }</h1>    
        </div>
    );
};

export default HomeDtls;