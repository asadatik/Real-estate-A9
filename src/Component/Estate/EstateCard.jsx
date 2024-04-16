import { Link } from "react-router-dom";


const EstateCard = ( { SingleHome }) => {


          const{image,id}            = SingleHome ;
    return (
        <div className="card card-compact  p-5  border bg-base-100 shadow-xl">  
        <figure><img  className="h-52 rounded-t-xl  lg:w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button  className="btn btn-primary"> <Link to={`/SingleHome/${id}`}  className="font-bold text-amber-500 " >Details</Link> </button>  
          </div>
        </div>
      </div>
    );
};

export default EstateCard;