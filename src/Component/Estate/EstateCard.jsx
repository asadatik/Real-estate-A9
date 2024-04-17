import { Link } from "react-router-dom";


const EstateCard = ( { SingleHome }) => {


          const{image,id,estate_title,status,description} = SingleHome ;
    return (
        <div className="card card-compact  p-5  border bg-base-100 shadow-xl">  
        <figure><img  className="h-52 rounded-t-xl  lg:w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <div className="flex gap-5   "  >
          <h2 className="card-title    "> {estate_title}  </h2>
          <div className="bg-pink-500 rounded-2xl text-xl font-medium text-white px-1  "   > {status}  </div>
          </div>
          <p  className="text-zinc-500 text-base"  >{description}</p>
          <div className="card-actions">
            <button  className="btn btn-info   "> <Link to={`/SingleHome/${id}`}  className="font-bold  text-lg " >Details</Link> </button>  
          </div>
        </div>
      </div>
    );
};

export default EstateCard;