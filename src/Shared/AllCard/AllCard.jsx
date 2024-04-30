import { Link } from "react-router-dom";


const AllCard = ({tourist}) => {


    const {
        _id,
        name,
        cost,
        seasonality,
        travel,
        totalVisitorsPerYear,
        photo} = tourist;
    return (
        <div>

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>average_cost: {cost}</p>
    <p>totalVisitorsPerYear: {totalVisitorsPerYear}</p>
    <p>travel_time: {travel}</p>
    <p>seasonality: {seasonality}</p>
    <div className="">
<Link to={`/details/${_id}`}>
           <button className="btn w-full bg-[#c0cece] font-extrabold text-[#195e5e]">View Details</button>
  </Link>

</div>
  </div>
</div>
</div>

  
    );
};

export default AllCard;