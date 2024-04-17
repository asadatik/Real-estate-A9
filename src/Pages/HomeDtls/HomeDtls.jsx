import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
const HomeDtls = () => {
    const {id} = useParams();                                 
    const Home = useLoaderData();
       
      
    const singleId = Home.find( book => book.id == id )
     console.log(singleId);

      const {image,estate_title,segment_name,description,price,status,area,location,facilities} = singleId
                    
    return (
     
     <div  >
                           
   <div className="hero  "   style={{backgroundImage: 'url(https://i.ibb.co/qWBWKcm/istockphoto-1560745231-1024x1024.jpg)'}}  >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div className="lg:flex rounded-3xl p-10 flex-col lg:flex-row mt-12 gap-10 lg:px-32 bg-[#1313130D]  "  >
          <Helmet>  <title> Estate details-{id}  </title> </Helmet>
      <div className="  rounded-2xl " >
         <img className="  lg:w-[650px]   rounded-2xl " src={image} alt="" />
      </div>
      <div>
        <div className="lg:flex gap-5"  >
        <p className="  lg:font-bold lg:text-4xl  " > {segment_name}   </p>
           <div className="bg-pink-500 rounded-2xl text-xl font-medium text-white p-2  "   > {status}  </div>
        </div>
         <hr className="mt-2" />
         <p  className="my-1 font-bold text-2xl text-[#131313CC]  "  > Quality :  <span  className=" font-medium text-xl text-[#131313CC]  "    > {estate_title} </span> </p>
       
            <h3 className=" text-[#131313CC] text-xl  font-bold  " > Description : <span  className=" text-[#131313CC] text-xl  font-medium  "  > {description} </span>  </h3>
             <div className="lg:flex   my-4 gap-5"  >
             <h2 className="  text-[#131313CC] text-xl  font-bold " >   Area :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {area} </span>     </h2> 
                   
                   <h2 className="text-[#131313CC] text-xl  font-bold " >    Price :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {price} </span>     </h2>    
             </div>
{/* location */}
             <h2 className="  text-[#131313CC] text-xl  font-bold " >  Location :  <span className="  text-[#131313CC] text-xl  font-medium  "  > {location} </span>     </h2> 
                  <p  className="text-center text-2xl mt-2  font-bold "   >  Facilities : </p>    
                    <hr className="text-yellow-400 mb-2 "  />
            <div className="  lg:flex gap-6 justify-center "  > 
               <p   className="border-dashed border-2 border-sky-500   text-xl rounded-lg p-1 ">  {facilities[0]} </p>   
               <p   className="border-dashed border-2 border-sky-500  text-xl rounded-lg p-1 " >   {facilities[1]}  </p> 
               <p  className="border-dashed border-2 border-sky-500 text-xl rounded-lg  p-1 "  >   {facilities[2]} </p>
           </div>     
         
      
        
      </div>
     
      </div>
     </div>
    );   
};

export default HomeDtls;