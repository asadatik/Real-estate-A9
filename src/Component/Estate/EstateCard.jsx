import { Link } from "react-router-dom";


const EstateCard = ( { SingleHome }) => {


          const{image,id,estate_title,status,description} = SingleHome;
    return (
        <div 
        data-aos="flip-up"
          data-aos-duration="2000"
      
        className="card card-compact  p-5  border bg-base-100 shadow-xl">  
        <figure><img  className="h-52 rounded-t-xl  lg:w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="flex gap-5   "  >
          <h2 className="card-title    "> {estate_title}  </h2>
          <div className="bg-pink-500 rounded-2xl text-xl font-medium text-white px-1  "   > {status}  </div>
          </div>
          <p  className="text-slate-400 font-medium text-base"  >{description}</p>
          <div className="card-actions">
            <button  className="btn btn-info   "> <Link to={`/SingleHome/${id}`}  className="font-bold text-white text-lg " >View Property</Link> </button>  
          </div>
        </div>
      </div>
    );
};

export default EstateCard;