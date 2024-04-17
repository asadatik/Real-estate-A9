
import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";


const Estate = () => {

    const [ Home ,setHome] = useState([]);
    useEffect( () =>{
          fetch ('Home.json')
          .then(res=>res.json())
                
          .then(data =>setHome(data))
             

        },[])

               console.log(Home)  
    return (
        <div  >
             <h1 className="text-center my-5 bg-sky-500 rounded-t-lg py-2 text-4xl font-semibold "  >Explore Your Dream</h1>
             <div  className="  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >

                     
                     {
                    Home.map( SingleHome =>   <EstateCard key={SingleHome.id} SingleHome={SingleHome}    >    </EstateCard>                   )     

                     }

                     
             </div>
        </div>
    );
};

export default Estate;